const ASSETS = "assets/images/";
const CONTACT = {
  phone1: "+91 9096084445",
  phone2: "+91 90495 54445",
  email: "info@sactechcontrol.com",
  address: "Abhishek Meadows, 4th Floor, Flat No. 404, Landewadi Chowk, Bhosari, Pune - 411039",
  whatsapp: "919096084445"
};

const services = [
  {
    slug: "turnkey-projects",
    title: "Turnkey Projects",
    icon: "M9 18h6M10 22h4M5 6h14M6 10h12M8 2h8v4H8zM7 6v16h10V6",
    short: "Complete industrial project execution from planning to commissioning with quality and efficiency.",
    full: "Complete industrial project execution including planning, electrical installation, automation integration, testing, and commissioning services.",
    image: "hero-1.webp"
  },
  {
    slug: "panel-wiring-services",
    title: "Panel Wiring Services",
    icon: "M4 4h16v16H4zM8 4v16M16 4v16M4 10h16M4 15h16",
    short: "Professional panel wiring solutions ensuring safe, organized and efficient electrical connectivity.",
    full: "Professional panel wiring solutions ensuring safe, organized, and efficient electrical connectivity for industrial systems.",
    image: "cable-tray.webp"
  },
  {
    slug: "control-panel-installation",
    title: "Control Panel Installation",
    icon: "M7 3h10v18H7zM10 7h4M10 11h4M10 15h4M12 19v-2",
    short: "Reliable installation and setup of industrial control panels with proper testing and system integration.",
    full: "Reliable installation and setup of industrial control panels with proper testing, safety standards, and system integration.",
    image: "electrician-panel.webp"
  },
  {
    slug: "electrical-control-panels",
    title: "Electrical Control Panels",
    icon: "M8 3h8l2 4v14H6V7zM12 9l-2 4h3l-1 4l4-6h-3l1-2z",
    short: "Design and development of high-quality control panels for industrial automation and power systems.",
    full: "Design and development of high-quality electrical control panels for industrial automation, power distribution, and machine control.",
    image: "plc-panel.webp"
  },
  {
    slug: "customized-automation-services",
    title: "Customized Automation Services",
    icon: "M6 12a6 6 0 1 0 12 0M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8",
    short: "Tailor-made automation solutions to improve productivity, efficiency and process control.",
    full: "Tailor-made industrial automation solutions designed to improve productivity, operational efficiency, and process control.",
    image: "factory-machinery.webp"
  },
  {
    slug: "instrumentation-electrical-works",
    title: "Instrumentation & Electrical Works",
    icon: "M4 12h4l2-6 4 12 2-6h4M4 20h16M6 4h12",
    short: "Complete instrumentation and electrical services including installation, calibration and troubleshooting.",
    full: "Comprehensive instrumentation and industrial electrical services including installation, calibration, maintenance, and troubleshooting.",
    image: "welding-sparks.webp"
  },
  {
    slug: "skilled-manpower-supply",
    title: "Skilled Manpower Supply",
    icon: "M16 11a4 4 0 1 0-8 0M4 21a8 8 0 0 1 16 0M19 8a3 3 0 0 1 0 6M22 21a6 6 0 0 0-4-5.7",
    short: "Trained and experienced technical manpower for industrial electrical and automation projects.",
    full: "Providing trained and experienced technical manpower for industrial electrical, automation, maintenance, and project support work.",
    image: "team-wide.webp"
  },
  {
    slug: "mcc-pcc-panels",
    title: "MCC & PCC Panels",
    icon: "M4 5h16v14H4zM8 5v14M16 5v14M4 12h16M7 9h2M15 9h2M7 15h2M15 15h2",
    short: "Manufacturing and installation of MCC and PCC panels for motor control and power distribution.",
    full: "Manufacturing and installation of MCC and PCC panels for efficient motor control, power distribution, and industrial operations.",
    image: "cable-tray-2.webp"
  },
  {
    slug: "training-consultancy",
    title: "Training & Consultancy",
    icon: "M4 19V5h16v14M8 9h8M8 13h5M6 21h12M17 17l4 4",
    short: "Professional technical guidance, industrial training and consultancy for automation projects.",
    full: "Professional technical guidance, industrial training, and consultancy services for electrical and automation-related projects.",
    image: "electrical-worker.webp"
  },
  {
    slug: "vfd-panels",
    title: "VFD Panels",
    icon: "M6 4h12v16H6zM9 8h6M9 12h6M9 16h2M14 16h1",
    short: "Advanced VFD panel solutions for motor speed control, energy efficiency and machine performance.",
    full: "Advanced VFD panel solutions for motor speed control, energy efficiency, and improved industrial machine performance.",
    image: "plc-panel.webp"
  },
  {
    slug: "amc-maintenance",
    title: "AMC Maintenance",
    icon: "M14.7 6.3a4 4 0 0 0-5 5l-5.4 5.4 3 3 5.4-5.4a4 4 0 0 0 5-5l2.3-2.3-3-3z",
    short: "Annual Maintenance Contract services for smooth operation, preventive maintenance and reduced downtime.",
    full: "Annual Maintenance Contract services ensuring smooth operation, preventive maintenance, and reduced industrial downtime.",
    image: "electrician-panel.webp"
  }
];

