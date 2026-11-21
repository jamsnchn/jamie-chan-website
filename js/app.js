// Site code. Content lives in js/content.js, styles in css/styles.css.
const h = React.createElement;
const { useState, useEffect, useRef, useLayoutEffect } = React;

// Interface labels in each language.
const UI = {
  en: {
    sentenceSep: " ",
    nav: { home: "Home", work: "Work", about: "About", experience: "Experience", contact: "Contact", photography: "Photography" },
    navLabel: "Primary", langLabel: "Language", breadcrumb: "Breadcrumb", elsewhere: "Elsewhere",
    focus: "Focus", selectedWork: "Selected work", about: "About", experience: "Experience", sayHello: "Say hello",
    viewProject: " — view project", backToWork: "← Selected work", backHome: "← Home",
    role: "Role", company: "Company", year: "Year", tools: "Tools", link: "Link", visit: "Visit ↗", visitSite: d => "Visit " + d, listSep: ", ",
    byNumbers: "By the numbers", whatIDid: "What I did", gallery: "From the shoot", nextProject: "Next project",
    comingSoon: "Coming soon", photoCount: n => pad2(n) + " photographs", addPhotos: "Add photos to the photos folder",
    photograph: n => "Photograph " + n, open: l => "Open " + l, missing: "Missing: ",
    photoViewer: "Photo viewer", close: "Close", prev: "← Prev", next: "Next →", prevPhoto: "Previous photo", nextPhoto: "Next photo",
    theme: { auto: "Auto", light: "Light", dark: "Dark" }
  },
  zh: {
    sentenceSep: "",
    nav: { home: "首頁", work: "作品", about: "關於", experience: "經歷", contact: "聯絡", photography: "攝影" },
    navLabel: "主選單", langLabel: "語言", breadcrumb: "導覽路徑", elsewhere: "其他平台",
    focus: "專長", selectedWork: "精選作品", about: "關於我", experience: "經歷", sayHello: "聯絡我",
    viewProject: " — 查看專案", backToWork: "← 精選作品", backHome: "← 首頁",
    role: "職位", company: "公司", year: "年份", tools: "工具", link: "連結", visit: "前往 ↗", visitSite: d => "前往 " + d, listSep: "、",
    byNumbers: "成果數據", whatIDid: "我的工作", gallery: "拍攝作品", nextProject: "下一個專案",
    comingSoon: "即將推出", photoCount: n => "共 " + n + " 張照片", addPhotos: "請將照片放入 photos 資料夾",
    photograph: n => "照片 " + n, open: l => "開啟" + l, missing: "找不到檔案：",
    photoViewer: "相片檢視器", close: "關閉", prev: "← 上一張", next: "下一張 →", prevPhoto: "上一張照片", nextPhoto: "下一張照片",
    theme: { auto: "自動", light: "淺色", dark: "深色" }
  }
};

// Layer translated text over the English content (arrays of objects merge by position).
function overlay(base, over) {
  if (over === undefined) return base;
  if (Array.isArray(base) && Array.isArray(over)) {
    if (base.length && typeof base[0] !== "object") return over;
    return base.map((b, i) => overlay(b, over[i]));
  }
  if (base && typeof base === "object" && over && typeof over === "object") {
    const out = { ...base };
    for (const k in over) out[k] = overlay(base[k], over[k]);
    return out;
  }
  return over;
}
const SITE_ZH = overlay(SITE_EN, SITE_ZH_TEXT);
let SITE = SITE_EN;   // the active language's content, swapped by App on every render
let T = UI.en;        // the active language's interface labels

function useLang() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem("lang") === "zh" ? "zh" : "en"; } catch { return "en"; } });
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);
  return [lang, setLang];
}

function LangToggle({ lang, setLang }) {
  return h("div", { className: "pill lang", role: "group", "aria-label": T.langLabel, "data-l": lang },
    h("span", { className: "lang-thumb", "aria-hidden": true }),
    h("button", { lang: "en", "aria-pressed": lang === "en", onClick: () => setLang("en") }, "EN"),
    h("button", { lang: "zh-Hant", "aria-pressed": lang === "zh", onClick: () => setLang("zh") }, "繁中"));
}

