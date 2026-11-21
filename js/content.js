// ─── Edit your content here ───────────────────────────────────────────
const SITE_EN = {
  name: "Jamie Chan",
  title: "Jamie Chan",      // the giant headline across the top
  tagline: "Boston · Hong Kong",           // small uppercase line under it, on the right
  subline: "Northeastern University | Marketing & Supply Chain Management",   // small line under the headline, on the left
  photographyIntro: "A collection of photographs from my travels, shoots and everyday life.",
  photographyTagline: "Shot by Jamie Chan",
  headline: "Hi, I’m Jamie, a brand builder.",   // first sentence of the intro, shown in full-strength ink
  intro: "I’ve worked at agencies and founded a brand of my own. I enjoy helping brands recognize their worth and express it through media, design, and art direction.",
  expertise: ["Brand strategy", "Art direction", "Performance marketing", "E-commerce", "Influencer marketing", "Product development"],
  about: [
    "I'm studying Business Administration at Northeastern's D'Amore-McKim School of Business, concentrating in Marketing and Supply Chain Management. I grew up between Vancouver and Hong Kong and speak English, Mandarin and Cantonese natively.",
    "My work sits where creative and commercial meet: shaping a brand's identity and art direction, then making it sell through paid media, email and creators. Outside of work you'll find me playing soccer, behind a camera, listening to jazz, cooking, or looking at furniture design."
  ],
  // Each project gets its own page at #/work/<slug>. Add `url` to show a "Visit" link on that page.
  // Add `cover: "assets/work/<project>/<file>.jpg"` to show an image on the project's tile and page,
  // and `coverRatio: "3 / 2"` to fix the cover's shape (otherwise the layout picks one).
  // On the homepage, projects alternate left / right in list order (1st left, 2nd right, ...).
  // `span: 5` sets how wide the block is, out of 12 columns (max 6, half the page). Default: 5, or 4 for tall covers.
  // `pageCover` (plus optional pageCoverAlt, pageCoverRatio) uses a different image on the project page itself.
  // `gallery` lists extra photos shown on the project page: { src, alt, ratio }. Leave out `src` for a placeholder.
  //   Optional: `galleryTitle` (section heading) and `galleryCols` (images per row on desktop, default 4).
  //   For several sections, use `galleries: [{ title, cols, items: [...] }, ...]` instead (see LODRO).
  projects: [
    {
      slug: "lodro", title: "LODRO",
      url: "https://lodro.co/",   // shows a "Visit lodro.co" button on the project page
      cover: "assets/work/lodro/lodro-hero.jpg",
      coverAlt: "The LODRO monogram and wordmark in white over a dim interior with a rust-red sunken lounge, black sculptural blocks and a curved wooden bench",
      coverRatio: "3 / 2",   // shape of the cover image, width / height
      span: 5,               // block width on the homepage, out of 12 columns
      desc: "Founded a direct-to-consumer leather bag brand: 145+ customers in 17 countries at a $329 average order.",
      tags: ["Founder", "Shopify", "Klaviyo"],
      role: "Founder", org: "LODRO · Hong Kong", years: "2024 – 2026",
      tools: ["Shopify", "Figma", "Klaviyo", "Particl", "Meta Ads", "Lightroom"],
      summary: "I started LODRO to fill a gap I kept noticing: bags were either technical nylon or expensive designer leather, with little in between. I led everything from creative direction and branding to product development, packaging, sampling, supply chain and the website.",
      stats: [
        { value: "145+", label: "Customers" },
        { value: "17", label: "Countries" },
        { value: "$329", label: "Average order" },
        { value: "80%+", label: "Sell-through, core styles" },
        { value: "120K+", label: "Instagram reach in 60 days" },
        { value: "3–5x", label: "Meta Ads ROAS" }
      ],
      highlights: [
        "Researched 25 competitor brands and 300+ bag styles on Particl to find best-selling styles, colors and sizes. That research showed the gap between technical nylon and designer leather, and shaped the first collection of 8 bags.",
        "Took an 8-style leather line from sampling to launch. Three hero crossbody bags drove more than 60% of total sales.",
        "Wireframed the Shopify site in Figma and connected it to a 3PL, a CRM and ad pixels.",
        "Built 4 segmented Klaviyo email flows for conversion, retention and cart recovery, growing the list to 500 profiles.",
        "Art directed 3 major photoshoots and color graded 2,000+ assets in Lightroom, used across the website, social media and paid ads.",
        "Managed LODRO's social media and Meta Ads. Instagram accounted for over half of all store traffic and drove 55K+ store sessions.",
        "Ran the influencer gifting program with 20+ menswear and lifestyle creators, who produced 60 pieces of UGC and 110,000+ engagements."
      ],
      // Image sections on the project page, in order. `cols` = images per row on desktop (default 4).
      galleries: [
        {
          // Pages from the LODRO brand identity deck (originals in source/LODRO Brand Deck).
          title: "Brand identity", cols: 2,
          items: [
            { src: "assets/work/lodro/lodro-brand-wordmark.jpg", ratio: "16 / 9",
              alt: "Brand deck page, Logo: Wordmark. The LODRO wordmark in black on white, white on black, and tone-on-tone earth and purple versions" },
            { src: "assets/work/lodro/lodro-brand-icon.jpg", ratio: "16 / 9",
              alt: "Brand deck page, Logo: Icon. The LODRO monogram in four colourways, with a repeating monogram pattern along the bottom" },
            { src: "assets/work/lodro/lodro-brand-clearspace.jpg", ratio: "16 / 9",
              alt: "Brand deck page, Clearspace. A grid showing the clear space around the wordmark, measured by its L, above an oversized LODRO wordmark" },
            { src: "assets/work/lodro/lodro-brand-colours.jpg", ratio: "16 / 9",
              alt: "Brand deck page, Brand Colours. Black and white primaries with Earth, Clay, Amethyst Purple, Dark Violet, Sand and Smoke Grey swatches and their Pantone and HEX values" }
          ]
        },
        {
          // Screenshots of the LODRO Shopify site (originals in source/LODRO Site Screenshots).
          title: "The website", cols: 2,
          items: [
            { src: "assets/work/lodro/lodro-site-shop.jpg", ratio: "5 / 3",
              alt: "LODRO website shop page: a grid of black and taupe leather bags on grey backdrops, from the Fold Crossbody at $325 to the Alta Briefcase at $975" },
            { src: "assets/work/lodro/lodro-site-product.jpg", ratio: "5 / 3",
              alt: "LODRO website product page for the Fold Crossbody Bag at $325, with add-to-cart and Shop Pay buttons and expandable materials, features, specs and shipping sections" },
            { src: "assets/work/lodro/lodro-site-gallery.jpg", ratio: "5 / 3",
              alt: "LODRO website gallery page: behind-the-scenes and still life photos from the bag shoots" },
            { src: "assets/work/lodro/lodro-site-journal.jpg", ratio: "5 / 3",
              alt: "LODRO website journal page with three stories: Capsule Collection 001, The Plateau Collection: At Home with Nature, and The Daisy Chair: Exceeding the Limits of 3D Veneer" }
          ]
        }
      ]
    },
    {
      slug: "still-life", title: "Still Life",
      cover: "assets/work/still-life/still-life.jpg",
      coverAlt: "A black leather LODRO crossbody bag balanced on a stack of white plates with a slice of bread",
      pageCover: "assets/work/still-life/still-life-page.jpg",   // image at the top of the project page
      pageCoverAlt: "A black leather LODRO crossbody bag resting on a row of eggs beside a glass shaker",
      pageCoverRatio: "3 / 2",
      coverRatio: "3 / 4",   // shape of the cover image, width / height
      desc: "LODRO bags presented as art in the genre of still life, framed as sculptural objects.",
      tags: ["Art direction", "Still life", "Product"],
      role: "Art director", org: "LODRO", years: "March 2026",
      tools: ["Creative brief", "Set styling", "Lightroom"],
      summary: "This shoot presents LODRO bags as art in the genre of still life. The bags are placed either by themselves or within carefully composed arrangements alongside other objects. This serves to elevate the bags beyond utility and frame them as sculptural objects.",
      stats: [],
      highlights: [
        "Wrote the creative brief to present LODRO bags as art in the genre of still life.",
        "Composed each frame with the bags on their own or arranged alongside everyday objects, like eggs and glass.",
        "Built the timeline, arranged the logistics, brought the crew together and directed them on set.",
        "Color graded the final images in Lightroom for the website, social media and paid ads."
      ],
      // More photos from the shoot, shown on the project page. Entries without `src` show as placeholders.
      // `wide: true` makes a landscape photo take up two columns.
      gallery: [
        { src: "assets/work/still-life/still-life-alta.jpg", ratio: "3 / 4",
          alt: "A black leather LODRO briefcase balanced on a white printer with papers, a steel cup, a toy car, glasses and an olive silk tie" },
        { src: "assets/work/still-life/still-life-arc.jpg", ratio: "3 / 4",
          alt: "A black leather LODRO shoulder bag on a stand of wooden blocks, with a leather ball, a turned wooden column and keys" },
        { src: "assets/work/still-life/still-life-orin.jpg", ratio: "3 / 4",
          alt: "A black leather LODRO crossbody bag on a stack of white plates beside a slice of bread and a glass jug, cut by hard shadow" },
        { src: "assets/work/still-life/still-life-orin-close.jpg", ratio: "3 / 4",
          alt: "Close-up of a black leather LODRO bag with its embossed logo, a steel bottle opener and a glass shaker" },
        { src: "assets/work/still-life/still-life-crease-egg.jpg", ratio: "3 / 2", wide: true,
          alt: "A black creased-leather LODRO crossbody bag resting on a row of eggs beside a glass shaker" },
        { src: "assets/work/still-life/still-life-group.jpg", ratio: "3 / 4",
          alt: "A black leather LODRO bag stacked on top of a taupe leather LODRO bag with a silver D-ring" },
        { src: "assets/work/still-life/still-life-trace.jpg", ratio: "3 / 4",
          alt: "A taupe and black LODRO bag seen from above, unzipped to show headphones, gloves, sunglasses, a leather ball and perfume" }
      ]
    },
    {
      slug: "carried-through-space", title: "Carried Through Space",
      cover: "assets/work/carried-through-space/carried-through-space-1727.jpg",
      coverAlt: "A model in a dark wool coat and sunglasses stands on a reclaimed wood bench before a sculpted sandstone wall piece, holding a black LODRO briefcase and a taupe leather LODRO bag",
      pageCover: "assets/work/carried-through-space/carried-through-space-page.jpg",   // image at the top of the project page
      pageCoverAlt: "A man in a cream knit sweater and sunglasses sits in a wooden chair holding a black LODRO bag, with wooden speakers and shelves behind him",
      pageCoverRatio: "3 / 2",
      coverRatio: "3 / 4",   // shape of the cover image, width / height
      desc: "Introducing LODRO's first bag collection through an architectural, lifestyle lens.",
      tags: ["Art direction", "Lifestyle", "Architecture"],
      role: "Art director", org: "LODRO", years: "December 2025",
      tools: ["Creative brief", "Location scouting", "Lightroom"],
      summary: "“Carried Through Space” introduces the first LODRO bag collection through an architectural, lifestyle lens. It showcases our taste and sets the tone for how LODRO’s bags are meant to exist as part of a certain type of environment.",
      stats: [],        // optional, e.g. { value: "40K", label: "Reach" }. Leave empty to hide this section.
      highlights: [
        "Wrote the creative brief that framed the launch of LODRO’s first bag collection around architecture and lifestyle.",
        "Scouted architectural interiors that matched the environment LODRO’s bags are meant to live in.",
        "Built the timeline, arranged the logistics, brought the crew together and directed them on set.",
        "Color graded the final images in Lightroom for the website, social media and paid ads."
      ],
      // More photos from the shoot, shown three to a row on the project page.
      galleryCols: 3,
      gallery: [
        { src: "assets/work/carried-through-space/carried-through-space-1204.jpg", ratio: "3 / 4",
          alt: "Seen from behind, a model in a brown leather jacket wears a black LODRO crossbody bag, looking into a sunken lounge with rust-red cushions" },
        { src: "assets/work/carried-through-space/carried-through-space-1708.jpg", ratio: "3 / 4",
          alt: "Close-up of hands clasped behind a dark wool coat, holding a black leather LODRO briefcase by its handles" },
        { src: "assets/work/carried-through-space/carried-through-space-1536.jpg", ratio: "3 / 4",
          alt: "A model in a cream knit sweater wears a black creased-leather LODRO crossbody bag, beside a black chair with a woven striped seat and wooden shelving" },
        { src: "assets/work/carried-through-space/carried-through-space-0611.jpg", ratio: "3 / 4",
          alt: "Seen from behind, a model in a cream jacket and brown trousers wears a brown leather LODRO briefcase as a backpack, facing a window in a tiled, wood-panelled kitchen" },
        { src: "assets/work/carried-through-space/carried-through-space-0844.jpg", ratio: "3 / 4",
          alt: "A model in a dark green jacket and sunglasses wears a black leather LODRO messenger bag across the back, beside glass doors and a garden" },
        { src: "assets/work/carried-through-space/carried-through-space-0934.jpg", ratio: "3 / 4",
          alt: "A model in a dark jacket and grey trousers carries a black LODRO shoulder bag in front of a textured white wall, beside a black tufted leather lounge chair" }
      ]
    },
    {
      slug: "lodro-packaging", title: "LODRO Packaging",
      cover: "assets/work/lodro-packaging/lodro-packaging.jpg",
      coverAlt: "LODRO packaging: a warm grey textured box with the LODRO monogram held in two hands, a thank-you card with a landscape print and embossed monogram, and an opened box with tissue-wrapped bag on a wooden desk",
      coverRatio: "3 / 2",   // shape of the cover image, width / height
      span: 5,               // block width on the homepage, out of 12 columns
      desc: "Packaging for LODRO's bags: a textured gift box, monogram details and a handwritten-style thank-you card.",
      tags: ["Packaging", "Branding", "Print"],
      role: "Founder", org: "LODRO", years: "",
      tools: ["Adobe Illustrator", "Figma"],
      summary: "LODRO's packaging was designed to make the moment of opening feel calm and considered, carrying the brand's quiet, earthy identity from the website into the customer's hands.",
      stats: [],
      highlights: [
        "Designed the warm grey textured gift box with the LODRO monogram and wordmark.",
        "Created the insert card pairing a landscape image with an embossed monogram, and wrote the thank-you note inside.",
        "Specified the unboxing sequence of box, tissue wrap and card so every order arrives the same way."
      ]
    },
    {
      slug: "lodro-creators", title: "LODRO Creators",
      cover: "assets/work/lodro-creators/lodro-creators.jpg",
      coverAlt: "Three creator Instagram posts featuring LODRO bags, from kunmibalogun, lookslikeaxuan and carlkho_",
      coverRatio: "3 / 2",   // shape of the cover image, width / height
      span: 5,               // block width on the homepage, out of 12 columns
      desc: "Built LODRO's influencer gifting program: 20+ creators, 60 pieces of UGC and 110,000+ engagements.",
      tags: ["Influencer marketing", "UGC", "Instagram"],
      role: "Founder", org: "LODRO", years: "",
      tools: ["Creator database", "Instagram", "Gifting"],
      summary: "I built and ran LODRO's influencer gifting program, putting our bags in the hands of menswear and lifestyle creators whose style matched the brand. Their posts showed the bags in real, everyday use.",
      stats: [
        { value: "20+", label: "Creators partnered with" },
        { value: "60", label: "Pieces of UGC" },
        { value: "110K+", label: "Engagements" }
      ],
      highlights: [
        "Built a creator database tracking contact info, content style and platform performance to source and vet partners.",
        "Partnered with 20+ menswear and lifestyle creators through product gifting.",
        "The creators produced 60 pieces of UGC, generating 110,000+ engagements across all influencer posts.",
      ],
      // Creator unboxing stories, shown on the project page. `galleryTitle` replaces the default "From the shoot".
      galleryTitle: "Unboxed by creators",
      gallery: [
        { src: "assets/work/lodro-creators/lodro-creators-01.jpg", ratio: "5 / 8",
          alt: "A creator's Instagram story of an unboxed black LODRO bag with a handwritten thank-you note, LODRO card and dust bag, captioned \"Thank you! @lodro.co\"" },
        { src: "assets/work/lodro-creators/lodro-creators-02.jpg", ratio: "5 / 8",
          alt: "A creator's hands lifting a black LODRO bag from its dust bag and tissue paper on a wooden desk" },
        { src: "assets/work/lodro-creators/lodro-creators-03.jpg", ratio: "5 / 8",
          alt: "A creator's Instagram story of a black creased-leather LODRO bag beside its dust bag, captioned \"@lodro.co thank you\"" },
        { src: "assets/work/lodro-creators/lodro-creators-04.jpg", ratio: "5 / 8",
          alt: "A creator's Instagram story of a black LODRO bag in its grey gift box with a handwritten note, captioned \"Such a sick piece @lodro.co Thanks guys\"" }
      ]
    },
    {
      slug: "arrival-on-the-roof-of-the-world", title: "Arrival on the Roof of the World",
      cover: "assets/work/arrival-on-the-roof-of-the-world/arrival-on-the-roof-of-the-world.jpg",
      coverAlt: "A person reading a newspaper on a sofa with white cushions, set up on the open grassland of the Tibetan plateau under a blue sky",
      coverRatio: "3 / 2",   // shape of the cover image, width / height
      span: 5,               // block width on the homepage, out of 12 columns
      desc: "LODRO's first film trip: furniture samples and custom props set against the Tibetan plateau at 3,500m.",
      tags: ["Art direction", "On location", "Furniture"],
      role: "Art director & Photographer", org: "LODRO × MATSU · Gannan", years: "December 2024",
      tools: ["Creative brief", "Location scouting", "Lightroom"],
      summary: "With product design and development still in progress for LODRO’s yak leather furniture line in partnership with MATSU, our first film trip combined select samples and customized props with the plateau’s surreal scenery to convey a relaxing yet uplifting ambience through abstraction.",
      stats: [
        { value: "3,500m", label: "Altitude" },
        { value: "−20°C", label: "On set" }
      ],
      highlights: [
        "Wrote the creative brief so everyone on the shoot was aligned before we left.",
        "Scouted the location in Gannan Tibetan Autonomous Prefecture, then built the timeline and arranged the logistics for shooting at 3,500m in −20°C.",
        "Paired select samples from the yak leather furniture line with customized props, using the plateau’s surreal scenery to create abstract, uplifting images.",
        "Brought the crew together, directed them on set, and color graded the final images in Lightroom."
      ],
      // A 6-column grid kept to 4 rows: `span` is how many of the 6 columns a photo takes.
      // `wide` photos stretch to the height of the tall photos beside them.
      //   Row 1: sofa (4) + window (2)  ·  Row 2: mailbox, boats, boat on ice (2 each)
      //   Row 3: portrait (2) + valley road (4)  ·  Row 4: behind the scenes (3) + frozen river (3)
      galleryCols: 6,
      gallery: [
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-sofa-grassland.jpg", ratio: "3 / 2", span: 4, wide: true,
          alt: "Yak leather sofa, round ottoman and dark coffee table on a rug, set up on the snow-dusted grassland under a blue sky" },
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-aerial-window.jpg", ratio: "4 / 5", span: 2,
          alt: "Snow-streaked mountains of the plateau seen through an airplane window" },
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-newspaper-mailbox.jpg", ratio: "4 / 5", span: 2,
          alt: "A rolled copy of the Arrival on the Roof of the World newspaper tucked into a metal mail slot in a wooden door" },
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-paper-boats.jpg", ratio: "4 / 5", span: 2,
          alt: "Black and white photo of newspaper boats resting on a frozen river" },
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-paper-boat-ice.jpg", ratio: "4 / 5", span: 2,
          alt: "Black and white photo of a single newspaper boat printed with the project title, floating among broken ice" },
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-portrait-shadow.jpg", ratio: "4 / 5", span: 2,
          alt: "Portrait of a man in a dark robe and face mask, standing in shadow against a sunlit mountainside" },
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-valley-road.jpg", ratio: "3 / 2", span: 4, wide: true,
          alt: "A winding road through a pale valley, with a herd grazing below snow-capped peaks" },
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-bts-shooting.jpg", ratio: "3 / 2", span: 3,
          alt: "Behind the scenes: a photographer shooting the sofa set on the grassland while a crew member adjusts the rug" },
        { src: "assets/work/arrival-on-the-roof-of-the-world/arrival-aerial-frozen-river.jpg", ratio: "3 / 2", span: 3,
          alt: "Aerial view of a frozen river winding through the plateau, white ice against dark earth" }
      ]
    },
    {
      slug: "nomadic-series", title: "Nomadic Series",
      cover: "assets/work/nomadic-series/nomadic-series-jrs.jpg",
      coverAlt: "3D render of the Nomadic Series living set: brown leather and cream sofa modules with bolster cushions, a striped wood coffee table, a dark wood stool and floor cushions on a jute rug, with a black arc floor lamp",
      coverRatio: "3 / 2",   // shape of the cover image, width / height
      span: 5,               // block width on the homepage, out of 12 columns
      desc: "Low, modular furniture inspired by nomadic life, upholstered in yak leather sourced from Tibetan Plateau nomads.",
      tags: ["Product", "Sourcing", "Furniture"],
      role: "Business Development Intern", org: "LODRO x JRS x MATSU", years: "2023 – 2024",
      tools: ["Market research", "Supplier sourcing", "Sampling"],
      summary: "Designed by Joeri Reynaert, the Nomadic Series is a conceptual furniture collection inspired by the nomads of the Tibetan Plateau. Its low-to-the-ground, modular pieces echo the open horizon and the way nomads move with the seasons, bringing the home closer to nature. At its core is yak leather sourced directly from nomadic communities: hides that are a natural byproduct of their way of life, traceable to the town they came from, and available only in small quantities each year.\n\nMy role was to bring the collection from concept to sample: I coordinated the design, sourced materials, communicated with factories and organized sampling. The collection has now completed its first round of samples.",
      stats: [
        { value: "11", label: "Products in the collection" },
        { value: "5", label: "Case studies presented to the CEO & CMO" },
        { value: "1", label: "Supplier partnership, still active" }
      ],
      highlights: [
        "Worked with designers to apply overseas market research to the new 11-product Nomadic Series collection, and visited factories to support sourcing and sampling.",
        "Found LWG-certified, chrome-free tanneries and set up a yak leather supplier partnership that is still active today.",
        "Finalized overseas expansion strategies focused on localization and digital marketing.",
        "Presented 5 branding and social media case studies to the CEO and CMO."
      ],
      // Renders from the JRS x LODRO concept presentation, 19 November 2024
      // (originals in source/JRS x LODRO Concept Presentation).
      galleryTitle: "Concept renders",
      galleryCols: 3,
      gallery: [
        { src: "assets/work/nomadic-series/nomadic-series-jrs.jpg", ratio: "16 / 9",
          alt: "Concept render of the Nomadic Series living set in a brown leather colourway, with cream panels and bolster cushions, a striped wood coffee table, a charred-wood stool and floor cushions on a jute rug, with a black arc floor lamp" },
        { src: "assets/work/nomadic-series/nomadic-series-concept-02.jpg", ratio: "16 / 9",
          alt: "Concept render of the Nomadic Series living set in a cream colourway, with a red-stained wooden coffee table, floor cushions, a charred-wood stool and a black arc floor lamp on a jute rug" },
        { src: "assets/work/nomadic-series/nomadic-series-concept-3.jpg", ratio: "16 / 9",
          alt: "Concept render of the Nomadic Series living set in a grey leather colourway, with cream panels, floor cushions, a charred-wood coffee table and stool and a black arc floor lamp" },
        // Second row: a close-up of each colourway, sitting under its full render.
        { src: "assets/work/nomadic-series/nomadic-series-jrs-close.jpg", ratio: "16 / 9",
          alt: "Close-up concept render of the brown leather colourway: a sofa module with cream panels, bolster cushions bearing the LODRO monogram, a striped wood coffee table and a charred-wood stool" },
        { src: "assets/work/nomadic-series/nomadic-series-concept-02-close.jpg", ratio: "16 / 9",
          alt: "Close-up concept render of the cream colourway: a cream sofa module with charcoal bolster cushions bearing the LODRO monogram, a red-stained coffee table and a charred-wood stool" },
        { src: "assets/work/nomadic-series/nomadic-series-concept-3-close.jpg", ratio: "16 / 9",
          alt: "Close-up concept render of the grey leather colourway: a grey sofa module with cream panels, bolster cushions bearing the LODRO monogram, a striped wood coffee table and a charred-wood stool" }
      ]
    }
  ],
  // Click a row to open its `points` (a short summary of what I did there).
  experience: [
    { years: "2026", role: "Student Intern", org: "WPP Media · Hong Kong", points: [
      "Managed pacing and budget allocation across roughly $200,000 in ad spend for a global sportswear client on Google, Microsoft and Meta.",
      "Optimized search campaigns with daily bid and budget adjustments, holding 90%+ share of voice on core brand terms and reaching up to 20x ROAS during major promotions.",
      "Moved budget from underperforming segments to the strongest audiences and creatives, improving weekly ROAS by 3–5x in key campaigns."
    ] },
    { years: "2024 – 2026", role: "Founder", org: "LODRO · Hong Kong", points: [
      "Founded a direct-to-consumer leather bag brand, leading creative direction, product development, packaging, supply chain and the website, reaching 145+ customers in 17 countries.",
      "Launched an 8-style first collection at a $329 average order value, with 80%+ sell-through on core styles.",
      "Ran social media and Meta Ads at 3–5x ROAS, reaching 120,000+ Instagram accounts in 60 days and driving 55,000+ store sessions.",
      "Partnered with 20+ creators on a gifting program that produced 60 pieces of UGC and 110,000+ engagements."
    ] },
    { years: "2025", role: "Design & Marketing Intern", org: "PLTFRM · Shanghai", points: [
      "Supported 10+ clients with social campaign ideas and localized copy, producing 100+ AI-assisted creatives.",
      "Designed packaging labels and a pitch deck for a fresh produce client.",
      "Redesigned the agency’s website in Figma and advised on art direction for AI livestream sets on Taobao, JD and Pinduoduo."
    ] },
    { years: "2023 – 2024", role: "Business Development Intern", org: "MATSU Group · Shanghai", points: [
      "Developed overseas expansion strategies and presented 5 branding and social media case studies to the CEO and CMO.",
      "Worked with designers to turn market research into the 11-product Nomadic Series furniture collection, visiting factories to support sourcing and sampling.",
      "Established a yak leather supplier partnership with LWG-certified, chrome-free tanneries that is still active today."
    ] }
  ],
  email: "chan.jameso@northeastern.edu",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/jamie-chan1/" },
    { label: "Portfolio", url: "https://acrobat.adobe.com/id/urn:aaid:sc:us:cd2ba2c3-01e0-4b57-8dd8-4853a0b31b93" }
  ]
};

