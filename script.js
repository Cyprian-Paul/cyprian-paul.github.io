/* ===== SKILLS DATA ===== */
const skills = [
  { icon: "🌐", name: "Network Administration", desc: "LAN/WAN setup, IP configuration, DHCP, DNS, Wi-Fi, structured cabling, and PRTG network monitoring.", level: 85 },
  { icon: "🔧", name: "Hardware Troubleshooting", desc: "Diagnosing and repairing desktops, laptops, printers, and peripheral devices.", level: 88 },
  { icon: "🖥️", name: "ICT Technical Support", desc: "First-level support, OS installation, Microsoft 365 administration, Active Directory, and remote assistance.", level: 90 },
  { icon: "💻", name: "Web Development", desc: "Building websites using HTML, CSS, JavaScript, React, and Python. Deployed on GitHub Pages.", level: 80 },
  { icon: "🗄️", name: "Database Management", desc: "Designing and managing MySQL databases, writing queries, and handling data for applications.", level: 75 },
  { icon: "🔐", name: "Cybersecurity", desc: "Cybersecurity defence analysis, threat awareness, endpoint protection, and secure system configuration.", level: 78 },
  { icon: "📷", name: "CCTV Installation", desc: "Installing, configuring, and integrating CCTV systems into existing network infrastructure.", level: 82 },
  { icon: "👩‍🏫", name: "User Training", desc: "Training staff and end users on ICT systems, Microsoft 365, and software tools at all skill levels.", level: 84 },
];

/* ===== PROJECTS DATA ===== */
const projects = [
  {
    tag: "Helpdesk · Web App",
    title: "ResolveIQ — IT Helpdesk Ticketing System",
    desc: "A live helpdesk system with ticket submission, SLA tracking, priority filtering, and CSV export. Built with React, FastAPI, and MySQL with JWT authentication and role-based access.",
    outcome: "Fully deployed and live.",
    link: "https://cyprian-paul.github.io/ResolveIQ",
    demo: { label: "Email", username: "admin@company.com", password: "admin123" },
    extraLink: null
  },
  {
    tag: "Networking · Monitoring",
    title: "NodeScan — Network Monitoring Dashboard",
    desc: "A real-time dashboard tracking device status, uptime, active alerts, and network events. Built for ICT teams needing live infrastructure visibility.",
    outcome: "Fully deployed and live.",
    link: "https://cyprian-paul.github.io/NodeScan",
    demo: { label: "Username", username: "admin", password: "admin123" },
    extraLink: null
  },
  {
    tag: "ICT · Infrastructure",
    title: "NetPulse — ICT Infrastructure Management",
    desc: "An infrastructure management platform for tracking and managing ICT assets, network devices, and system statuses across an organisation.",
    outcome: "Fully deployed and live.",
    link: "https://cyprian-paul.github.io/NetPulse-ICT",
    demo: { label: "Username", username: "admin", password: "admin123" },
    extraLink: null
  },
  {
    tag: "Security · Pentest Tool",
    title: "RedReport — Penetration Testing Report Generator",
    desc: "A full-stack platform for cybersecurity professionals to document vulnerabilities, generate professional pentest reports with CVSS scoring, and export as PDF or DOCX. Includes public share links and GitHub README generation.",
    outcome: "Fully deployed and live with demo account.",
    link: "https://cyprian-paul.github.io/redreport-demo/",
    demo: { label: "Email", username: "demo@redreport.dev", password: "Demo1234!" },
    extraLink: { label: "Open Full App", url: "https://redreport.vercel.app" }
  },
  {
    tag: "Networking · Infrastructure",
    title: "LAN Setup and Cabling — Zetech University",
    desc: "Planned, installed, and tested a structured LAN cabling system across a building at Zetech University. Configured switches, IP addressing, and verified connectivity across all nodes.",
    outcome: "Fully functional LAN with documented network diagram and tested connectivity on all ports.",
    link: null,
    demo: null,
    extraLink: null
  },
  {
    tag: "Security · Networking",
    title: "CCTV Integration Project — Zetech University",
    desc: "Installed and configured a CCTV surveillance system integrated into the existing campus network. Set up camera positioning, DVR configuration, and remote monitoring access.",
    outcome: "Live monitoring system covering key areas with remote access configured for security personnel.",
    link: null,
    demo: null,
    extraLink: null
  },
];