const pad2 = n => String(n).padStart(2, "0");

// A project's cover: its image if it has one, otherwise a big placeholder number.
function CoverArt({ p, n }) {
  return p.cover
    ? h("img", { className: "cover-img", src: p.cover, alt: p.coverAlt || "", loading: "lazy", decoding: "async",
        style: p.coverPosition ? { objectPosition: p.coverPosition } : undefined })
    : h("div", { className: "cover-mark", "aria-hidden": true }, pad2(n));
}
const isLink = u => u && u !== "#";
const hostOf = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; } };

function useCopy(text) {
  const [copied, setCopied] = useState(false);
  const copy = () => navigator.clipboard.writeText(text)
    .then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); })
    .catch(() => { location.href = "mailto:" + text; });
  return [copied, copy];
}

function Header({ route, lang, setLang }) {
  const onPhotos = route && route.key === "photography";
  return h("header", null,
    h("nav", { className: "nav-group", "aria-label": T.navLabel },
      h("a", { className: "pill home" + (!route || route.key === "home" ? " current" : ""), href: "#top", "aria-current": !route || route.key === "home" ? "page" : undefined }, T.nav.home),
      ["work", "about", "experience"].map(id =>
        h("a", { key: id, className: "pill navlink", href: "#" + id }, T.nav[id])),
      h("a", { className: "pill photo" + (onPhotos ? " current" : ""), href: "#/photography", "aria-current": onPhotos ? "page" : undefined }, T.nav.photography),
      h("a", { className: "pill navlink", href: "#contact" }, T.nav.contact)
    ),
    h("div", { className: "nav-group" }, h(LangToggle, { lang, setLang }))
  );
}

// Fit the giant headline exactly to the content width.
function BigTitle({ text }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const fit = () => {
      const parent = el.parentElement;
      const cs = getComputedStyle(parent);
      const avail = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      el.style.fontSize = "100px";
      el.classList.remove("wrap");
      el.style.justifyContent = "";
      const words = [...el.children].map(s => s.getBoundingClientRect().width);
      const gap = 18; // .18em at 100px
      const line = words.reduce((a, b) => a + b, 0) + gap * (words.length - 1);
      const single = (100 * avail / line) * 0.985;
      if (single >= 48 || words.length === 1) {
        el.style.fontSize = Math.min(260, single) + "px";
        // Short titles hit the size cap: keep the words together instead of spreading them apart.
        if (single > 260) el.style.justifyContent = "flex-start";
      } else {
        // Narrow screens: stack words, sized so the longest word fills the width.
        el.classList.add("wrap");
        el.style.fontSize = Math.min(120, (100 * avail / Math.max(...words)) * 0.985) + "px";
      }
    };
    fit();
    if (document.fonts) document.fonts.ready.then(fit);
    const ro = new ResizeObserver(fit); ro.observe(el.parentElement);
    return () => ro.disconnect();
  }, [text]);
  // English rises word by word. Chinese has no spaces, so each character rises on its own instead
  // (the word span stays as one block so the sizing above still measures whole words).
  // Keys include the text so switching language remounts the spans and the animation plays again.
  let n = 0;
  return h("h1", { className: "big", ref, "aria-label": text },
    text.split(" ").map((w, i) => CJK.test(w)
      ? h("span", { key: text + i, "aria-hidden": true },
          [...w].map((ch, k) => h("span", { key: k, className: "rise", style: { "--i": n++ } }, ch)))
      : h("span", { key: text + i, className: "rise", style: { "--i": n++ }, "aria-hidden": true }, w)));
}
const CJK = /[㐀-鿿豈-﫿]/;