const projects = [
  ["Automation System for Chemical Plant", "Industrial Automation", "Complete automation solution with PLC, HMI & SCADA integration.", "2024", "Pune, India", "factory-machinery.webp"],
  ["MCC Panel for Manufacturing Unit", "Electrical Panels", "Design and fabrication of MCC panel with VFD & soft starter.", "2024", "Chakan, India", "cable-tray-2.webp"],
  ["PLC Control Panel for Water Treatment Plant", "Control Panels", "Automation and control panel with real-time monitoring system.", "2024", "Nashik, India", "electrician-panel.webp"],
  ["Instrumentation & Electrical Work for Oil & Gas Plant", "Instrumentation", "Complete instrumentation and electrical installation.", "2023", "Gujarat, India", "welding-sparks.webp"],
  ["VFD Panel for Conveyor System", "VFD Panels", "VFD panel design and installation for smooth motor control.", "2023", "Mumbai, India", "plc-panel.webp"],
  ["Turnkey Automation Project for Packaging Industry", "Turnkey Project", "End-to-end automation solution from design to commissioning.", "2023", "Pune, India", "hero-2.webp"],
  ["PCC Panel for Commercial Building", "MCC & PCC Panels", "Supply and installation of PCC panel with metering and protection.", "2023", "Bangalore, India", "cable-tray.webp"],
  ["Training Program for PLC & SCADA", "Training & Consultancy", "Customized training program for industrial automation.", "2023", "Pune, India", "electrical-worker.webp"]
].map(([title, category, description, year, place, image], i) => ({ id: i + 1, title, category, description, year, place, image }));

const clients = [
  ["TATA MOTORS", "Automotive"],
  ["Mahindra & Mahindra", "Automotive"],
  ["P&G", "FMCG"],
  ["Johnson Controls", "Automation"],
  ["Eaton India", "Electrical Solutions"],
  ["Bajaj Auto", "Automotive"],
  ["Forbes Marshall", "Process Equipment"],
  ["Saint-Gobain", "Building Materials"],
  ["Kirloskar Brothers", "Engineering"],
  ["Siemens", "Automation"],
  ["ABB India", "Electrical"],
  ["Larsen & Toubro", "Infrastructure"]
];

const blogPosts = [
  ["The Future of Industrial Automation: Trends Shaping 2025", "Automation", "May 20, 2025", "Explore the top automation trends, emerging technologies, and how industries can leverage smart solutions for higher productivity and efficiency.", "electrician-panel.webp"],
  ["Top Benefits of Industrial Automation for Modern Manufacturing", "Automation", "May 18, 2025", "Industrial automation improves productivity, accuracy, safety and operational consistency across manufacturing sites.", "factory-machinery.webp"],
  ["VFD Panels: Benefits and Applications & Energy Savings", "Electrical", "May 15, 2025", "VFD panels help optimize motor speed, reduce energy usage and improve machine performance.", "cable-tray-2.webp"],
  ["MCC vs PCC Panels: Key Differences and Applications", "Control Panels", "May 12, 2025", "Understand where MCC and PCC panels fit in reliable industrial power distribution and motor control.", "electrician-panel.webp"],
  ["Preventive Maintenance Tips to Reduce Equipment Downtime", "Maintenance", "May 10, 2025", "Preventive maintenance improves uptime, safety and asset life for industrial electrical systems.", "hero-2.webp"],
  ["Smart Industry Solutions for a More Efficient Tomorrow", "Industry Trends", "May 08, 2025", "Smart electrical and automation solutions support faster, safer and more efficient industrial operations.", "factory-machinery.webp"],
  ["Electrical Safety Standards Every Industry Should Follow", "Safety", "May 05, 2025", "Consistent electrical safety practices protect equipment, workers and production continuity.", "services-reference.webp"]
].map(([title, category, date, excerpt, image], i) => ({ id: i + 1, title, category, date, excerpt, image }));