/* ===== ACHIEVEMENTS DATA ===== */
const achievements = [
  { title: "Completed LAN Setup and CCTV Integration at Zetech University", desc: "Hands-on infrastructure work including structured cabling, switch configuration, IP setup, and CCTV system integration during attachment at Zetech University." },
  { title: "Earned CCNA: Switching, Routing & Wireless Essentials — Cisco", desc: "Completed the Cisco Networking Academy CCNA course covering VLANs, routing protocols, wireless LAN, and enterprise network configuration." },
  { title: "Completed Cybersecurity Defense Analyst Pathway — Cisco", desc: "Trained in threat monitoring, SOC operations, log analysis, and incident response through Cisco Networking Academy." },
  { title: "Completed AI Training — ICT Authority of Kenya", desc: "Completed a government-backed AI training programme covering machine learning fundamentals, AI tools, and practical applications in the Kenyan digital economy." },
  { title: "Completed Cybersecurity & Emerging Technologies Awareness — ICT Authority Kenya", desc: "Government-accredited programme covering cybersecurity best practices, emerging technology risks, and digital safety in Kenya's ICT landscape." },
  { title: "Completed Apply AI: Update Your Resume — Cisco Networking Academy", desc: "Completed training on applying AI tools for career development, professional branding, and document optimisation in the digital job market." },
  { title: "Built and deployed 4 live web applications", desc: "ResolveIQ, NodeScan, NetPulse, and RedReport are all publicly accessible, demonstrating full-stack development, networking, security tooling, and IT support system skills." },
  { title: "Graduated with BSc Information Technology — Second Class Honours", desc: "Completed a four-year degree at Zetech University covering networking, web development, databases, cybersecurity, software engineering, and ICT project management." },
];

/* ===== FLOATING NAV CONFIG ===== */
const pages = ['home', 'about', 'skills', 'projects', 'achievements', 'certifications', 'analyzer', 'contact'];
const pageLabels = { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', achievements: 'Achievements', certifications: 'Certifications', analyzer: 'Analyze', contact: 'Hire Me' };
let currentPageIndex = 0;

function updateFloatNav(name) {
  const idx = pages.indexOf(name);
  if (idx === -1) return;
  currentPageIndex = idx;
  const label = document.getElementById('floatLabel');
  const backBtn = document.getElementById('floatBack');
  const nextBtn = document.getElementById('floatNext');
  if (label) label.textContent = pageLabels[name] || name;
  if (backBtn) { backBtn.style.opacity = idx === 0 ? '0.3' : '1'; backBtn.style.pointerEvents = idx === 0 ? 'none' : 'auto'; }
  if (nextBtn) { nextBtn.style.opacity = idx === pages.length - 1 ? '0.3' : '1'; nextBtn.style.pointerEvents = idx === pages.length - 1 ? 'none' : 'auto'; }
}

function floatNavBack() { if (currentPageIndex > 0) showPage(pages[currentPageIndex - 1]); }
function floatNavNext() { if (currentPageIndex < pages.length - 1) showPage(pages[currentPageIndex + 1]); }

/* ===== PAGE NAVIGATION ===== */
function showPage(name) {
  const current = document.querySelector(".page.active");
  const target = document.getElementById("page-" + name);
  if (!target || current === target) return;
  if (current) { current.classList.add("exit"); setTimeout(() => { current.classList.remove("active", "exit"); }, 300); }
  setTimeout(() => { target.classList.add("active"); window.scrollTo({ top: 0, behavior: "smooth" }); }, 150);
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("nav-active"));
  const activeLink = document.querySelector(`.nav-links a[data-page="${name}"]`);
  if (activeLink) activeLink.classList.add("nav-active");
  if (name === "skills") {
    setTimeout(() => { document.querySelectorAll(".skill-bar-fill").forEach(bar => { bar.style.width = bar.dataset.level + "%"; }); }, 300);
  }
  updateFloatNav(name);
  const links = document.querySelector(".nav-links");
  if (links && links.style.display === "flex" && window.innerWidth < 640) links.style.display = "";
}