function Hero() {
  return h("section", { id: "top", className: "pad" },
    h(BigTitle, { text: SITE.title }),
    h("div", { className: "subrow fade" },
      h("span", { className: "hero-sub" }, SITE.subline),
      h("span", { className: "tagline" }, SITE.tagline)
    ),
    h("div", { className: "lede-row" },
      h("p", { className: "lede io" }, h("em", null, SITE.headline + T.sentenceSep), SITE.intro),
      h("div", { className: "expertise io", style: { "--i": 1 } },
        h("span", { className: "label" }, T.focus),
        h("ul", null, SITE.expertise.map(x => h("li", { key: x }, x))))
    )
  );
}

function SecHead({ id, title, count }) {
  return h("div", { id, className: "sec" },
    h("h2", null, title),
    count != null && h("b", { "aria-hidden": true }, pad2(count)));
}

// One shared title size for every tile: the largest that keeps each title on a single line.
const TILE_FS_MAX = 32, TILE_FS_MIN = 18;
function useTileTitleFit(ref, deps) {
  useLayoutEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    const fit = () => {
      delete grid.dataset.wrap;
      grid.style.setProperty("--tile-fs", "100px");   // measure every title at a known size
      let size = TILE_FS_MAX;
      grid.querySelectorAll(".tile-name").forEach(n => {
        const avail = n.parentElement.clientWidth - 8;   // leave room for the hover nudge
        const w = n.offsetWidth;   // layout width, unaffected by the tiles' fade-in scale
        if (w > 0) size = Math.min(size, (100 * avail) / w);
      });
      // Very narrow screens: rather than shrink titles too far, let them wrap.
      if (size < TILE_FS_MIN) { size = TILE_FS_MIN; grid.dataset.wrap = ""; }
      grid.style.setProperty("--tile-fs", Math.floor(size * 10) / 10 + "px");
    };
    let lastW = -1;
    const onResize = () => { const w = grid.clientWidth; if (w !== lastW) { lastW = w; fit(); } };   // width changes only
    onResize();
    if (document.fonts) document.fonts.ready.then(fit);
    const ro = new ResizeObserver(onResize); ro.observe(grid);
    return () => ro.disconnect();
  }, deps);
}

function Work() {
  const ref = useRef(null);
  useTileTitleFit(ref, [SITE.projects]);
  // Projects alternate left / right. Each side is its own column, so every block sits flush to its
  // outside edge and the gap between blocks is the same all the way down.
  const tile = (p, i) => {
    const ar = p.coverRatio || "4 / 5";
    const m = ar.match(/([\d.]+)\s*\/\s*([\d.]+)/);
    const tall = m && +m[1] < +m[2];
    // Width in columns of a 12-column page (each side is 6). `span` in content.js overrides it;
    // tall covers default to 4 so they don't tower over the grid. Tablets get one more column.
    const span = Math.min(6, +p.span || (tall ? 4 : 5));
    const inner = h(React.Fragment, null,
      h("div", { className: "tile-head" },
        h("span", { className: "tile-name" }, p.title),
        h("span", { className: "tile-desc" }, p.desc)),
      h("div", { className: "cover", style: { "--ar": ar } },
        h(CoverArt, { p, n: i + 1 }),
        h("div", { className: "cover-tags" }, p.tags.map(t => h("span", { key: t }, t))))
    );
    return h("li", { key: p.slug, className: "slot io", style: { "--span": span, "--span-t": Math.min(6, span + 1), "--o": i } },
      h("a", { className: "tile", href: "#/work/" + p.slug, "aria-label": p.title + T.viewProject }, inner));
  };
  const items = SITE.projects.map((p, i) => ({ p, i }));
  return h("div", { className: "grid pad", ref },
    h("ul", { className: "grid-col left" }, items.filter(x => x.i % 2 === 0).map(x => tile(x.p, x.i))),
    h("ul", { className: "grid-col right" }, items.filter(x => x.i % 2 === 1).map(x => tile(x.p, x.i))));
}

// Project page cover: use the project's own shape if it's landscape; tall shapes would fill
// several screens at full width, so those (and projects without one) fall back to a wide banner.
function pageRatio(r) {
  const m = r && r.match(/([\d.]+)\s*\/\s*([\d.]+)/);
  return m && +m[1] >= +m[2] ? r : "16 / 8";
}