function icon(path, cls = "line-icon") {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${path}"/></svg>`;
}

function initHeader() {
  const target = document.querySelector("[data-site-header]");
  if (!target) return;
  const active = document.body.dataset.page || "home";
  const serviceLinks = services.map((s) => `<a href="service.html?service=${s.slug}">${s.title}</a>`).join("");
  const aboutLinks = `
    <a href="about.html">About Us</a>
    <a href="why-choose-us.html">Why Choose Us</a>
    <a href="team.html">Our Team</a>
    <a href="vision-mission.html">Vision & Mission</a>
    <a href="careers.html">Careers</a>`;
  target.innerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="Sactech Control System home">
          <img src="${ASSETS}logo.png" alt="Sactech Control System - passion for excellence" width="154" height="112">
        </a>
        <nav class="nav-links" id="navLinks" aria-label="Primary navigation">
          ${navItem("index.html", "Home", active === "home")}
          <div class="has-dropdown" id="aboutDrop">
            <a class="nav-link ${active === "about" ? "active" : ""}" href="about.html">About</a>
            <div class="dropdown">${aboutLinks}</div>
          </div>
          <div class="has-dropdown" id="serviceDrop">
            <a class="nav-link ${active === "services" ? "active" : ""}" href="services.html">Services</a>
            <div class="dropdown">${serviceLinks}</div>
          </div>
          ${navItem("portfolio.html", "Projects", active === "portfolio")}
          ${navItem("clients.html", "Clients", active === "clients")}
          ${navItem("blog.html", "Blog", active === "blog")}
          ${navItem("contact.html", "Contact Us", active === "contact")}
        </nav>
        <div class="header-actions">
          <a class="phone-mini" href="tel:+919096084445"><span>${CONTACT.phone1}</span><span>${CONTACT.phone2}</span></a>
          <a class="btn quote-btn" href="contact.html#quote">Get A Quote <span>→</span></a>
          <button class="icon-btn" id="themeToggle" aria-label="Toggle dark and light theme">☾</button>
          <button class="menu-toggle" id="menuToggle" aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>`;
}

function navItem(href, label, active) {
  return `<a class="nav-link ${active ? "active" : ""}" href="${href}">${label}</a>`;
}

function initFooter() {
  const target = document.querySelector("[data-site-footer]");
  if (!target) return;
  const serviceFooter = services.slice(0, 9).map((s) => `<li><a href="service.html?service=${s.slug}">› ${s.title}</a></li>`).join("");
  target.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <img class="footer-logo" src="${ASSETS}logo.png" alt="Sactech Control System">
            <p>We deliver reliable electrical, automation and manpower solutions with a commitment to quality, safety and customer satisfaction.</p>
            <div class="socials">
              <a href="https://www.facebook.com/search/top?q=sactech%20control%20system" target="_blank" rel="noopener" aria-label="Facebook">f</a>
              <a href="https://www.linkedin.com/search/results/companies/?keywords=Sactech%20Control%20System" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
              <a href="https://www.instagram.com/explore/search/keyword/?q=sactech%20control%20system" target="_blank" rel="noopener" aria-label="Instagram">ig</a>
              <a href="https://www.youtube.com/results?search_query=Sactech+Control+System" target="_blank" rel="noopener" aria-label="YouTube">yt</a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="index.html">› Home</a></li>
              <li><a href="about.html">› About Us</a></li>
              <li><a href="services.html">› Services</a></li>
              <li><a href="portfolio.html">› Projects</a></li>
              <li><a href="clients.html">› Clients</a></li>
              <li><a href="blog.html">› Blog</a></li>
              <li><a href="team.html">› Our Team</a></li>
              <li><a href="vision-mission.html">› Vision & Mission</a></li>
              <li><a href="careers.html">› Careers</a></li>
              <li><a href="contact.html">› Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3>Our Services</h3>
            <ul class="footer-links">${serviceFooter}</ul>
          </div>
          <div>
            <h3>Contact Info</h3>
            <p><a href="tel:+919096084445">${CONTACT.phone1}</a><br><a href="tel:+919049554445">${CONTACT.phone2}</a></p>
            <p><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></p>
            <p>${CONTACT.address}</p>
            <p><strong>Mon - Sat:</strong> 9:00 AM - 6:00 PM<br><strong>Sunday:</strong> Closed</p>
          </div>
          <div>
            <h3>Get In Touch</h3>
            <p>Have a project in mind?<br>Let's work together!</p>
            <a class="btn" href="contact.html#quote">Get A Quote <span>→</span></a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2025 Sactech Control System. All Rights Reserved.</span>
          <span><a href="privacy.html">Privacy Policy</a> &nbsp; | &nbsp; <a href="terms.html">Terms & Conditions</a></span>
        </div>
      </div>
    </footer>
    <a class="floating-whatsapp" href="https://wa.me/${CONTACT.whatsapp}?text=Hello%20Sactech%20Control%20System%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener" aria-label="Chat on WhatsApp">WA</a>
    <button class="back-top" id="backTop" aria-label="Back to top">↑</button>
    <div class="modal" id="siteModal" aria-hidden="true">
      <button class="modal-close" data-modal-close aria-label="Close">×</button>
      <div class="modal-card" id="modalCard"></div>
    </div>`;
}