// ─── Your photographs ─────────────────────────────────────────────────
// Put image files in the "photos" folder next to this page, then list them here in the order
// you want them shown; photos next to each other in the list end up next to each other on the page.
// `ratio` is width / height (it lets the layout place photos before they load). caption, place and year
// are optional; `zh` holds the Chinese caption and place.
// Example: { src: "photos/hong-kong-ferry.jpg", ratio: "3 / 4", caption: "Star Ferry", place: "Hong Kong", year: "2025", zh: { caption: "天星小輪", place: "香港" } },
const PHOTOS = [
  { src: "photos/gannan-yak.jpg", ratio: "3 / 2", caption: "Yak", place: "Gannan", year: "2024", zh: { caption: "犛牛", place: "甘南" } },
  { src: "photos/gannan-hills-herd.jpg", ratio: "4 / 5", caption: "Herd", place: "Gannan", year: "2024", zh: { caption: "牧群", place: "甘南" } },
  { src: "photos/gannan-valley-road.jpg", ratio: "3 / 2", caption: "Valley road", place: "Gannan", year: "2024", zh: { caption: "山谷公路", place: "甘南" } },
  { src: "photos/gannan-plateau-ridges.jpg", ratio: "3 / 2", caption: "Plateau", place: "Gannan", year: "2024", zh: { caption: "高原", place: "甘南" } },
  { src: "photos/beijing-seventeen-arch-bridge.jpg", ratio: "3 / 4", caption: "Seventeen-Arch Bridge", place: "Beijing", year: "2025", zh: { caption: "十七孔橋", place: "北京" } },
  { src: "photos/beijing-summer-palace-boats.jpg", ratio: "3 / 4", caption: "Boats in the snow", place: "Beijing", year: "2025", zh: { caption: "雪中遊船", place: "北京" } },
  { src: "photos/hong-kong-facade-grid.jpg", ratio: "3 / 4", caption: "Grid", place: "Hong Kong", year: "2025", zh: { caption: "格子", place: "香港" } },
  { src: "photos/qingyuan-ferris-wheel.jpg", ratio: "3 / 4", caption: "Ferris wheel", place: "Qingyuan", year: "2025", zh: { caption: "摩天輪", place: "清遠" } },
  { src: "photos/prague-old-town-square.jpg", ratio: "3 / 4", caption: "Old Town Square", place: "Prague", year: "2025", zh: { caption: "老城廣場", place: "布拉格" } },
  { src: "photos/prague-st-vitus-cathedral.jpg", ratio: "4 / 3", caption: "St. Vitus Cathedral", place: "Prague", year: "2025", zh: { caption: "聖維特主教座堂", place: "布拉格" } },
  { src: "photos/prague-red-trams.jpg", ratio: "3 / 4", caption: "Trams", place: "Prague", year: "2025", zh: { caption: "電車", place: "布拉格" } },
  { src: "photos/london-wembley-huddle.jpg", ratio: "3 / 4", caption: "FA Cup semi-final", place: "London", year: "2025", zh: { caption: "足總盃準決賽", place: "倫敦" } },
  { src: "photos/london-craven-cottage.jpg", ratio: "3 / 4", caption: "Craven Cottage", place: "London", year: "2025", zh: { caption: "克拉文農舍球場", place: "倫敦" } },
  { src: "photos/porto-apple-on-a-string.jpg", ratio: "3 / 4", caption: "Apple on a string", place: "Porto", year: "2025", zh: { caption: "懸線蘋果", place: "波爾圖" } },
  { src: "photos/rabat-rug-seller.jpg", ratio: "3 / 4", caption: "Rug seller", place: "Rabat", year: "2025", zh: { caption: "地毯商販", place: "拉巴特" } },
  { src: "photos/rabat-lone-swimmer.jpg", ratio: "3 / 4", caption: "Swimmer", place: "Rabat", year: "2025", zh: { caption: "泳者", place: "拉巴特" } },
  { src: "photos/marrakech-poolside-chairs.jpg", ratio: "3 / 4", caption: "Poolside", place: "Marrakech", year: "2025", zh: { caption: "泳池畔", place: "馬拉喀什" } },
  { src: "photos/crete-good-luck-voyager.jpg", ratio: "3 / 4", caption: "Good Luck Voyager", place: "Crete", year: "2023", zh: { caption: "一路順風", place: "克里特島" } }
];
// ──────────────────────────────────────────────────────────────────────