// Up to 4 numbers sit in one row; more are split into even rows (6 → 3 + 3, 5 → 3 + 2).
const statCols = n => (n <= 4 ? n : Math.ceil(n / 2));

// A project's image sections. `galleries: [{ title, cols, items }]` gives several sections;
// the single-section shorthand `gallery` (+ galleryTitle, galleryCols) still works.
function galleriesOf(p) {
  const list = p.galleries || (p.gallery ? [{ title: p.galleryTitle, cols: p.galleryCols, items: p.gallery }] : []);
  return list.filter(g => g.items && g.items.length > 0);
}

function Project({ p }) {
  const i = SITE.projects.indexOf(p);
  const next = SITE.projects[(i + 1) % SITE.projects.length];
  // `pageCover` swaps in a different image for the top of the project page (the homepage block keeps `cover`).
  const pc = p.pageCover
    ? { ...p, cover: p.pageCover, coverAlt: p.pageCoverAlt || p.coverAlt, coverPosition: p.pageCoverPosition, coverRatio: p.pageCoverRatio }
    : p;
  return h(React.Fragment, null,
    h("section", { className: "pad case" },
      h("nav", { className: "crumbs fade", "aria-label": "Breadcrumb" },
        h("a", { href: "#work" }, T.backToWork),
        h("span", null, pad2(i + 1) + " / " + pad2(SITE.projects.length))),
      h(BigTitle, { text: p.title }),
      h("div", { className: "subrow fade" },
        h("p", { className: "case-desc" }, p.desc),
        h("span", { className: "tagline" }, p.years))
    ),
    h("div", { className: "pad case-cover io" },
      h("div", { className: "cover", style: { "--ar": pageRatio(pc.coverRatio) } },
        h(CoverArt, { p: pc, n: i + 1 }),
        h("div", { className: "cover-tags" }, p.tags.map(t => h("span", { key: t }, t))))),
    h("div", { className: "pad case-body" },
      h("dl", { className: "meta io" },
        [[T.role, p.role], [T.company, p.org], [T.year, p.years], [T.tools, (p.tools || []).join(T.listSep)]].filter(([, v]) => v).map(([k, v]) =>
          h("div", { key: k }, h("dt", { className: "label" }, k), h("dd", null, v)))),
      // A blank line ("\n\n") in a summary starts a new paragraph.
      h("div", { className: "case-summary io" }, String(p.summary || "").split(/\n\s*\n/).map((t, k) => h("p", { key: k }, t))),
      // `url` in content.js: a button under the summary that opens the project's site in a new tab.
      isLink(p.url) && h("a", { className: "visit-btn io", href: p.url, target: "_blank", rel: "noopener noreferrer" },
        T.visitSite(hostOf(p.url)), h("i", { "aria-hidden": true }, "↗"))
    ),
    p.stats && p.stats.length > 0 && h(SecHead, { title: T.byNumbers }),
    p.stats && p.stats.length > 0 && h("ul", { className: "pad stats", style: { "--cols": statCols(p.stats.length) } }, p.stats.map((s, k) =>
      h("li", { key: s.label, className: "io", style: { "--i": k } },
        h("b", null, s.value), h("span", null, s.label)))),
    p.highlights && p.highlights.length > 0 && h(SecHead, { title: T.whatIDid }),
    p.highlights && p.highlights.length > 0 && h("ol", { className: "rows" }, p.highlights.map((t, k) =>
      h("li", { key: k, className: "io", style: { "--i": k } },
        h("div", { className: "row row-static" },
          h("span", { className: "row-n" }, pad2(k + 1)),
          h("span", { className: "row-p" }, t))))),
    galleriesOf(p).map((gal, gi) => h(React.Fragment, { key: gi },
      h(SecHead, { title: gal.title || T.gallery }),
      h("ul", { className: "pad case-gallery", style: gal.cols ? { "--cols": gal.cols } : undefined }, gal.items.map((g, k) =>
        h("li", { key: g.src || k, className: "io" + (g.full ? " full" : g.wide ? " wide" : ""),
          // --span: columns taken on desktop; --mspan: on the 2-column tablet layout (full width if it took over half).
          style: { "--i": k % 4, "--span": g.span, "--mspan": g.full || g.wide || (g.span && g.span * 2 > (gal.cols || 4)) ? 2 : 1 } },
          h("div", { className: "cover", style: { "--ar": g.ratio || "3 / 4" } },
            g.src
              ? h("img", { className: "cover-img", src: g.src, alt: g.alt || "", loading: "lazy", decoding: "async" })
              : h("div", { className: "cover-mark", "aria-hidden": true }, pad2(k + 1)))))))),
    h("a", { className: "next pad io", href: "#/work/" + next.slug },
      h("span", { className: "label" }, T.nextProject),
      h("span", { className: "next-t" }, next.title, h("i", { "aria-hidden": true }, " →")))
  );
}