/* ===== RENDER SKILLS ===== */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;
  grid.innerHTML = skills.map(s => `
    <div class="skill-card">
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-desc">${s.desc}</div>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
    </div>`).join("");
}

/* ===== RENDER PROJECTS ===== */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card">
      <span class="project-tag">${p.tag}</span>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-outcome">✓ ${p.outcome}</div>
      ${p.demo ? `<div class="project-demo">
        <span class="demo-label">Demo Access</span>
        <div class="demo-row"><span class="demo-key">${p.demo.label}:</span><code class="demo-val">${p.demo.username}</code></div>
        <div class="demo-row"><span class="demo-key">Password:</span><code class="demo-val">${p.demo.password}</code></div>
      </div>` : ""}
      <div class="project-actions">
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="project-link">View Demo →</a>` : ""}
        ${p.extraLink ? `<a href="${p.extraLink.url}" target="_blank" rel="noopener" class="project-link-real">${p.extraLink.label} →</a>` : ""}
      </div>
    </div>`).join("");
}

/* ===== RENDER ACHIEVEMENTS ===== */
function renderAchievements() {
  const list = document.getElementById("achievementsList");
  if (!list) return;
  list.innerHTML = achievements.map((a, i) => `
    <div class="achievement-item">
      <div class="achievement-num">0${i + 1}</div>
      <div class="achievement-content">
        <div class="achievement-title">${a.title}</div>
        <div class="achievement-desc">${a.desc}</div>
      </div>
    </div>`).join("");
}

/* ===== COUNTER ANIMATION ===== */
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || "";
    let current = 0;
    const step = Math.ceil(target / 40);
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(iv);
    }, 35);
  });
}

/* ===== ANALYZER ===== */
const analyzerMap = {
  network: { label: "Networking Fit", text: "I hold a CCNA certification and have hands-on experience with LAN setup, IP configuration, and structured cabling from real projects at Zetech University." },
  ict:     { label: "ICT Support Fit", text: "ICT technical support is my core specialty. I have provided hardware troubleshooting, OS installation, user training, and end-user support in real environments." },
  tech:    { label: "Tech Environment Fit", text: "I am comfortable in fast-moving tech environments. I adapt quickly to new tools, systems, and workflows." },
  security:{ label: "Cybersecurity Fit", text: "I have completed two cybersecurity certifications and built RedReport, a full-stack penetration testing report platform with CVSS scoring and professional PDF export." },
  web:     { label: "Web Development Fit", text: "I build websites using HTML, CSS, JavaScript, and React. I have deployed four live applications including a full-stack pentest reporting tool." },
  host:    { label: "Hosting & CMS Fit", text: "I have experience with GitHub Pages, Vercel, cPanel, and static site deployment." },
  isp:     { label: "ISP / NOC Fit", text: "My CCNA training in routing, switching, and wireless, combined with hands-on LAN infrastructure work, makes me ready for NOC and ISP support roles." },
  support: { label: "Support Role Fit", text: "End-user support is where I started. I have provided helpdesk, hardware, software, and remote support in real working environments." },
};

const defaultCards = [
  { label: "Core Value I Bring", text: "I combine practical ICT skills with real project experience. I have cabled networks, installed CCTV systems, and built four live web applications including a penetration testing report platform." },
  { label: "Why I Stand Out", text: "I hold a CCNA, two ICT Authority certifications, and a BSc in IT. I bring both certification depth and hands-on execution to every role." },
  { label: "What I Can Deliver", text: "From day one I can support users, troubleshoot hardware, set up network infrastructure, or contribute to web development depending on what your team needs most." },
];

