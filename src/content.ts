/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  content.ts — the ONLY file you edit to change copy.
 * ─────────────────────────────────────────────────────────────────────────────
 *  - Filled from Ezgi Doğruyol's CV. Update as roles, metrics, and projects change.
 *  - Two locales: `en` and `tr`. They MUST keep the exact same shape (same keys,
 *    same array lengths line up 1:1 in the UI). Add an entry to one, add it to
 *    the other.
 *  - Every editable string is preceded by a `// GUIDE:` comment telling you what
 *    belongs there.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Locale = "en" | "tr";

export interface SiteContent {
  meta: {
    name: string;
    role: string;
    siteUrl: string;
    description: string;
    email: string;
    linkedin: string;
    github: string;
    cvPath: string;
    location: string;
    availability: string;
    nav: {
      about: string;
      work: string;
      projects: string;
      skills: string;
    };
    downloadCv: string;
    languageSwitchLabel: string;
  };
  hero: {
    headline: string;
    positioning: string;
    subline: string;
    facts: { label: string; value: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    index: string;
    label: string;
    title: string;
    paragraphs: string[];
    pullQuote: string;
  };
  work: {
    index: string;
    label: string;
    title: string;
    featuredTitle: string;
    timelineTitle: string;
    featured: {
      name: string;
      role: string;
      studio: string;
      dateRange: string;
      platforms: string[];
      impact: string[];
      owned: string;
    }[];
    timeline: {
      company: string;
      title: string;
      dates: string;
      summary: string;
    }[];
  };
  beyond: {
    index: string;
    label: string;
    title: string;
    intro: string;
    items: { title: string; body: string; href: string; linkLabel: string }[];
  };
  skills: {
    index: string;
    label: string;
    title: string;
    groups: { label: string; items: string[] }[];
  };
  footer: {
    heading: string;
    subheading: string;
    downloadCv: string;
    copyEmailLabel: string;
    copiedToast: string;
    linkedinLabel: string;
    githubLabel: string;
    builtWith: string;
  };
}

export const content: Record<Locale, SiteContent> = {
  en: {
    meta: {
      // GUIDE: Full name. Used in the nav logotype, <title>, and hero.
      name: "Ezgi Doğruyol",
      // GUIDE: Short role label. Shown next to the name in <title> and OG tags.
      role: "Product Manager · Mobile Games",
      // GUIDE: Production URL of this site (canonical + OG). No trailing slash. Replace with the real domain.
      siteUrl: "https://ezgidogruyol.com",
      // GUIDE: One-sentence meta description for search/social. ~150 chars max.
      description:
        "Product Manager with 6+ years in mobile gaming — live-service, monetization, and a QA foundation that keeps quality first. Based in Istanbul.",
      // GUIDE: Contact email. Used by the footer click-to-copy chip and mailto fallback.
      email: "ezgidogruyol@gmail.com",
      // GUIDE: Full LinkedIn profile URL.
      linkedin: "https://www.linkedin.com/in/ezgidogruyol",
      // GUIDE: Full GitHub profile URL. Currently unused (no GitHub link in the footer).
      github: "",
      // GUIDE: Path to the CV inside /public. Replace /public/cv.pdf with a new file to update.
      cvPath: "/cv.pdf",
      // GUIDE: City / country. Shown in the hero facts row and footer.
      location: "Istanbul, Turkey",
      // GUIDE: Availability line. Shown in the hero facts row. Keep it short.
      availability: "Open to product roles · remote-friendly",
      nav: {
        // GUIDE: Nav link labels. Order is fixed in nav.tsx.
        about: "About",
        work: "Work",
        projects: "Projects",
        skills: "Skills",
      },
      // GUIDE: Label for the solid blue CV button in the nav.
      downloadCv: "Download CV",
      // GUIDE: Accessible label for the EN/TR language switch.
      languageSwitchLabel: "Switch language",
    },

    hero: {
      // GUIDE: Big headline — your name (kept as the H1 for SEO and screen readers).
      headline: "Ezgi Doğruyol",
      // GUIDE: One-line positioning under the name. The single most important sentence on the page.
      positioning:
        "Product Manager in mobile games — live-service, monetization, and a QA foundation that keeps quality first.",
      // GUIDE: Two sentences on focus. Genres, platforms, markets, and how you work.
      subline:
        "Six-plus years in mobile gaming across casual, hyper-casual, and action-RPG titles on iOS, Android, and alternative platforms. I own products end to end — roadmap, stakeholders, release planning, and store compliance — for teams shipping to the EU, US, and MENA.",
      // GUIDE: Facts row (monospace). Exactly four items. label = tiny caps, value = the number/phrase.
      facts: [
        { label: "Years in games", value: "6+" },
        { label: "Titles worked on", value: "10+" },
        { label: "Platforms", value: "iOS · Android · Web" },
        { label: "Based in", value: "Istanbul · Remote" },
      ],
      // GUIDE: Primary CTA label (solid blue). Links to the CV.
      ctaPrimary: "Download CV",
      // GUIDE: Secondary CTA label (outline). Links to LinkedIn.
      ctaSecondary: "LinkedIn",
    },

    about: {
      // GUIDE: Section index — the small monospace number. Keep two digits.
      index: "01",
      // GUIDE: Section label — short, uppercased in the UI.
      label: "About",
      // GUIDE: Section heading shown large next to the index.
      title: "About",
      // GUIDE: Two short first-person paragraphs. 1) where you came from. 2) what you do now + how you work.
      paragraphs: [
        "I spent my first five years in games QA — from the two-person team that built Zen Match through a roughly twenty-person international org at Moon Active — owning quality for LiveOps events, in-game economy and monetization, and A/B experiments. That work helped hold a 99.6% average crash-free rate on a live casual title and left me a habit I haven't lost: find where a feature breaks, and for whom, before it ships.",
        "Since 2024 I've run products end to end — a B2B vertical series delivered in about three months with a five-person team, agile release planning introduced where there was none, and a QA function built from scratch with three first-time hires I trained into a working team. I care about clear scope, honest quality gates, and stakeholder relationships that survive a deadline.",
      ],
      // GUIDE: Optional pull-quote line. Set to "" to hide it.
      pullQuote:
        "A QA foundation is the fastest way to learn what quality actually costs — and what it's worth.",
    },

    work: {
      // GUIDE: Section index (monospace, two digits).
      index: "02",
      // GUIDE: Section label.
      label: "Work",
      // GUIDE: Section heading.
      title: "Work Experience",
      // GUIDE: Sub-heading above the large project cards.
      featuredTitle: "Selected projects",
      // GUIDE: Sub-heading above the compact career timeline.
      timelineTitle: "Career timeline",
      // GUIDE: 2–3 large cards. Each is one project or major initiative.
      featured: [
        {
          // GUIDE: Project / title name.
          name: "Short & More",
          // GUIDE: Your role on this project.
          role: "Project & Product Manager",
          // GUIDE: Studio / employer.
          studio: "Joygame Publishing",
          // GUIDE: Date range worked on it.
          dateRange: "2024 – 2026",
          // GUIDE: Platform / type chips (monospace).
          platforms: ["B2B", "Vertical series", "Web"],
          // GUIDE: 3–5 impact bullets. Strong verb + a concrete number where you have one.
          impact: [
            "Owned the product end to end with a 5-person team — planning, stakeholder alignment, development, design, and creative production.",
            "Delivered ~30–40 localized episodes in about three months, including an AI dubbing workflow built on HeyGen.",
            "Acted as the sole point of contact for the B2B client and ran the project's admin panel and delivery schedule.",
            "Held admin access and release sign-off across every iOS, Android, and alternative-platform store account (incl. CrazyGames) for the hyper-casual portfolio.",
          ],
          // GUIDE: One line — "What I owned".
          owned:
            "What I owned: roadmap, the client relationship, creative production, content delivery, and store administration.",
        },
        {
          name: "Desert Warrior",
          role: "Project & Product Manager",
          studio: "Joygame Publishing · ~30-person team",
          dateRange: "2024 – 2026",
          platforms: ["iOS", "Android", "Action RPG"],
          impact: [
            "Introduced agile sprint and release planning from scratch on a team that had none.",
            "Built the QA function from the ground up — hired and trained 3 first-time testers into a working team.",
            "Took part in hiring and performance decisions as part of the studio's management organization.",
            "Coordinated project planning and production across EU, US, and MENA markets.",
          ],
          owned:
            "What I owned: the sprint and release process, the QA team build and hiring, and production coordination.",
        },
        {
          name: "Zen Match",
          role: "QA Specialist → QA Engineer",
          studio: "Good Job Games → Moon Active",
          dateRange: "2021 – 2024",
          platforms: ["iOS", "Android", "Live-service"],
          impact: [
            "Owned QA for LiveOps events, in-game economy and monetization, and A/B experiment variants for about 2.5 years.",
            "Designed live-event test scenarios with the backend team; inspected traffic with Charles Proxy and Postman.",
            "Helped sustain a 99.6% average crash-free user rate through functional, regression, exploratory, and cross-platform testing.",
            "Started on the early 2-person QA team; continued through the acquisition into a ~20-person international QA organization.",
          ],
          owned:
            "What I owned: LiveOps / economy / A-B test coverage, backend test-scenario design, and release readiness.",
        },
      ],
      // GUIDE: Every role, newest first. Keep summaries to one line.
      // GUIDE: To add a role, copy one { } block and keep the fields.
      timeline: [
        {
          // GUIDE: Company name.
          company: "Lumica",
          // GUIDE: Your title there.
          title: "Freelance Product Consultant & Designer",
          // GUIDE: Date range.
          dates: "Jun 2025 – Present",
          // GUIDE: One-line summary of scope / outcome.
          summary:
            "Word games for the App Store: designed Word Journey's 'passport' progression, levels, and UX; authored the Word Solitaire GDD, UI, and level design.",
        },
        {
          company: "Joygame Publishing",
          title: "Project Manager / Product Manager",
          dates: "Aug 2024 – Feb 2026",
          summary:
            "Publishing, production, and product — including JAI, the studio's AI-driven project line. Owned Short & More (B2B) and Desert Warrior.",
        },
        {
          company: "Moon Active",
          title: "QA Engineer, Zen Match",
          dates: "Jan 2023 – May 2024",
          summary:
            "Sprint-based QA in a ~20-person international team; LiveOps, economy/monetization, and A/B experiments on a live casual title.",
        },
        {
          company: "Good Job Games",
          title: "QA Specialist, Zen Match Studio",
          dates: "Nov 2021 – Jan 2023",
          summary:
            "Early 2-person QA team from the first build; owned LiveOps, economy, and A/B QA, and designed test scenarios with the backend team.",
        },
        {
          company: "Azerion",
          title: "QA Specialist",
          dates: "Jun 2020 – Nov 2021",
          summary:
            "QA across a high volume of casual and hyper-casual mobile projects, including Habbo Hotel, in international teams.",
        },
        {
          company: "Vertigo Games",
          title: "QA Tester",
          dates: "Jun 2019 – Apr 2020",
          summary:
            "First production role, on Critical Strike (mobile FPS) — gameplay, functionality, usability, and performance testing.",
        },
      ],
    },

    beyond: {
      // GUIDE: Section index (monospace, two digits).
      index: "03",
      // GUIDE: Section label (short — used in the nav and eyebrow).
      label: "Projects",
      // GUIDE: Section heading.
      title: "Independent Projects",
      // GUIDE: One line framing the section — things you did on your own initiative.
      intro:
        "Products I conceived, built, and shipped on my own initiative — mostly with no-code and AI tools.",
      // GUIDE: 3–4 items. Set href to a URL to make the title a link, or "" for no link.
      items: [
        {
          // GUIDE: Project name + status.
          title: "Tiny Thinkys — live",
          // GUIDE: One or two sentences on what it is and your role.
          body: "A to-do app shipped solo, end to end from concept to launch.",
          // GUIDE: Link URL, or "" for none.
          href: "",
          // GUIDE: Visible link text (only shown when href is set).
          linkLabel: "",
        },
        {
          title: "DayGlow — in development",
          body: "A reminder app, built solo with no-code and AI tooling.",
          href: "",
          linkLabel: "",
        },
        {
          title: "Visa Ready — in development",
          body: "A travel-document readiness app; owning the full product lifecycle from concept to launch.",
          href: "",
          linkLabel: "",
        },
        {
          title: "Truewayist",
          body: "Product Manager, paired with one developer, for the company website (live) and a SaaS-level LMS platform in development — roadmap and prioritization for both, now unifying them under one login.",
          href: "",
          linkLabel: "",
        },
      ],
    },

    skills: {
      // GUIDE: Section index (monospace, two digits).
      index: "04",
      // GUIDE: Section label.
      label: "Skills",
      // GUIDE: Section heading.
      title: "Skills",
      // GUIDE: Grouped tag clusters. Each group: a monospace label + a flat list of tags.
      // GUIDE: Edit the arrays freely — no proficiency levels, just what you actually use.
      groups: [
        {
          label: "Product",
          items: [
            "End-to-end product ownership",
            "Roadmap & sprint planning",
            "Feature prioritization",
            "Stakeholder management",
            "B2B client relationships",
            "Agile release planning",
          ],
        },
        {
          label: "Publishing & Release",
          items: [
            "iOS / Android store management",
            "Alternative platforms (incl. CrazyGames)",
            "Store compliance & admin",
            "Release sign-off",
          ],
        },
        {
          label: "QA & Live-Service",
          items: [
            "LiveOps event testing",
            "Economy & monetization testing",
            "A/B experiment QA",
            "Test scenario design (with backend)",
            "Functional / regression / exploratory",
            "API & network-level testing",
          ],
        },
        {
          label: "Analytics",
          items: [
            "Firebase",
            "Google BigQuery",
            "SQL",
            "Amplitude",
            "Mixpanel",
            "AppsFlyer",
            "Adjust",
            "AppLovin",
          ],
        },
        {
          label: "Tools",
          items: ["Jira", "Postman", "Charles Proxy", "Coralogix", "Figma", "HeyGen"],
        },
        {
          label: "Leadership",
          items: [
            "Team building",
            "Training & mentoring",
            "Hiring & performance feedback",
            "Cross-functional coordination",
          ],
        },
      ],
    },

    footer: {
      // GUIDE: Footer heading — the invitation to go deeper.
      heading: "Want the full story?",
      // GUIDE: One line under the heading.
      subheading: "The CV has the detail. For anything else, email is fastest.",
      // GUIDE: Label for the CV button in the footer.
      downloadCv: "Download CV",
      // GUIDE: Tooltip / aria-label for the click-to-copy email chip.
      copyEmailLabel: "Copy email address",
      // GUIDE: Toast text shown after the email is copied.
      copiedToast: "Email copied to clipboard",
      // GUIDE: Accessible label for the LinkedIn icon.
      linkedinLabel: "LinkedIn profile",
      // GUIDE: Unused — kept for compatibility (no GitHub link in the footer).
      githubLabel: "GitHub profile",
      // GUIDE: Small "built with" note. {year} is replaced with the current year.
      builtWith: "Built with Next.js & Tailwind CSS · © {year}",
    },
  },

  tr: {
    meta: {
      // GUIDE: Ad soyad. Nav logosunda, <title> ve hero bölümünde kullanılır.
      name: "Ezgi Doğruyol",
      // GUIDE: Kısa unvan. <title> ve OG etiketlerinde adının yanında görünür.
      role: "Ürün Yöneticisi · Mobil Oyunlar",
      // GUIDE: Sitenin yayın adresi (canonical + OG). Sonunda eğik çizgi olmasın. Gerçek alan adıyla değiştir.
      siteUrl: "https://ezgidogruyol.com",
      // GUIDE: Arama/sosyal için tek cümlelik açıklama. En fazla ~150 karakter.
      description:
        "Mobil oyunlarda 6+ yıl deneyimli Ürün Yöneticisi — live-service, monetizasyon ve kaliteyi önde tutan bir QA temeli. İstanbul merkezli.",
      // GUIDE: İletişim e-postası. Footer'daki kopyalama çipi ve mailto için kullanılır.
      email: "ezgidogruyol@gmail.com",
      // GUIDE: Tam LinkedIn profil adresi.
      linkedin: "https://www.linkedin.com/in/ezgidogruyol",
      // GUIDE: Tam GitHub profil adresi. Şu an kullanılmıyor (footer'da GitHub linki yok).
      github: "",
      // GUIDE: /public içindeki CV dosyasının yolu. Güncellemek için /public/cv.pdf dosyasını değiştir.
      cvPath: "/cv.pdf",
      // GUIDE: Şehir / ülke. Hero bilgi satırında ve footer'da görünür.
      location: "İstanbul, Türkiye",
      // GUIDE: Müsaitlik durumu. Hero bilgi satırında görünür. Kısa tut.
      availability: "Ürün rollerine açık · uzaktan uygun",
      nav: {
        // GUIDE: Nav bağlantı etiketleri. Sıra nav.tsx içinde sabittir.
        about: "Hakkımda",
        work: "Deneyim",
        projects: "Projeler",
        skills: "Yetenekler",
      },
      // GUIDE: Nav'daki mavi CV butonunun etiketi.
      downloadCv: "CV'yi İndir",
      // GUIDE: EN/TR dil değiştiricisi için erişilebilirlik etiketi.
      languageSwitchLabel: "Dili değiştir",
    },

    hero: {
      // GUIDE: Büyük başlık — adın (SEO ve ekran okuyucular için H1 olarak kalır).
      headline: "Ezgi Doğruyol",
      // GUIDE: Adının altındaki tek satırlık konumlandırma. Sayfadaki en önemli cümle.
      positioning:
        "Mobil oyunlarda Ürün Yöneticisi — live-service, monetizasyon ve kaliteyi önde tutan bir QA temeli.",
      // GUIDE: Odak alanların hakkında iki cümle. Türler, platformlar, pazarlar ve nasıl çalıştığın.
      subline:
        "Casual, hyper-casual ve aksiyon-RPG oyunlarında; iOS, Android ve alternatif platformlarda altı yılı aşkın deneyim. Ürünü uçtan uca sahipleniyorum — yol haritası, paydaşlar, sürüm planlaması ve mağaza uyumluluğu — AB, ABD ve MENA pazarlarına yayın yapan ekipler için.",
      // GUIDE: Bilgi satırı (monospace). Tam olarak dört öğe. label = küçük büyük harf, value = sayı/ifade.
      facts: [
        { label: "Oyunda geçen yıl", value: "6+" },
        { label: "Çalışılan oyun", value: "10+" },
        { label: "Platformlar", value: "iOS · Android · Web" },
        { label: "Konum", value: "İstanbul · Uzaktan" },
      ],
      // GUIDE: Birincil CTA etiketi (dolu mavi). CV'ye bağlanır.
      ctaPrimary: "CV'yi İndir",
      // GUIDE: İkincil CTA etiketi (çerçeveli). LinkedIn'e bağlanır.
      ctaSecondary: "LinkedIn",
    },

    about: {
      // GUIDE: Bölüm numarası — küçük monospace sayı. İki hane olsun.
      index: "01",
      // GUIDE: Bölüm etiketi — kısa, arayüzde büyük harf.
      label: "Hakkımda",
      // GUIDE: Numaranın yanında büyük gösterilen bölüm başlığı.
      title: "Hakkımda",
      // GUIDE: İki kısa, birinci tekil şahıs paragraf. 1) nereden geldin. 2) şimdi ne yapıyorsun + nasıl çalışıyorsun.
      paragraphs: [
        "İlk beş yılımı oyun QA'sinde geçirdim — Zen Match'i kuran iki kişilik ekipten Moon Active'deki yaklaşık yirmi kişilik uluslararası organizasyona kadar — LiveOps etkinlikleri, oyun içi ekonomi ve monetizasyon ile A/B deneylerinin kalitesini sahiplenerek. Bu çalışma, canlı bir casual oyunda %99,6 ortalama çökmesiz kullanıcı oranını korumaya yardım etti ve bende bırakmadığım bir alışkanlık bıraktı: bir özellik nerede ve kimin için bozuluyor, yayınlanmadan önce bul.",
        "2024'ten beri ürünleri uçtan uca yönetiyorum — beş kişilik bir ekiple yaklaşık üç ayda teslim edilen bir B2B dikey seri, hiç olmayan yerde kurulan çevik sürüm planlaması ve üç ilk kez işe alınan kişiyle sıfırdan kurup çalışan bir ekibe dönüştürdüğüm bir QA fonksiyonu. Net kapsam, dürüst kalite kapıları ve bir teslim tarihini atlatan paydaş ilişkilerine önem veriyorum.",
      ],
      // GUIDE: İsteğe bağlı vurgu cümlesi. Gizlemek için "" yap.
      pullQuote:
        "QA temeli, kalitenin gerçekte neye mal olduğunu — ve neye değdiğini — öğrenmenin en hızlı yoludur.",
    },

    work: {
      // GUIDE: Bölüm numarası (monospace, iki hane).
      index: "02",
      // GUIDE: Bölüm etiketi.
      label: "Deneyim",
      // GUIDE: Bölüm başlığı.
      title: "İş Deneyimi",
      // GUIDE: Büyük proje kartlarının üstündeki alt başlık.
      featuredTitle: "Öne çıkan projeler",
      // GUIDE: Kompakt kariyer zaman çizelgesinin üstündeki alt başlık.
      timelineTitle: "Kariyer zaman çizelgesi",
      // GUIDE: 2–3 büyük kart. Her biri bir proje veya büyük bir girişim.
      featured: [
        {
          // GUIDE: Proje / oyun adı.
          name: "Short & More",
          // GUIDE: Bu projedeki rolün.
          role: "Proje & Ürün Yöneticisi",
          // GUIDE: Stüdyo / işveren.
          studio: "Joygame Publishing",
          // GUIDE: Çalıştığın tarih aralığı.
          dateRange: "2024 – 2026",
          // GUIDE: Platform / tür çipleri (monospace).
          platforms: ["B2B", "Dikey seri", "Web"],
          // GUIDE: 3–5 etki maddesi. Güçlü fiil + varsa somut bir sayı.
          impact: [
            "Ürünü beş kişilik bir ekiple uçtan uca sahiplendim — planlama, paydaş hizalaması, geliştirme, tasarım ve kreatif üretim.",
            "Yaklaşık üç ayda ~30–40 yerelleştirilmiş bölüm teslim ettim; HeyGen üzerine kurulu bir yapay zekâ dublaj akışı dâhil.",
            "B2B müşterinin tek iletişim noktası oldum; projenin yönetim panelini ve teslim takvimini yürüttüm.",
            "Hyper-casual portföyü için tüm iOS, Android ve alternatif platform mağaza hesaplarında (CrazyGames dâhil) yönetici erişimi ve sürüm onay yetkisi tuttum.",
          ],
          // GUIDE: Tek satır — "Sahip olduklarım".
          owned:
            "Sahip olduklarım: yol haritası, müşteri ilişkisi, kreatif üretim, içerik teslimi ve mağaza yönetimi.",
        },
        {
          name: "Desert Warrior",
          role: "Proje & Ürün Yöneticisi",
          studio: "Joygame Publishing · ~30 kişilik ekip",
          dateRange: "2024 – 2026",
          platforms: ["iOS", "Android", "Aksiyon RPG"],
          impact: [
            "Hiç olmayan bir ekipte çevik sprint ve sürüm planlamasını sıfırdan kurdum.",
            "QA fonksiyonunu sıfırdan inşa ettim — 3 ilk kez tester işe alıp eğiterek çalışan bir ekibe dönüştürdüm.",
            "Stüdyonun yönetim organizasyonunun parçası olarak işe alım ve performans kararlarına katıldım.",
            "AB, ABD ve MENA pazarlarında proje planlaması ve prodüksiyon koordinasyonu yürüttüm.",
          ],
          owned:
            "Sahip olduklarım: sprint ve sürüm süreci, QA ekibinin kurulması ve işe alımı, prodüksiyon koordinasyonu.",
        },
        {
          name: "Zen Match",
          role: "QA Uzmanı → QA Mühendisi",
          studio: "Good Job Games → Moon Active",
          dateRange: "2021 – 2024",
          platforms: ["iOS", "Android", "Live-service"],
          impact: [
            "Yaklaşık 2,5 yıl boyunca LiveOps etkinlikleri, oyun içi ekonomi ve monetizasyon ile A/B deney varyantlarının QA'sini sahiplendim.",
            "Backend ekibiyle canlı etkinlik test senaryoları tasarladım; trafiği Charles Proxy ve Postman ile inceledim.",
            "Fonksiyonel, regresyon, keşif ve çapraz platform testleriyle %99,6 ortalama çökmesiz kullanıcı oranını korumaya yardım ettim.",
            "İlk 2 kişilik QA ekibinde başladım; satın alma sürecinden geçerek ~20 kişilik uluslararası bir QA organizasyonuna dâhil oldum.",
          ],
          owned:
            "Sahip olduklarım: LiveOps / ekonomi / A-B test kapsamı, backend test senaryosu tasarımı ve sürüm hazırlığı.",
        },
      ],
      // GUIDE: Her rol, en yeni en üstte. Özetleri tek satırda tut.
      // GUIDE: Rol eklemek için bir { } bloğunu kopyala ve alanları koru.
      timeline: [
        {
          // GUIDE: Şirket adı.
          company: "Lumica",
          // GUIDE: Oradaki unvanın.
          title: "Serbest Ürün Danışmanı & Tasarımcı",
          // GUIDE: Tarih aralığı.
          dates: "Haz 2025 – Günümüz",
          // GUIDE: Kapsam / sonuç hakkında tek satırlık özet.
          summary:
            "App Store için kelime oyunları: Word Journey'nin 'pasaport' ilerleme mekaniğini, seviyelerini ve UX'ini tasarladım; Word Solitaire'in GDD, UI ve seviye tasarımını yazdım.",
        },
        {
          company: "Joygame Publishing",
          title: "Proje Yöneticisi / Ürün Yöneticisi",
          dates: "Ağu 2024 – Şub 2026",
          summary:
            "Yayıncılık, prodüksiyon ve ürün — stüdyonun yapay zekâ odaklı proje hattı JAI dâhil. Short & More (B2B) ve Desert Warrior'ın sahibi.",
        },
        {
          company: "Moon Active",
          title: "QA Mühendisi, Zen Match",
          dates: "Oca 2023 – May 2024",
          summary:
            "~20 kişilik uluslararası bir ekipte sprint tabanlı QA; canlı bir casual oyunda LiveOps, ekonomi/monetizasyon ve A/B deneyleri.",
        },
        {
          company: "Good Job Games",
          title: "QA Uzmanı, Zen Match Studio",
          dates: "Kas 2021 – Oca 2023",
          summary:
            "İlk yapımdan itibaren 2 kişilik QA ekibi; LiveOps, ekonomi ve A/B QA'sini sahiplendim, backend ekibiyle test senaryoları tasarladım.",
        },
        {
          company: "Azerion",
          title: "QA Uzmanı",
          dates: "Haz 2020 – Kas 2021",
          summary:
            "Habbo Hotel dâhil çok sayıda casual ve hyper-casual mobil projede, uluslararası ekiplerle QA.",
        },
        {
          company: "Vertigo Games",
          title: "QA Test Uzmanı",
          dates: "Haz 2019 – Nis 2020",
          summary:
            "İlk prodüksiyon rolü, Critical Strike'ta (mobil FPS) — oynanış, işlevsellik, kullanılabilirlik ve performans testleri.",
        },
      ],
    },

    beyond: {
      // GUIDE: Bölüm numarası (monospace, iki hane).
      index: "03",
      // GUIDE: Bölüm etiketi (kısa — nav ve üst etikette kullanılır).
      label: "Projeler",
      // GUIDE: Bölüm başlığı.
      title: "Bağımsız Projeler",
      // GUIDE: Bölümü çerçeveleyen tek satır — kendi inisiyatifinle yaptıkların.
      intro:
        "Kendi inisiyatifimle tasarladığım, geliştirdiğim ve yayınladığım ürünler — çoğunlukla no-code ve yapay zekâ araçlarıyla.",
      // GUIDE: 3–4 öğe. Başlığı link yapmak için href'e URL yaz, link istemiyorsan "".
      items: [
        {
          // GUIDE: Proje adı + durum.
          title: "Tiny Thinkys — yayında",
          // GUIDE: Ne olduğu ve rolün hakkında bir iki cümle.
          body: "Kavramdan yayına, uçtan uca tek başıma çıkardığım bir yapılacaklar uygulaması.",
          // GUIDE: Bağlantı adresi ya da hiçbiri için "".
          href: "",
          // GUIDE: Görünen bağlantı metni (yalnızca href doluysa gösterilir).
          linkLabel: "",
        },
        {
          title: "DayGlow — geliştiriliyor",
          body: "No-code ve yapay zekâ araçlarıyla tek başıma geliştirdiğim bir hatırlatma uygulaması.",
          href: "",
          linkLabel: "",
        },
        {
          title: "Visa Ready — geliştiriliyor",
          body: "Bir seyahat belgesi hazırlık uygulaması; kavramdan yayına tüm ürün yaşam döngüsünü sahipleniyorum.",
          href: "",
          linkLabel: "",
        },
        {
          title: "Truewayist",
          body: "Bir geliştiriciyle birlikte, şirket web sitesi (yayında) ve geliştirilmekte olan SaaS düzeyinde bir LMS platformu için Ürün Yöneticisi — her ikisinin yol haritası ve önceliklendirmesi bende, şu an ortak bir giriş sistemi altında birleştiriyoruz.",
          href: "",
          linkLabel: "",
        },
      ],
    },

    skills: {
      // GUIDE: Bölüm numarası (monospace, iki hane).
      index: "04",
      // GUIDE: Bölüm etiketi.
      label: "Yetenekler",
      // GUIDE: Bölüm başlığı.
      title: "Yetenekler",
      // GUIDE: Gruplanmış etiket kümeleri. Her grup: monospace bir etiket + düz bir etiket listesi.
      // GUIDE: Dizileri serbestçe düzenle — yetkinlik seviyesi yok, sadece gerçekten kullandıkların.
      groups: [
        {
          label: "Ürün",
          items: [
            "Uçtan uca ürün sahipliği",
            "Yol haritası & sprint planlaması",
            "Özellik önceliklendirme",
            "Paydaş yönetimi",
            "B2B müşteri ilişkileri",
            "Çevik sürüm planlaması",
          ],
        },
        {
          label: "Yayıncılık & Sürüm",
          items: [
            "iOS / Android mağaza yönetimi",
            "Alternatif platformlar (CrazyGames dâhil)",
            "Mağaza uyumluluğu & yönetimi",
            "Sürüm onayı",
          ],
        },
        {
          label: "QA & Live-Service",
          items: [
            "LiveOps etkinlik testi",
            "Ekonomi & monetizasyon testi",
            "A/B deney QA'si",
            "Test senaryosu tasarımı (backend ile)",
            "Fonksiyonel / regresyon / keşif",
            "API & ağ seviyesi testi",
          ],
        },
        {
          label: "Analitik",
          items: [
            "Firebase",
            "Google BigQuery",
            "SQL",
            "Amplitude",
            "Mixpanel",
            "AppsFlyer",
            "Adjust",
            "AppLovin",
          ],
        },
        {
          label: "Araçlar",
          items: ["Jira", "Postman", "Charles Proxy", "Coralogix", "Figma", "HeyGen"],
        },
        {
          label: "Liderlik",
          items: [
            "Ekip kurma",
            "Eğitim & mentorluk",
            "İşe alım & performans geri bildirimi",
            "Çapraz fonksiyonlu koordinasyon",
          ],
        },
      ],
    },

    footer: {
      // GUIDE: Footer başlığı — daha derine inme daveti.
      heading: "Tüm hikâyeyi mi istiyorsun?",
      // GUIDE: Başlığın altında tek satır.
      subheading: "Ayrıntı CV'de. Başka her şey için en hızlı yol e-posta.",
      // GUIDE: Footer'daki CV butonunun etiketi.
      downloadCv: "CV'yi İndir",
      // GUIDE: Kopyalama e-posta çipi için ipucu / aria-label.
      copyEmailLabel: "E-posta adresini kopyala",
      // GUIDE: E-posta kopyalandıktan sonra gösterilen toast metni.
      copiedToast: "E-posta panoya kopyalandı",
      // GUIDE: LinkedIn ikonu için erişilebilirlik etiketi.
      linkedinLabel: "LinkedIn profili",
      // GUIDE: Kullanılmıyor — uyumluluk için tutuluyor (footer'da GitHub linki yok).
      githubLabel: "GitHub profili",
      // GUIDE: Küçük "ile yapıldı" notu. {year} güncel yıl ile değiştirilir.
      builtWith: "Next.js & Tailwind CSS ile yapıldı · © {year}",
    },
  },
};