function initChrome() {
  const header = document.getElementById("siteHeader");
  const nav = document.getElementById("navLinks");
  const menu = document.getElementById("menuToggle");
  const theme = document.getElementById("themeToggle");
  const backTop = document.getElementById("backTop");
  const savedTheme = localStorage.getItem("sactech-theme") || "dark";
  document.documentElement.dataset.theme = savedTheme;
  if (theme) theme.textContent = savedTheme === "dark" ? "☀" : "☾";

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
    backTop?.classList.toggle("show", window.scrollY > 500);
  });

  menu?.addEventListener("click", () => {
    nav?.classList.toggle("open");
    document.body.classList.toggle("menu-open", nav?.classList.contains("open"));
    menu.textContent = nav?.classList.contains("open") ? "×" : "☰";
  });

  document.querySelectorAll(".has-dropdown > .nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      const drop = link.closest(".has-dropdown");
      if (!drop.classList.contains("open")) {
        event.preventDefault();
        document.querySelectorAll(".has-dropdown.open").forEach((item) => {
          if (item !== drop) item.classList.remove("open");
        });
        drop.classList.add("open");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".has-dropdown")) {
      document.querySelectorAll(".has-dropdown.open").forEach((item) => {
        item.classList.remove("open");
      });
    }
  });

  theme?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("sactech-theme", next);
    theme.textContent = next === "dark" ? "☀" : "☾";
  });

  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const items = document.querySelectorAll(".reveal, .section, .service-card, .project-card, .blog-card, .team-card, .client-card, .info-card");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  }, { threshold: 0.12 });
  items.forEach((item) => {
    item.classList.add("reveal");
    io.observe(item);
  });
}

function initHomeSlider() {
  const root = document.querySelector("[data-hero-slider]");
  if (!root) return;
  const slideData = [
    {
      image: "hero-1.webp",
      title: "Powering Industries<br><span class=\"text-orange\">Building Futures</span>",
      sub: "End-to-end Electrical & Automation Solutions for a Smarter Tomorrow.",
      features: ["Turnkey Projects", "Automation Experts", "Quality Assurance", "On-Time Delivery"],
      buttons: [["Get A Quote", "contact.html#quote"], ["Contact Us", "contact.html"]]
    },
    {
      image: "hero-2.webp",
      title: "Intelligent Automation<br><span class=\"text-orange\">Reliable Performance</span>",
      sub: "Delivering advanced PLC, VFD, Control Panel and Industrial Automation solutions.",
      features: ["PLC & VFD Automation", "Control Panel Solutions", "Industrial Electrical Works", "Maintenance & Support"],
      buttons: [["Our Services", "services.html"], ["View Projects", "portfolio.html"]]
    },
    {
      image: "hero-3.webp",
      title: "Skilled People.<br><span class=\"text-orange\">Strong Industries.</span>",
      sub: "Providing skilled manpower and technical expertise to keep your industry moving forward.",
      features: ["Skilled Manpower", "Training & Consultancy", "Safety First", "Commitment To Excellence"],
      buttons: [["Join Our Team", "team.html"], ["Contact Us", "contact.html"]]
    }
  ];
  root.innerHTML = `
    <div class="hero-slider">
      ${slideData.map((s, i) => `<div class="slide ${i === 0 ? "active" : ""}"><img src="${ASSETS}${s.image}" alt="${s.sub}" fetchpriority="${i === 0 ? "high" : "auto"}"></div>`).join("")}
    </div>
    <div class="container hero-content">
      <div class="hero-copy" id="heroCopy"></div>
    </div>
    <div class="hero-controls">
      <button class="slider-btn prev" data-slide-prev aria-label="Previous slide">‹</button>
      <button class="slider-btn next" data-slide-next aria-label="Next slide">›</button>
      <div class="dots">${slideData.map((_, i) => `<button class="dot ${i === 0 ? "active" : ""}" data-slide-dot="${i}" aria-label="Go to slide ${i + 1}"></button>`).join("")}</div>
    </div>`;
  const slides = [...root.querySelectorAll(".slide")];
  const dots = [...root.querySelectorAll(".dot")];
  const copy = root.querySelector("#heroCopy");
  let index = 0;
  const render = () => {
    slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    const s = slideData[index];
    copy.innerHTML = `
      <h1>${s.title}</h1>
      <p class="lead">${s.sub}</p>
      <div class="feature-row">${s.features.map((f) => `<span class="feature-chip">${icon("M20 6 9 17l-5-5")} ${f}</span>`).join("")}</div>
      <div class="cta-actions">${s.buttons.map((b, i) => `<a class="btn ${i ? "secondary" : ""}" href="${b[1]}">${b[0]} <span>→</span></a>`).join("")}</div>`;
  };
  const go = (next) => {
    index = (next + slideData.length) % slideData.length;
    render();
  };
  render();
  root.querySelector("[data-slide-prev]")?.addEventListener("click", () => go(index - 1));
  root.querySelector("[data-slide-next]")?.addEventListener("click", () => go(index + 1));
  dots.forEach((dot) => dot.addEventListener("click", () => go(Number(dot.dataset.slideDot))));
  setInterval(() => go(index + 1), 6500);
}