// ─── 繁體中文 content ────────────────────────────────────────────────
// Only the text that differs from English goes here. Anything left out (numbers, links,
// slugs, tool names) falls back to the English version above. Arrays line up by position.
const SITE_ZH_TEXT = {
  name: "陳鍵一",
  title: "陳鍵一",
  tagline: "波士頓 · 香港",
  subline: "美國東北大學 | 市場營銷與供應鏈管理",
  photographyIntro: "我的攝影作品集，記錄旅途、拍攝現場與日常生活。",
  photographyTagline: "攝影：陳鍵一",
  headline: "你好，我是陳鍵一，專注品牌建設。",
  intro: "我有廣告代理公司的工作經驗，同時創立過自有品牌。我喜歡陪著品牌看見自己的價值，透過內容媒介、視覺設計和藝術統籌完成表達。",
  expertise: ["品牌策略", "藝術指導", "效果行銷", "電子商務", "網紅行銷", "產品開發"],
  about: [
    "我目前就讀美國東北大學 D’Amore-McKim 商學院，主修工商管理，專攻市場營銷與供應鏈管理。我在溫哥華與香港兩地長大，英語、普通話與粵語皆為母語。",
    "我的工作處於創意與商業的交匯點：塑造品牌的識別與藝術方向，再透過付費媒體、電子郵件與內容創作者推動銷售。工作之餘，我喜歡踢足球、攝影、聽爵士樂、下廚，或欣賞家具設計。"
  ],
  projects: [
    {
      coverAlt: "白色 LODRO 字母圖示與文字標誌，背景為昏暗的室內空間，有鐵鏽紅下沉式沙發、黑色雕塑感方塊與弧形木長椅",
      desc: "創立直面消費者的皮革包袋品牌：服務 17 個國家逾 145 位顧客，平均訂單金額 329 美元。",
      tags: ["創辦人", "Shopify", "Klaviyo"],
      role: "創辦人", org: "LODRO · 香港",
      summary: "我創立 LODRO，是為了填補一直留意到的市場空白：包袋不是機能尼龍款，就是昂貴的設計師皮革款，中間幾乎沒有選擇。從創意方向、品牌塑造，到產品開發、包裝、打樣、供應鏈與網站，全部由我主導。",
      stats: [{ label: "顧客" }, { label: "國家" }, { label: "平均訂單金額" }, { label: "核心款式售罄率" },
        { value: "12萬+", label: "60 天內 Instagram 觸及" }, { value: "3–5倍", label: "Meta 廣告 ROAS" }],
      highlights: [
        "在 Particl 上研究 25 個競爭品牌與 300 多款包袋，找出最暢銷的款式、顏色與尺寸。研究揭示了機能尼龍與設計師皮革之間的市場空白，並以此打造首個包含 8 款包袋的系列。",
        "帶領 8 款皮革系列從打樣走到上市，其中 3 款主打斜背包貢獻逾 60% 的總銷售額。",
        "以 Figma 繪製 Shopify 網站線框圖，並串接第三方物流（3PL）、CRM 系統與廣告像素。",
        "建立 4 組分眾 Klaviyo 電子郵件流程，涵蓋轉換、留存與棄單挽回，將名單擴展至 500 位用戶。",
        "擔任 3 場大型攝影的藝術指導，並在 Lightroom 為逾 2,000 份素材調色，應用於網站、社群媒體與付費廣告。",
        "管理 LODRO 的社群媒體與 Meta 廣告，Instagram 帶來超過一半的網店流量，累計網店瀏覽逾 5.5 萬次。",
        "主導網紅贈品合作計畫，與 20 多位男裝及生活風格創作者合作，產出 60 則 UGC，累計互動逾 110,000 次。"
      ],
      galleries: [
        {
          title: "品牌識別",
          items: [
            { alt: "品牌手冊頁面「標誌：文字標誌」：LODRO 文字標誌的白底黑字、黑底白字，以及大地色與紫色的同色系版本" },
            { alt: "品牌手冊頁面「標誌：圖示」：LODRO 字母圖示的四種配色，底部為由圖示組成的重複圖案" },
            { alt: "品牌手冊頁面「留白規範」：以字母 L 為單位標示文字標誌四周留白的網格，下方為超大尺寸的 LODRO 文字標誌" },
            { alt: "品牌手冊頁面「品牌色彩」：黑白主色，以及大地色、陶土色、紫水晶色、深紫羅蘭、沙色與煙灰色色票及其 Pantone 與 HEX 色值" }
          ]
        },
        {
          title: "品牌網站",
          items: [
            { alt: "LODRO 網站商店頁面：灰色背景上的黑色與灰褐色皮革包袋，從 325 美元的 Fold 斜背包到 975 美元的 Alta 公事包" },
            { alt: "LODRO 網站 Fold 斜背包商品頁面，售價 325 美元，設有加入購物車與 Shop Pay 按鈕，以及可展開的材質、特色、規格與運送資訊" },
            { alt: "LODRO 網站藝廊頁面：包袋拍攝的幕後花絮與靜物照片" },
            { alt: "LODRO 網站誌頁面，收錄三篇文章：Capsule Collection 001、The Plateau Collection: At Home with Nature 與 The Daisy Chair: Exceeding the Limits of 3D Veneer" }
          ]
        }
      ]
    },
    {
      title: "靜物",
      coverAlt: "一款黑色皮革 LODRO 斜背包擱在一疊白色餐盤與一片麵包之上",
      pageCoverAlt: "一款黑色皮革 LODRO 斜背包放在一排雞蛋上，旁邊是玻璃調味瓶",
      desc: "以靜物畫的手法呈現 LODRO 包袋，將其視為雕塑般的物件。",
      tags: ["藝術指導", "靜物", "產品"],
      role: "藝術指導", years: "2026 年 3 月",
      tools: ["創意簡報", "場景佈置", "Lightroom"],
      summary: "這次拍攝以靜物畫的藝術形式呈現 LODRO 包袋。包袋或單獨擺放，或與其他物件一同精心構圖，藉此讓包袋超越實用功能，成為雕塑般的物件。",
      highlights: [
        "撰寫創意簡報，以靜物畫的藝術形式呈現 LODRO 包袋。",
        "為每個畫面構圖，讓包袋單獨呈現，或與雞蛋、玻璃等日常物件一同擺放。",
        "規劃時程、統籌後勤、召集拍攝團隊並於現場指導。",
        "在 Lightroom 為最終影像調色，應用於網站、社群媒體與付費廣告。"
      ],
      gallery: [
        { alt: "一款黑色皮革 LODRO 公事包平衡擺放在白色印表機上，旁邊有紙張、不鏽鋼杯、玩具車、眼鏡與橄欖色絲質領帶" },
        { alt: "一款黑色皮革 LODRO 肩背包放在木塊堆疊的台座上，旁邊有皮革球、車削木柱與鑰匙" },
        { alt: "一款黑色皮革 LODRO 斜背包擱在一疊白色餐盤上，旁邊是一片麵包與玻璃壺，畫面被強烈陰影切割" },
        { alt: "黑色皮革 LODRO 包的特寫，可見壓印標誌、不鏽鋼開瓶器與玻璃調味瓶" },
        { alt: "一款黑色皺紋皮革 LODRO 斜背包放在一排雞蛋上，旁邊是玻璃調味瓶" },
        { alt: "一款黑色皮革 LODRO 包疊放在一款配有銀色 D 環的灰褐色皮革 LODRO 包之上" },
        { alt: "俯拍一款灰褐色與黑色相間的 LODRO 包，拉鍊敞開，露出耳機、手套、太陽眼鏡、皮革球與香水" }
      ]
    },
    {
      title: "穿越空間",
      coverAlt: "身穿深色羊毛大衣、戴墨鏡的模特兒站在回收木長凳上，背後是雕塑感砂岩牆飾，手持黑色 LODRO 公事包與灰褐色皮革 LODRO 包袋",
      pageCoverAlt: "一名身穿米白色針織毛衣、戴著墨鏡的男子坐在木椅上，手持黑色 LODRO 包袋，身後是木製音響與層架",
      desc: "以建築與生活風格的視角，呈現 LODRO 首個包袋系列。",
      tags: ["藝術指導", "生活風格", "建築"],
      role: "藝術指導", years: "2025 年 12 月",
      tools: ["創意簡報", "場地勘景", "Lightroom"],
      summary: "「穿越空間」以建築與生活風格的視角，呈現 LODRO 首個包袋系列。它展現了我們的品味，也為 LODRO 包袋應當融入的環境定下基調。",
      highlights: [
        "撰寫創意簡報，以建築與生活風格為主軸，構思 LODRO 首個包袋系列的發布。",
        "勘察與 LODRO 包袋理想環境相符的建築室內空間。",
        "規劃時程、統籌後勤、召集拍攝團隊並於現場指導。",
        "在 Lightroom 為最終影像調色，應用於網站、社群媒體與付費廣告。"
      ],
      gallery: [
        { alt: "從背後看，身穿棕色皮夾克的模特兒斜背黑色 LODRO 斜背包，望向配有鐵鏽紅坐墊的下沉式休息區" },
        { alt: "雙手交握於深色羊毛大衣背後、提著黑色皮革 LODRO 公事包提把的特寫" },
        { alt: "身穿米色針織毛衣的模特兒斜背黑色皺紋皮革 LODRO 斜背包，旁邊是編織條紋座面的黑色椅子與木質層架" },
        { alt: "從背後看，身穿米色外套與棕色長褲的模特兒將棕色皮革 LODRO 公事包當作後背包，面向鋪滿磁磚、木質櫥櫃的廚房窗戶" },
        { alt: "身穿深綠色外套、戴墨鏡的模特兒將黑色皮革 LODRO 郵差包斜背在背後，旁邊是玻璃門與花園" },
        { alt: "身穿深色外套與灰色長褲的模特兒在紋理白牆前背著黑色 LODRO 肩背包，旁邊是一張黑色拉扣皮革休閒椅" }
      ]
    },
    {
      title: "LODRO 包裝",
      coverAlt: "LODRO 包裝：雙手捧著印有 LODRO 字母標誌的暖灰色紋理禮盒、印有風景圖與壓凸標誌的感謝卡，以及在木桌上打開、內有薄紙包裹包袋的禮盒",
      desc: "LODRO 包袋的包裝設計：紋理禮盒、字母標誌細節與感謝卡。",
      tags: ["包裝", "品牌", "印刷"],
      role: "創辦人",
      summary: "LODRO 的包裝旨在讓開箱的一刻顯得平靜而用心，把品牌沉穩、自然的形象從網站延伸到顧客手中。",
      highlights: [
        "設計印有 LODRO 字母標誌與文字標誌的暖灰色紋理禮盒。",
        "製作結合風景圖像與壓凸標誌的內附卡片，並撰寫卡內的感謝語。",
        "規劃禮盒、薄紙包裹與卡片的開箱順序，讓每一份訂單都以同樣的方式送達。"
      ]
    },
    {
      title: "LODRO 創作者合作",
      coverAlt: "三則以 LODRO 包袋為主角的創作者 Instagram 貼文，分別來自 kunmibalogun、lookslikeaxuan 與 carlkho_",
      desc: "建立 LODRO 的網紅贈品合作計畫：逾 20 位創作者、60 則 UGC、累計互動逾 110,000 次。",
      tags: ["網紅行銷", "UGC", "Instagram"],
      role: "創辦人",
      tools: ["創作者資料庫", "Instagram", "產品贈送"],
      summary: "我建立並營運 LODRO 的網紅贈品合作計畫，把包袋交到風格與品牌相符的男裝及生活風格創作者手中。他們的貼文展現了包袋在真實日常中的使用情境。",
      stats: [{ label: "合作創作者" }, { label: "UGC 內容" }, { label: "互動次數" }],
      highlights: [
        "建立創作者資料庫，記錄聯絡資料、內容風格與平台表現，用於尋找及篩選合作對象。",
        "透過產品贈送，與逾 20 位男裝及生活風格創作者合作。",
        "創作者共產出 60 則 UGC，所有網紅貼文累計互動逾 110,000 次。",
      ],
      galleryTitle: "創作者開箱",
      gallery: [
        { alt: "創作者的 Instagram 限時動態：拆封後的黑色 LODRO 包袋，附手寫感謝卡、LODRO 卡片與防塵袋，配文「Thank you! @lodro.co」" },
        { alt: "創作者雙手在木桌上從防塵袋與薄紙中取出一款黑色 LODRO 包袋" },
        { alt: "創作者的 Instagram 限時動態：黑色皺紋皮革 LODRO 包袋放在防塵袋旁，配文「@lodro.co thank you」" },
        { alt: "創作者的 Instagram 限時動態：灰色禮盒中的黑色 LODRO 包袋與手寫卡片，配文「Such a sick piece @lodro.co Thanks guys」" }
      ]
    },
    {
      title: "抵達世界屋脊",
      coverAlt: "一人坐在擺有白色靠墊的沙發上看報紙，沙發佈置於藍天下青藏高原的開闊草原上",
      desc: "LODRO 首次外拍：在海拔 3,500 米的青藏高原上，以家具樣品與訂製道具創作影像。",
      tags: ["藝術指導", "外景拍攝", "家具"],
      role: "藝術指導與攝影師", org: "LODRO × MATSU · 甘南", years: "2024 年 12 月",
      tools: ["創意簡報", "場地勘景", "Lightroom"],
      summary: "LODRO 與 MATSU 合作的犛牛皮家具系列仍在設計與開發階段，我們的首次外拍便將精選樣品與訂製道具，融入高原超現實的景色之中，以抽象的手法傳遞一種放鬆而振奮的氛圍。",
      stats: [{ value: "3,500 米", label: "海拔" }, { label: "拍攝現場氣溫" }],
      highlights: [
        "撰寫創意簡報，讓所有參與者在出發前取得共識。",
        "於甘南藏族自治州勘景，並為在海拔 3,500 米、零下 20°C 的環境中拍攝規劃時程與統籌後勤。",
        "將犛牛皮家具系列的精選樣品與訂製道具結合，借助高原超現實的景色，創作出抽象而振奮的影像。",
        "召集拍攝團隊並於現場指導，最後在 Lightroom 為影像調色。"
      ],
      gallery: [
        { alt: "犛牛皮沙發、圓形腳凳與深色茶几擺放在地毯上，佈置於藍天下覆著薄雪的草原" },
        { alt: "從飛機窗外望見高原上覆雪的山脈" },
        { alt: "一份捲起的《抵達世界屋脊》報紙，塞在木門上的金屬信箱口" },
        { alt: "黑白照片：數艘報紙摺成的紙船停在結冰的河面上" },
        { alt: "黑白照片：一艘印有項目標題的報紙紙船，漂浮在碎冰之間" },
        { alt: "身穿深色長袍、戴著口罩的男子站在陰影中，背景是陽光照耀的山坡" },
        { alt: "一條蜿蜒的道路穿過淺色山谷，牛群在雪山下吃草" },
        { alt: "幕後花絮：攝影師在草原上拍攝沙發場景，工作人員正在調整地毯" },
        { alt: "高原上蜿蜒的冰封河流航拍，白色冰面與深色大地形成強烈對比" }
      ]
    },
    {
      title: "遊牧系列",
      coverAlt: "遊牧系列客廳組合的 3D 渲染圖：棕色皮革與米白色沙發模組配圓筒靠枕、條紋木咖啡桌、深色木凳與地墊，置於黃麻地毯上，旁有黑色弧形落地燈",
      desc: "以遊牧生活為靈感的低矮模組化家具，採用源自青藏高原遊牧民族的犛牛皮。",
      tags: ["產品", "採購", "家具"],
      role: "業務發展實習生", org: "LODRO x JRS x MATSU",
      tools: ["市場研究", "供應商開發", "打樣"],
      summary: "遊牧系列由 Joeri Reynaert 設計，是一個以青藏高原遊牧民族為靈感的概念家具系列。低矮貼地的模組化設計，呼應高原開闊的地平線，以及遊牧民族隨季節遷徙的生活方式，讓居家空間更貼近自然。系列的核心是直接向遊牧社群採購的犛牛皮：這些皮革是遊牧生活的自然副產品，可追溯至來源城鎮，每年僅有少量供應。\n\n我的角色是將系列從概念推進到打樣：負責統籌設計、採購材料、與工廠溝通並安排打樣，目前此系列已完成第一輪打樣。",
      stats: [{ label: "系列產品數" }, { label: "向 CEO 與 CMO 簡報的案例研究" }, { label: "至今仍在合作的供應商" }],
      highlights: [
        "與設計師合作，將海外市場研究應用於全新 11 件 遊牧系列家具，並走訪工廠支援採購與打樣。",
        "尋找獲 LWG 認證且無鉻鞣製的皮革廠，建立至今仍在合作的犛牛皮供應夥伴關係。",
        "完成以在地化與數位行銷為核心的海外拓展策略。",
        "向 CEO 與 CMO 簡報 5 個品牌與社群媒體案例研究。"
      ],
      galleryTitle: "概念渲染圖",
      gallery: [
        { alt: "遊牧系列客廳組合的棕色皮革配色概念渲染圖，配米白色面板與圓筒靠枕、條紋木咖啡桌、碳化木凳與地墊，置於黃麻地毯上，旁有黑色弧形落地燈" },
        { alt: "遊牧系列客廳組合的米白色配色概念渲染圖，配紅色染木咖啡桌、地墊、碳化木凳與黑色弧形落地燈，置於黃麻地毯上" },
        { alt: "遊牧系列客廳組合的灰色皮革配色概念渲染圖，配米白色面板、地墊、碳化木咖啡桌與木凳，以及黑色弧形落地燈" },
        { alt: "棕色皮革配色的特寫概念渲染圖：配米白色面板的沙發模組、印有 LODRO 字母圖示的圓筒靠枕、條紋木咖啡桌與碳化木凳" },
        { alt: "米白色配色的特寫概念渲染圖：米白色沙發模組配印有 LODRO 字母圖示的炭灰色圓筒靠枕、紅色染木咖啡桌與碳化木凳" },
        { alt: "灰色皮革配色的特寫概念渲染圖：配米白色面板的灰色沙發模組、印有 LODRO 字母圖示的圓筒靠枕、條紋木咖啡桌與碳化木凳" }
      ]
    }
  ],
  experience: [
    { role: "學生實習生", org: "WPP Media · 香港", points: [
      "為一個國際運動服飾品牌管理約 20 萬美元的廣告預算，負責 Google、Microsoft 與 Meta 平台的投放節奏與預算分配。",
      "每日調整出價與預算以優化搜尋廣告，核心品牌關鍵字的聲量佔有率維持在 90% 以上，大型促銷期間 ROAS 最高達 20 倍。",
      "將預算從表現欠佳的區塊轉向成效最好的受眾與素材，使重點廣告活動的每週 ROAS 提升 3–5 倍。"
    ] },
    { role: "創辦人", org: "LODRO · 香港", points: [
      "創立直面消費者的皮革包袋品牌，主導創意方向、產品開發、包裝、供應鏈與網站，觸及 17 個國家逾 145 位顧客。",
      "推出首個 8 款包袋系列，平均訂單金額 329 美元，核心款式售罄率逾 80%。",
      "經營社群媒體並投放 Meta 廣告，ROAS 達 3–5 倍，60 天內 Instagram 觸及逾 120,000 個帳號，帶來逾 55,000 次網店訪問。",
      "與 20 多位創作者合作贈品計畫，產出 60 則 UGC，累計互動逾 110,000 次。"
    ] },
    { role: "設計與行銷實習生", org: "PLTFRM · 上海", points: [
      "為 10 多個客戶構思社群活動並撰寫在地化文案，製作逾 100 件 AI 輔助創意素材。",
      "為一個生鮮農產品客戶設計包裝標籤與提案簡報。",
      "以 Figma 重新設計公司網站，並為淘寶、京東與拼多多的 AI 直播場景提供美術指導建議。"
    ] },
    { role: "業務發展實習生", org: "MATSU Group · 上海", points: [
      "制定海外市場拓展策略，並向 CEO 與 CMO 簡報 5 個品牌與社群媒體案例研究。",
      "與設計師合作，將市場研究轉化為包含 11 件產品的 遊牧系列家具，並走訪工廠協助採購與打樣。",
      "篩選通過 LWG 認證、無鉻鞣製的皮革廠，建立至今仍在合作的犛牛皮供應關係。"
    ] }
  ],
  links: [{ label: "LinkedIn" }, { label: "作品集" }]
};