/* ===== JOB TITLE KEYWORD MAP ===== */
const jobMap = {
  noc:        { label: "NOC Engineer Fit", text: "I have CCNA certification covering routing, switching, and wireless protocols. I understand network monitoring, fault detection, and incident escalation from both coursework and hands-on LAN infrastructure work at Zetech University. NodeScan, my live network monitoring dashboard, directly demonstrates this skill set." },
  network:    { label: "Networking Fit", text: "I hold a CCNA certification and have configured LAN infrastructure, IP addressing, DHCP, DNS, and structured cabling in a real university environment. I build and understand the tools that network teams use daily." },
  support:    { label: "IT Support Fit", text: "IT support is my core hands-on experience. At Zetech University I resolved hardware, software, and network faults across multiple departments, administered Microsoft 365, trained staff, and logged every support request using structured documentation." },
  helpdesk:   { label: "Helpdesk Fit", text: "I built ResolveIQ, a full-stack helpdesk ticketing system with SLA tracking, priority filtering, and CSV export. Beyond building the tool, I have real helpdesk experience from my attachment at Zetech University where I handled first-level support across departments." },
  security:   { label: "Cybersecurity Fit", text: "I hold two cybersecurity certifications from Cisco Networking Academy and ICT Authority Kenya, covering SOC operations, threat detection, and incident response. I also built RedReport, a professional penetration testing report platform with CVSS scoring, which shows I understand how security assessments are documented and communicated." },
  cyber:      { label: "Cybersecurity Fit", text: "I hold two cybersecurity certifications from Cisco Networking Academy and ICT Authority Kenya, covering SOC operations, threat detection, and incident response. I also built RedReport, a professional penetration testing report platform with CVSS scoring, which shows I understand how security assessments are documented and communicated." },
  web:        { label: "Web Development Fit", text: "I have built and deployed four live web applications: ResolveIQ, NodeScan, NetPulse, and RedReport. I work across the full stack using HTML, CSS, JavaScript, React, FastAPI, and MySQL. All four projects are publicly accessible and show real production-level features including JWT auth, PDF export, and live dashboards." },
  developer:  { label: "Developer Fit", text: "I have built four deployed web applications covering helpdesk systems, network monitoring, infrastructure management, and security reporting. I work with React, FastAPI, MySQL, and deploy on GitHub Pages and Vercel. My code is on GitHub and my projects are live." },
  isp:        { label: "ISP Role Fit", text: "My CCNA covers the routing, switching, and wireless protocols that ISP operations depend on. I understand IP addressing, VLAN configuration, DHCP, DNS, and network troubleshooting at a practical level from both certification and real infrastructure work." },
  analyst:    { label: "Analyst Fit", text: "I combine technical skills with documentation discipline. I built RedReport specifically to turn complex security findings into structured, professional reports. I understand how to collect evidence, assess severity using CVSS scoring, and present findings clearly to both technical and non-technical audiences." },
  technician: { label: "Field Technician Fit", text: "I have direct field experience from my attachment at Zetech University where I ran structured cabling, configured switches, installed CCTV systems, and crimped Ethernet cables across a live campus environment. I am comfortable working hands-on in physical and field settings." },
  intern:     { label: "Internship Fit", text: "I am a recent BSc IT graduate who has already delivered real infrastructure work, built four deployed applications, and earned a CCNA certification. I bring practical skills and a track record of completing projects independently from start to finish." },
};

function getJobCards(jobTitle) {
  const lower = jobTitle.toLowerCase();
  const matched = [];
  Object.entries(jobMap).forEach(([key, val]) => {
    if (lower.includes(key) && !matched.find(m => m.label === val.label)) {
      matched.push(val);
    }
  });
  return matched;
}

function buildPitch(domain, jobTitle) {
  const job = jobTitle || "this role";
  const company = domain || "your organisation";
  return `I am Cyprian Paul Mang'ong'o, a BSc IT graduate based in Kenya with a CCNA certification and hands-on experience in ICT support, network infrastructure, and full-stack web development. I have built and deployed four live web applications and delivered real infrastructure work at Zetech University. I am applying for the ${job} position at ${company} because my practical background aligns directly with what your team needs. I would welcome the opportunity to contribute from day one.`;
}