function renderServiceGrids() {
  document.querySelectorAll("[data-service-grid]").forEach((grid) => {
    const limit = Number(grid.dataset.limit || services.length);
    grid.innerHTML = services.slice(0, limit).map((service, i) => serviceCard(service, i)).join("");
  });
}

function serviceCard(service, i) {
  return `
    <a class="service-card" href="service.html?service=${service.slug}" aria-label="${service.title}">
      <span class="service-num">${String(i + 1).padStart(2, "0")}</span>
      <span class="service-icon">${icon(service.icon)}</span>
      <h3>${service.title}</h3>
      <p>${service.short}</p>
      <span class="more">View Details <span>→</span></span>
    </a>`;
}

function renderProjects() {
  document.querySelectorAll("[data-project-grid]").forEach((grid) => {
    const limit = Number(grid.dataset.limit || projects.length);
    const category = grid.dataset.category || "all";
    const list = projects.filter((p) => category === "all" || p.category === category).slice(0, limit);
    grid.innerHTML = list.map(projectCard).join("");
  });
  const filters = document.querySelector("[data-project-filters]");
  if (filters && !filters.dataset.ready) {
    filters.dataset.ready = "true";
    const cats = ["All Projects", ...new Set(projects.map((p) => p.category))];
    filters.innerHTML = cats.map((cat, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${i === 0 ? "all" : cat}">${cat}</button>`).join("");
    filters.addEventListener("click", (event) => {
      const btn = event.target.closest("button");
      if (!btn) return;
      filters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const grid = document.querySelector("[data-project-grid]");
      grid.dataset.category = btn.dataset.filter;
      renderProjects();
    });
  }
}

function projectCard(p) {
  return `
    <article class="project-card" data-open-modal="project-${p.id}">
      <img src="${ASSETS}${p.image}" alt="${p.title}" loading="lazy">
      <div class="project-body">
        <span class="tag">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="meta"><span>${p.year}</span><span>${p.place}</span></div>
      </div>
    </article>`;
}

function renderClients() {
  document.querySelectorAll("[data-client-grid]").forEach((grid) => {
    grid.innerHTML = clients.map(([name, sector]) => `
      <div class="client-card">
        <div>
          <div class="client-logo">${name}</div>
          <small>${sector}</small>
        </div>
      </div>`).join("");
  });
}

function renderBlogs() {
  document.querySelectorAll("[data-blog-grid]").forEach((grid) => {
    const limit = Number(grid.dataset.limit || blogPosts.length);
    grid.innerHTML = blogPosts.slice(0, limit).map(blogCard).join("");
  });
  document.querySelectorAll("[data-recent-posts]").forEach((box) => {
    box.innerHTML = blogPosts.slice(1, 5).map((p) => `
      <a class="recent-item" href="blog.html#post-${p.id}" data-open-modal="blog-${p.id}">
        <img src="${ASSETS}${p.image}" alt="${p.title}" loading="lazy">
        <span><strong>${p.title}</strong><br><small>${p.date}</small></span>
      </a>`).join("");
  });
}

function blogCard(p) {
  return `
    <article class="blog-card" id="post-${p.id}">
      <img src="${ASSETS}${p.image}" alt="${p.title}" loading="lazy">
      <div class="blog-body">
        <span class="tag">${p.category}</span>
        <div class="meta"><span>${p.date}</span></div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <a class="more" href="blog.html#post-${p.id}" data-open-modal="blog-${p.id}">Read More <span>→</span></a>
      </div>
    </article>`;
}

function initServiceDetail() {
  const target = document.querySelector("[data-service-detail]");
  if (!target) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("service") || "turnkey-projects";
  const service = services.find((s) => s.slug === slug) || services[0];
  document.title = `${service.title} | Sactech Control System`;
  target.innerHTML = `
    <div class="detail-panel">
      <div class="detail-hero">
        <img src="${ASSETS}${service.image}" alt="${service.title}">
        <div class="detail-copy">
          <p class="eyebrow">Service Details</p>
          <h2>${service.title}</h2>
          <p>${service.full}</p>
          <ul class="check-list">
            <li>Industrial-grade planning and site execution.</li>
            <li>Quality-focused process with safety standards.</li>
            <li>Experienced technical manpower and supervision.</li>
            <li>Reliable delivery with commissioning support.</li>
          </ul>
          <div class="cta-actions">
            <a class="btn" href="contact.html#quote">Get A Quote <span>→</span></a>
            <a class="btn secondary" href="services.html">All Services <span>→</span></a>
          </div>
        </div>
      </div>
    </div>`;
}

function initForms() {
  document.querySelectorAll("form[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const phone = data.get("phone") || "";
      const service = data.get("service") || "";
      const message = data.get("message") || "";
      const subject = encodeURIComponent(`Website enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${data.get("email") || ""}\nPhone: ${phone}\nCompany: ${data.get("company") || ""}\nService: ${service}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      form.reset();
    });
  });

  document.querySelectorAll("form[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = new FormData(form).get("email");
      alert(`Thank you. ${email} has been added for Sactech Control System updates.`);
      form.reset();
    });
  });
}

function initModal() {
  const modal = document.getElementById("siteModal");
  const card = document.getElementById("modalCard");
  if (!modal || !card) return;
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-modal]");
    if (!trigger) return;
    const id = trigger.dataset.openModal;
    const [type, rawId] = id.split("-");
    const item = type === "project" ? projects.find((p) => p.id === Number(rawId)) : blogPosts.find((p) => p.id === Number(rawId));
    if (!item) return;
    event.preventDefault();
    const img = item.image;
    card.innerHTML = `
      <img src="${ASSETS}${img}" alt="${item.title}">
      <div class="modal-body">
        <span class="tag">${item.category}</span>
        <h2>${item.title}</h2>
        <p>${item.description || item.excerpt}</p>
        <p>${type === "project" ? "Sactech Control System delivers industrial solutions with careful planning, skilled execution, safety focus and reliable commissioning support." : "For reliable electrical, automation and technical workforce solutions, our team supports industries with practical field experience and quality-focused service."}</p>
        <a class="btn" href="contact.html#quote">Discuss This <span>→</span></a>
      </div>`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-modal-close]")) closeModal();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
}

function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.done) return;
      entry.target.dataset.done = "true";
      const suffix = entry.target.dataset.suffix || "";
      const end = Number(entry.target.dataset.count);
      let start = 0;
      const step = Math.max(1, Math.ceil(end / 42));
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        entry.target.textContent = `${start}${suffix}`;
      }, 24);
    });
  }, { threshold: 0.5 });
  nums.forEach((n) => io.observe(n));
}

function initPageHeroBackgrounds() {
  document.querySelectorAll(".page-hero[data-bg]").forEach((hero) => {
    const img = document.createElement("img");
    img.src = `${ASSETS}${hero.dataset.bg}`;
    img.alt = "";
    img.loading = "eager";
    hero.prepend(img);
  });
}

function boot() {
  initHeader();
  initFooter();
  initChrome();
  initPageHeroBackgrounds();
  initHomeSlider();
  renderServiceGrids();
  renderProjects();
  renderClients();
  renderBlogs();
  initServiceDetail();
  initForms();
  initModal();
  initCounters();
  initReveal();
}

document.addEventListener("DOMContentLoaded", boot);










