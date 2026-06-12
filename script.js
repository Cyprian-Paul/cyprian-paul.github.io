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
    demo: { label: "Email", username: "admin@company.com", password: "admin123" }
  },
  {
    tag: "Networking · Monitoring",
    title: "NodeScan — Network Monitoring Dashboard",
    desc: "A real-time dashboard tracking device status, uptime, active alerts, and network events. Built for ICT teams needing live infrastructure visibility.",
    outcome: "Fully deployed and live.",
    link: "https://cyprian-paul.github.io/NodeScan",
    demo: { label: "Username", username: "admin", password: "admin123" }
  },
  {
    tag: "ICT · Infrastructure",
    title: "NetPulse — ICT Infrastructure Management",
    desc: "An infrastructure management platform for tracking and managing ICT assets, network devices, and system statuses across an organisation.",
    outcome: "Fully deployed and live.",
    link: "https://cyprian-paul.github.io/NetPulse-ICT",
    demo: { label: "Username", username: "admin", password: "admin123" }
  },
  {
    tag: "Networking · Infrastructure",
    title: "LAN Setup and Cabling — Zetech University",
    desc: "Planned, installed, and tested a structured LAN cabling system across a building at Zetech University. Configured switches, IP addressing, and verified connectivity across all nodes.",
    outcome: "Fully functional LAN with documented network diagram and tested connectivity on all ports.",
    link: null,
    demo: null
  },
  {
    tag: "Security · Networking",
    title: "CCTV Integration Project — Zetech University",
    desc: "Installed and configured a CCTV surveillance system integrated into the existing campus network. Set up camera positioning, DVR configuration, and remote monitoring access.",
    outcome: "Live monitoring system covering key areas with remote access configured for security personnel.",
    link: null,
    demo: null
  },
];

/* ===== ACHIEVEMENTS DATA ===== */
const achievements = [
  {
    title: "Completed LAN Setup and CCTV Integration at Zetech University",
    desc: "Hands-on infrastructure work including structured cabling, switch configuration, IP setup, and CCTV system integration during attachment at Zetech University."
  },
  {
    title: "Earned CCNA: Switching, Routing & Wireless Essentials — Cisco",
    desc: "Completed the Cisco Networking Academy CCNA course covering VLANs, routing protocols, wireless LAN, and enterprise network configuration."
  },
  {
    title: "Completed Cybersecurity Defense Analyst Pathway — Cisco",
    desc: "Trained in threat monitoring, SOC operations, log analysis, and incident response through Cisco Networking Academy."
  },
  {
    title: "Completed AI Training — ICT Authority of Kenya",
    desc: "Completed a government-backed AI training programme covering machine learning fundamentals, AI tools, and practical applications in the Kenyan digital economy."
  },
  {
    title: "Completed Cybersecurity & Emerging Technologies Awareness — ICT Authority Kenya",
    desc: "Government-accredited programme covering cybersecurity best practices, emerging technology risks, and digital safety in Kenya's ICT landscape."
  },
  {
    title: "Completed Apply AI: Update Your Resume — Cisco Networking Academy",
    desc: "Completed training on applying AI tools for career development, professional branding, and document optimisation in the digital job market."
  },
  {
    title: "Built and deployed 3 live web applications",
    desc: "ResolveIQ, NodeScan, and NetPulse are all publicly accessible, demonstrating full-stack development, networking, and IT support system skills."
  },
  {
    title: "Graduated with BSc Information Technology — Second Class Honours",
    desc: "Completed a four-year degree at Zetech University covering networking, web development, databases, cybersecurity, software engineering, and ICT project management."
  },
];

/* ===== PAGE NAVIGATION ===== */
function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById("page-" + name);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll(".nav-links a").forEach(a => a.classList.remove("nav-active"));
  const activeLink = document.querySelector(`.nav-links a[data-page="${name}"]`);
  if (activeLink) activeLink.classList.add("nav-active");

  if (name === "skills") {
    setTimeout(() => {
      document.querySelectorAll(".skill-bar-fill").forEach(bar => {
        bar.style.width = bar.dataset.level + "%";
      });
    }, 120);
  }

  const links = document.querySelector(".nav-links");
  if (links && links.style.display === "flex" && window.innerWidth < 640) {
    links.style.display = "";
  }
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
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>
    </div>
  `).join("");
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
      ${p.demo ? `
        <div class="project-demo">
          <span class="demo-label">Demo Access</span>
          <div class="demo-row"><span class="demo-key">${p.demo.label}</span><code class="demo-val">${p.demo.username}</code></div>
          <div class="demo-row"><span class="demo-key">Password</span><code class="demo-val">${p.demo.password}</code></div>
        </div>
      ` : ""}
      ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="project-link">View Live Project →</a>` : ""}
    </div>
  `).join("");
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
    </div>
  `).join("");
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
  ict: { label: "ICT Support Fit", text: "ICT technical support is my core specialty. I have provided hardware troubleshooting, OS installation, user training, and end-user support in real environments." },
  tech: { label: "Tech Environment Fit", text: "I am comfortable in fast-moving tech environments. I adapt quickly to new tools, systems, and workflows and have experience with both hardware and software sides of ICT." },
  security: { label: "Cybersecurity Fit", text: "I have completed two cybersecurity certifications covering threat identification, network security, SOC operations, and secure system configuration." },
  web: { label: "Web Development Fit", text: "I build websites using HTML, CSS, JavaScript, and React. I have deployed three live applications on GitHub Pages." },
  host: { label: "Hosting & CMS Fit", text: "I have experience with GitHub Pages, cPanel, and static site deployment. I understand domain setup, file management, and web hosting workflows." },
  isp: { label: "ISP / NOC Fit", text: "My CCNA training in routing, switching, and wireless, combined with hands-on LAN infrastructure work, makes me ready for NOC and ISP support roles." },
  support: { label: "Support Role Fit", text: "End-user support is where I started. I have provided helpdesk, hardware, software, and remote support in real working environments." },
};

const defaultCards = [
  { label: "Core Value I Bring", text: "I combine practical ICT skills with real project experience. I have cabled networks, installed CCTV systems, and built three live web applications." },
  { label: "Why I Stand Out", text: "I hold a CCNA, two ICT Authority certifications, and a BSc in IT. I bring both certification depth and hands-on execution to every role." },
  { label: "What I Can Deliver", text: "From day one I can support users, troubleshoot hardware, set up network infrastructure, or contribute to web development depending on what your team needs most." },
];

function runAnalyzer() {
  const input = document.getElementById("urlInput").value.trim();
  if (!input) return;
  let domain = input;
  try { domain = new URL(input).hostname.replace("www.", ""); } catch (_) { domain = input.replace(/^https?:\/\//, "").split("/")[0]; }
  const lower = (input + domain).toLowerCase();
  const matched = [];
  Object.entries(analyzerMap).forEach(([key, val]) => { if (lower.includes(key)) matched.push(val); });
  const cards = matched.length > 0 ? [...matched.slice(0, 2), defaultCards[0]] : defaultCards;
  document.getElementById("resultDomain").textContent = "Matched to: " + domain;
  document.getElementById("resultCards").innerHTML = cards.map(c => `
    <div class="result-card">
      <div class="result-card-label">${c.label}</div>
      <div class="result-card-text">${c.text}</div>
    </div>
  `).join("");
  document.getElementById("analyzerResults").style.display = "block";
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
});