// Routes: "#/work/<slug>" → project page, "#/photography" → photo gallery, anything else → home.
function readRoute() {
  if (/^#\/photography/.test(location.hash)) return { key: "photography" };
  const m = location.hash.match(/^#\/work\/([\w-]+)/);
  const project = m && SITE.projects.find(p => p.slug === m[1]);
  return project ? { key: "work/" + project.slug, project } : { key: "home" };
}
function useRoute() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const on = () => setRoute(prev => { const next = readRoute(); return next.key === prev.key ? prev : next; });
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);
  return route;
}

// Placeholder shapes shown until real photos are listed in PHOTOS.
const PLACEHOLDER_RATIOS = ["4 / 5", "3 / 2", "1 / 1", "2 / 3", "4 / 3", "4 / 5", "3 / 2", "2 / 3", "1 / 1"];

// A photo with its Chinese caption/place swapped in when the site is in Chinese.
const photoText = p => (SITE === SITE_ZH && p.zh ? { ...p, ...p.zh } : p);

function Photo({ photo, index, stagger, onOpen }) {
  const [failed, setFailed] = useState(false);
  const label = photo.caption || T.photograph(index + 1);
  return h("li", { className: "shot io", style: { "--i": (stagger !== undefined ? stagger : index) % 4 } },
    h("button", { className: "shot-btn", onClick: () => onOpen(index), "aria-label": T.open(label) },
      failed
        ? h("div", { className: "shot-ph", style: { "--ar": photo.ratio || "4 / 5" } }, h("span", null, T.missing + photo.src))
        : h("img", { src: photo.src, alt: photo.caption || "", loading: "lazy", decoding: "async", style: photo.ratio ? { aspectRatio: photo.ratio } : undefined, onError: () => setFailed(true) })),
    (photo.caption || photo.place || photo.year) && h("div", { className: "shot-cap" },
      h("span", null, photo.caption),
      h("span", null, [photo.place, photo.year].filter(Boolean).join(", "))));
}

function Lightbox({ index, onClose, onStep }) {
  const photo = photoText(PHOTOS[index]);
  const closeRef = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current && closeRef.current.focus();
    const key = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", key); document.body.style.overflow = ""; prev && prev.focus && prev.focus(); };
  }, []);
  return h("div", { className: "lb", role: "dialog", "aria-modal": true, "aria-label": T.photoViewer, onClick: e => { if (e.target === e.currentTarget) onClose(); } },
    h("div", { className: "lb-top" },
      h("span", null, pad2(index + 1) + " / " + pad2(PHOTOS.length)),
      h("button", { ref: closeRef, className: "lb-btn", onClick: onClose }, T.close)),
    h("img", { key: photo.src, className: "lb-img", src: photo.src, alt: photo.caption || "" }),
    h("div", { className: "lb-bottom" },
      h("button", { className: "lb-btn", onClick: () => onStep(-1), "aria-label": T.prevPhoto }, T.prev),
      h("span", { className: "lb-cap" }, [photo.caption, photo.place, photo.year].filter(Boolean).join(" · ")),
      h("button", { className: "lb-btn", onClick: () => onStep(1), "aria-label": T.nextPhoto }, T.next)));
}