function runAnalyzer() {
  const urlInput = document.getElementById("urlInput").value.trim();
  const jobInput = document.getElementById("jobInput") ? document.getElementById("jobInput").value.trim() : "";

  if (!urlInput && !jobInput) return;

  let domain = urlInput;
  try { domain = new URL(urlInput).hostname.replace("www.", ""); } catch (_) {
    domain = urlInput.replace(/^https?:\/\//, "").split("/")[0];
  }

  const urlLower = (urlInput + domain).toLowerCase();
  const jobLower = jobInput.toLowerCase();

  // Match from job title first, then URL
  const jobMatched = getJobCards(jobInput);
  const urlMatched = [];
  Object.entries(analyzerMap).forEach(([key, val]) => {
    if (urlLower.includes(key) && !jobMatched.find(m => m.label === val.label)) {
      urlMatched.push(val);
    }
  });

  // Combine: job title matches take priority
  let allMatched = [...jobMatched, ...urlMatched];

  // Always show exactly 3 cards
  let cards = [];
  if (allMatched.length >= 3) {
    cards = allMatched.slice(0, 3);
  } else if (allMatched.length === 2) {
    cards = [...allMatched, defaultCards[2]];
  } else if (allMatched.length === 1) {
    cards = [...allMatched, defaultCards[0], defaultCards[1]];
  } else {
    cards = defaultCards;
  }

  const displayDomain = domain || jobInput;
  document.getElementById("resultDomain").textContent = jobInput
    ? `Matched to: ${jobInput}${domain ? " at " + domain : ""}`
    : "Matched to: " + domain;

  document.getElementById("resultCards").innerHTML = cards.map(c => `
    <div class="result-card">
      <div class="result-card-label">${c.label}</div>
      <div class="result-card-text">${c.text}</div>
    </div>`).join("");

  // Generate tailored pitch
  const pitch = buildPitch(domain, jobInput);
  document.getElementById("pitchText").textContent = pitch;
  document.getElementById("pitchBox").style.display = "block";
  document.getElementById("copyBtn").textContent = "📋 Copy Pitch";

  document.getElementById("analyzerResults").style.display = "block";
  document.getElementById("clearBtn").style.display = "inline-flex";
}

function clearAnalyzer() {
  document.getElementById("urlInput").value = "";
  if (document.getElementById("jobInput")) document.getElementById("jobInput").value = "";
  document.getElementById("analyzerResults").style.display = "none";
  document.getElementById("pitchBox").style.display = "none";
  document.getElementById("clearBtn").style.display = "none";
}

function copyPitch() {
  const pitch = document.getElementById("pitchText").textContent;
  navigator.clipboard.writeText(pitch).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "✓ Copied!";
    setTimeout(() => { btn.textContent = "📋 Copy Pitch"; }, 2000);
  });
}

/* ===== PARTICLE NETWORK BACKGROUND ===== */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;
  window.addEventListener("resize", () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });
  const COUNT = 120;
  const particles = Array.from({ length: COUNT }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - 0.5) * 1.4, vy: (Math.random() - 0.5) * 1.4,
    r: Math.random() * 2.5 + 1.2,
  }));
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(61,130,255,${1 - dist / 160})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,200,255,0.9)";
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ===== TYPING ANIMATION ===== */
function initTyping() {
  const el = document.getElementById("typedRole");
  if (!el) return;
  const roles = ["ICT Support Specialist","Network Technician","Web Developer","CCNA Certified","Cybersecurity Analyst","Open to Work from Kenya","Helpdesk Engineer","Full Stack Developer","Pentest Report Builder"];
  let roleIndex = 0, charIndex = 0, deleting = false;
  function type() {
    const current = roles[roleIndex];
    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
    }
    setTimeout(type, deleting ? 45 : 90);
  }
  type();
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
  }, { threshold: 0.12 });
  function observeAll() {
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-stagger").forEach(el => observer.observe(el));
  }
  observeAll();
  const origShowPage = window.showPage;
  window.showPage = function(name) { origShowPage(name); setTimeout(observeAll, 100); };
}

/* ===== SCROLL PROGRESS BAR ===== */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const pct = document.documentElement.scrollHeight - window.innerHeight > 0
      ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 : 0;
    bar.style.width = pct + "%";
  });
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  window.addEventListener("scroll", () => { btn.classList.toggle("visible", window.scrollY > 300); });
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      const links = document.querySelector(".nav-links");
      if (links.style.display === "flex") {
        links.style.display = "";
      } else {
        links.style.cssText = "display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:rgba(5,13,31,0.97);padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.10);gap:4px;z-index:99;";
      }
    });
  }
  renderSkills();
  renderProjects();
  renderAchievements();
  animateCounters();
  const homeLink = document.querySelector('.nav-links a[data-page="home"]');
  if (homeLink) homeLink.classList.add("nav-active");
  updateFloatNav('home');
  initParticles();
  initTyping();
  initScrollReveal();
  initScrollProgress();
  initBackToTop();
});