// Photography masonry: each photo goes into whichever column is currently shortest, so photos that
// sit next to each other in PHOTOS land side by side and spill into the row below as a group.
const ratioOf = r => { const [w, h] = String(r || "3 / 4").split("/").map(Number); return w > 0 && h > 0 ? h / w : 4 / 3; };
const colsFor = w => (w > 1280 ? 4 : w > 900 ? 3 : w > 560 ? 2 : 1);   // keep in step with the .masonry CSS
function useMasonryCols() {
  const [cols, setCols] = useState(() => colsFor(innerWidth));
  useEffect(() => {
    const on = () => setCols(colsFor(innerWidth));
    addEventListener("resize", on);
    return () => removeEventListener("resize", on);
  }, []);
  return cols;
}
function masonry(photos, n) {
  const cols = Array.from({ length: n }, () => ({ h: 0, items: [] }));
  photos.forEach((p, i) => {
    const c = cols.reduce((a, b) => (b.h < a.h - 0.001 ? b : a));   // shortest column, leftmost on a tie
    c.items.push(i);
    c.h += ratioOf(p.ratio) + 0.12;                                 // + room for the caption and gap
  });
  return cols.map(c => c.items);
}

function Photography() {
  const [open, setOpen] = useState(null);
  const step = d => setOpen(i => (i + d + PHOTOS.length) % PHOTOS.length);
  const empty = PHOTOS.length === 0;
  const n = useMasonryCols();
  const first = useRef(true);
  useLayoutEffect(() => {
    // A new column count rebuilds the columns, so show the moved photos straight away instead of fading them in again.
    if (first.current) { first.current = false; return; }
    document.querySelectorAll(".masonry .io").forEach(el => el.classList.add("in"));
  }, [n]);
  return h(React.Fragment, null,
    h("section", { className: "pad case" },
      h("nav", { className: "crumbs fade", "aria-label": "Breadcrumb" },
        h("a", { href: "#top" }, T.backHome),
        h("span", null, empty ? T.comingSoon : T.photoCount(PHOTOS.length))),
      h(BigTitle, { text: T.nav.photography }),
      h("div", { className: "subrow fade" },
        h("p", { className: "case-desc" }, SITE.photographyIntro),
        h("span", { className: "tagline" }, SITE.photographyTagline))
    ),
    empty
      ? h("ul", { className: "pad gallery" }, PLACEHOLDER_RATIOS.map((ar, i) =>
          h("li", { key: i, className: "shot io", style: { "--i": i % 3 } },
            h("div", { className: "shot-ph", style: { "--ar": ar } }, i === 0 && h("span", null, T.addPhotos)))))
      : h("div", { className: "pad masonry" }, masonry(PHOTOS, n).map((col, c) =>
          h("ul", { key: n + "-" + c, className: "masonry-col" }, col.map((i, row) =>
            h(Photo, { key: PHOTOS[i].src, photo: photoText(PHOTOS[i]), index: i, stagger: row + c, onOpen: setOpen }))))),
    open !== null && h(Lightbox, { index: open, onClose: () => setOpen(null), onStep: step })
  );
}

function About() {
  return h("div", { className: "about pad io" },
    h("div", { className: "about-body" }, SITE.about.map((t, i) => h("p", { key: i }, t))));
}

// Each row is a button that opens a short summary underneath it (several can be open at once).
function Experience() {
  const [open, setOpen] = useState({});
  const toggle = i => setOpen(o => ({ ...o, [i]: !o[i] }));
  return h("ul", { className: "rows" }, SITE.experience.map((e, i) => {
    const isOpen = !!open[i], has = e.points && e.points.length > 0, id = "exp-" + i;
    const cells = [
      h("span", { key: "n", className: "row-n" }, pad2(i + 1)),
      h("span", { key: "t", className: "row-t" }, e.role),
      h("span", { key: "d", className: "row-d" }, e.org),
      h("span", { key: "v", className: "row-v" }, e.years, has && h("i", { className: "exp-icon", "aria-hidden": true }))
    ];
    return h("li", { key: i, className: "io exp", "data-open": isOpen ? "" : undefined, style: { "--i": i } },
      has
        ? h("button", { type: "button", className: "row exp-row", "aria-expanded": isOpen, "aria-controls": id, onClick: () => toggle(i) }, cells)
        : h("div", { className: "row" }, cells),
      has && h("div", { id, className: "exp-panel", role: "region", "aria-hidden": !isOpen, inert: isOpen ? undefined : "" },
        h("div", { className: "exp-inner" },
          h("ul", { className: "exp-points" }, e.points.map((t, k) => h("li", { key: k }, t))))));
  }));
}

function Contact() {
  return h("div", { className: "contact pad io" },
    h("a", { className: "contact-big", href: "mailto:" + SITE.email }, SITE.email));
}

function ThemeToggle() {
  const [mode, setMode] = useState(() => { try { return localStorage.getItem("theme") || "auto"; } catch { return "auto"; } });
  useEffect(() => {
    // applyTheme / autoTheme live in index.html so the right theme is set before the page first paints.
    applyTheme(mode);
    try { localStorage.setItem("theme", mode); } catch {}
    if (mode !== "auto") return;
    // On auto, re-check every minute (and when the tab comes back) so it flips at sunrise/sunset times.
    const tick = () => applyTheme("auto");
    const id = setInterval(tick, 60000);
    document.addEventListener("visibilitychange", tick);
    return () => { clearInterval(id); document.removeEventListener("visibilitychange", tick); };
  }, [mode]);
  return h("span", { className: "theme" }, ["auto", "light", "dark"].map(m =>
    h("button", { key: m, "aria-pressed": mode === m, onClick: () => setMode(m) }, T.theme[m])));
}

function Footer() {
  return h("footer", { className: "pad" },
    h("div", { className: "foot-row" },
      h("nav", { "aria-label": T.elsewhere }, SITE.links.map(l => h("a", { key: l.label, href: l.url }, l.label + " ↗"))),
      h(ThemeToggle),
      h("span", null, "© " + new Date().getFullYear() + " " + SITE.name))
  );
}

function App() {
  const [lang, setLang] = useLang();
  SITE = lang === "zh" ? SITE_ZH : SITE_EN;   // swap content + UI text for every component below
  T = UI[lang];
  const route = useRoute();
  // Look the project up by slug in the active language, so switching language re-renders its page
  // (the route keeps the object from whichever language was active when the page was opened).
  const project = route.project && SITE.projects.find(p => p.slug === route.project.slug);
  useLayoutEffect(() => {
    // New page: jump to the top, or to the section named in the hash (e.g. #work).
    const id = location.hash.slice(1);
    const target = route.key === "home" && id && !id.startsWith("/") && document.getElementById(id);
    if (target) target.scrollIntoView(); else scrollTo(0, 0);
  }, [route]);
  useEffect(() => {
    document.title = project ? project.title + " — " + SITE.name
      : route.key === "photography" ? T.nav.photography + " — " + SITE.name : SITE.name;
  }, [route, lang]);
  useEffect(() => {
    const els = document.querySelectorAll(".io:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [route, lang]);
  return h(React.Fragment, null,
    h(Header, { route, lang, setLang }),
    route.key === "photography" ? h("main", { key: "photography" }, h(Photography)) :
    project ? h("main", { key: project.slug }, h(Project, { p: project })) : h("main", { key: "home" },
      h(Hero),
      h(SecHead, { id: "work", title: T.selectedWork }),
      h(Work),
      h(SecHead, { id: "about", title: T.about }),
      h(About),
      h(SecHead, { id: "experience", title: T.experience }),
      h(Experience),
      h(SecHead, { id: "contact", title: T.sayHello }),
      h(Contact)
    ),
    h(Footer)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
