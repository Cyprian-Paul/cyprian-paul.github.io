/* ===== SKILLS DATA ===== */
const skills = [
  { icon: "🌐", name: "Network Administration", desc: "LAN setup, IP configuration, DHCP, DNS, and structured cabling across real environments.", level: 85 },
  { icon: "🔧", name: "Hardware Troubleshooting", desc: "Diagnosing and repairing desktops, laptops, printers, and peripheral devices.", level: 88 },
  { icon: "🖥️", name: "ICT Technical Support", desc: "End-user support, OS installation, software configuration, and remote assistance.", level: 90 },
  { icon: "💻", name: "Web Development", desc: "Building websites using HTML, CSS, JavaScript, and React. Deployed on Hostinger and GitHub Pages.", level: 80 },
  { icon: "🗄️", name: "Database Management", desc: "Designing and managing MySQL databases, writing queries, and handling data for applications.", level: 75 },
  { icon: "🔐", name: "Cybersecurity Fundamentals", desc: "Network security principles, threat identification, and safe system configuration practices.", level: 78 },
  { icon: "📷", name: "CCTV Installation", desc: "Installing, configuring, and integrating CCTV systems into existing network infrastructure.", level: 82 },
  { icon: "👩‍🏫", name: "User Training", desc: "Training staff and end users on ICT systems, software tools, and best practices.", level: 84 },
];

/* ===== CERTIFICATIONS DATA ===== */
const certifications = [
  { icon: "🏅", name: "CCNA — Cisco Certified Network Associate", issuer: "Cisco", date: "[Add Year]" },
  { icon: "🤖", name: "AI Training Certificate", issuer: "ICT Authority of Kenya", date: "[Add Year]" },
  { icon: "🔒", name: "Cybersecurity Certificate", issuer: "[Add Issuing Body]", date: "[Add Year]" },
  { icon: "🎓", name: "BSc Information Technology", issuer: "Zetech University", date: "[Add Graduation Year]" },
];

/* ===== PROJECTS DATA ===== */
const projects = [
  {
    tag: "Networking · Infrastructure",
    title: "LAN Setup and Cabling — Zetech University",
    desc: "Planned, installed, and tested a structured LAN cabling system across a building at Zetech University. Configured switches, IP addressing, and verified connectivity across all nodes.",
    outcome: "Fully functional LAN with documented network diagram and tested connectivity on all ports."
  },
  {
    tag: "Security · Networking",
    title: "CCTV Integration Project — Zetech University",
    desc: "Installed and configured a CCTV surveillance system integrated into the existing campus network. Set up camera positioning, DVR configuration, and remote monitoring access.",
    outcome: "Live monitoring system covering key areas with remote access configured for security personnel."
  },
  {
    tag: "Web Development",
    title: "Personal Portfolio Website",
    desc: "Designed and built this portfolio from scratch using HTML, CSS, and JavaScript. Deployed on GitHub Pages with mobile-responsive design and page navigation.",
    outcome: "Live at https://cyprian-paul.github.io — fully responsive with contact form and project showcase."
  },
  {
    tag: "Database · Backend",
    title: "MySQL Database Project",
    desc: "Designed a relational database schema for a student records system. Wrote SQL queries for data entry, retrieval, updating, and reporting.",
    outcome: "Fully normalized database with working queries covering CRUD operations and report generation."
  },
  {
    tag: "AI · Developer Tools",
    title: "AI-Powered Code Review Assistant",
    desc: "Built a web tool that analyzes pasted code or GitHub PR diffs for security vulnerabilities, performance issues, and architecture problems.",
    outcome: "Live tool with multi-language support, severity scoring, and downloadable analysis reports."
  },
  {
    tag: "Web · JavaScript",
    title: "VideoToBlog Converter",
    desc: "Built a SaaS-style web app that takes a YouTube URL and uses AI to generate a full SEO-optimized blog post from the video content.",
    outcome: "Working AI-powered content tool with dark UI, spinner feedback, and one-click copy to clipboard."
  },
];

/* ===== ACHIEVEMENTS DATA — 9 TOTAL ===== */
const achievements = [
  {
    title: "Completed LAN Setup and CCTV Integration at Zetech University",
    desc: "Hands-on infrastructure work including structured cabling, switch configuration, IP setup, and CCTV system integration during attachment at Zetech University."
  },
  {
    title: "Earned CCNA Certification from Cisco",
    desc: "Passed the Cisco Certified Network Associate exam, demonstrating competency in network fundamentals, IP connectivity, security, and automation."
  },
  {
    title: "Completed AI Training — ICT Authority of Kenya",
    desc: "Completed a government-backed AI training programme covering machine learning fundamentals, AI tools, and practical applications in the Kenyan digital economy."
  },
  {
    title: "Completed Cybersecurity Certificate",
    desc: "Trained in cybersecurity fundamentals including threat identification, network security, secure system configuration, and incident response basics."
  },
  {
    title: "Built and deployed 8 end-to-end AI and ICT projects",
    desc: "Each project was independently scoped, built, and shipped — covering computer vision, MLOps, NLP, RAG, networking infrastructure, and web development."
  },
  {
    title: "Mastered the full AI product lifecycle",
    desc: "From data collection and model training to deployment, monitoring, and feedback loops. Projects include production-grade features: rate limiting, CI/CD, and automated testing."
  },
  {
    title: "Integrated AI meaningfully across multiple domains",
    desc: "Applied GPT-4o Vision, fine-tuned ResNet models, built RAG pipelines, and implemented model gateways routing across OpenAI, Anthropic, and DeepSeek."
  },
  {
    title: "Shipped mobile-friendly AI apps used by real users",
    desc: "Deployed multiple apps on Vercel with FastAPI and Express.js backends, Twilio SMS integration, S3 storage, and continuous learning feedback loops."
  },
  {
    title: "Graduated with BSc Information Technology — Zetech University",
    desc: "Completed a four-year degree covering networking, web development, databases, cybersecurity, software engineering, and ICT project management."
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
  if (name === "skills") {
    setTimeout(() => {
      document.querySelectorAll(".skill-bar-fill").forEach(bar => {
        bar.style.width = bar.dataset.level + "%";
      });
    }, 120);
  }
  const links = document.querySelector(".nav-links");
  if (links.style.display === "flex" && window.innerWidth < 640) {
    links.style.display = "";
  }
}

/* ===== RENDER SKILLS ===== */
function renderSkills() {
  document.getElementById("skillsGrid").innerHTML = skills.map(s => `
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

/* ===== RENDER CERTIFICATIONS ===== */
function renderCertifications() {
  document.getElementById("certGrid").innerHTML = certifications.map(c => `
    <div class="cert-card">
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-date">${c.date}</div>
    </div>
  `).join("");
}

/* ===== RENDER PROJECTS ===== */
function renderProjects() {
  document.getElementById("projectsGrid").innerHTML = projects.map(p => `
    <div class="project-card">
      <span class="project-tag">${p.tag}</span>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-outcome">✓ ${p.outcome}</div>
    </div>
  `).join("");
}

/* ===== RENDER ACHIEVEMENTS ===== */
function renderAchievements() {
  document.getElementById("achievementsList").innerHTML = achievements.map((a, i) => `
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
  security: { label: "Cybersecurity Fit", text: "I have completed cybersecurity training covering threat identification, network security, and secure system configuration." },
  web: { label: "Web Development Fit", text: "I build websites using HTML, CSS, JavaScript, and React. I have deployed sites on GitHub Pages and Hostinger and understand both front-end design and back-end basics." },
  host: { label: "Hosting & CMS Fit", text: "I have experience with Hostinger, GitHub Pages, cPanel, and static site deployment. I understand domain setup, file management, and web hosting workflows." },
};

const defaultCards = [
  { label: "Core Value I Bring", text: "I combine practical ICT skills with real project experience. I have cabled networks, installed CCTV systems, and built working web applications." },
  { label: "Why I Stand Out", text: "I hold a CCNA, an AI certificate from the ICT Authority, and a BSc in IT. I bring both certification depth and hands-on execution to every role." },
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

/* ===== CONTACT FORM WITH EMAILJS =====
   SETUP STEPS:
   1. Go to https://www.emailjs.com and sign up free
   2. Click "Add New Service", choose Gmail, connect mangongocyprian124@gmail.com
      Copy the Service ID and paste it below where it says YOUR_SERVICE_ID
   3. Click "Email Templates", create a template, copy the Template ID
      Paste it below where it says YOUR_TEMPLATE_ID
   4. Click your profile > Account, copy your Public Key
      Paste it below where it says YOUR_PUBLIC_KEY
   5. Save and upload to GitHub — messages will arrive in your Gmail
================================================ */
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

function sendMessage() {
  const name    = document.getElementById("formName").value.trim();
  const email   = document.getElementById("formEmail").value.trim();
  const subject = document.getElementById("formSubject").value.trim();
  const message = document.getElementById("formMessage").value.trim();
  const fb      = document.getElementById("formFeedback");

  if (!name || !email || !message) {
    fb.style.color = "#ef4444";
    fb.textContent = "Please fill in your name, email, and message.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fb.style.color = "#ef4444";
    fb.textContent = "Please enter a valid email address.";
    return;
  }

  fb.style.color = "var(--white-50)";
  fb.textContent = "Sending...";

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name: name,
    from_email: email,
    subject: subject || "Portfolio contact",
    message: message,
    to_email: "mangongocyprian124@gmail.com"
  }, EMAILJS_PUBLIC_KEY)
  .then(() => {
    fb.style.color = "var(--success)";
    fb.textContent = "Message sent! I will get back to you within 24 hours.";
    document.getElementById("formName").value = "";
    document.getElementById("formEmail").value = "";
    document.getElementById("formSubject").value = "";
    document.getElementById("formMessage").value = "";
  })
  .catch(() => {
    fb.style.color = "#ef4444";
    fb.textContent = "Failed to send. Please email me directly at mangongocyprian124@gmail.com";
  });
}

/* ===== HAMBURGER ===== */
document.getElementById("hamburger").addEventListener("click", () => {
  const links = document.querySelector(".nav-links");
  if (links.style.display === "flex") {
    links.style.display = "";
  } else {
    links.style.cssText = "display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:rgba(5,13,31,0.97);padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.10);gap:4px;z-index:99;";
  }
});

/* ===== INIT ===== */
renderSkills();
renderCertifications();
renderProjects();
renderAchievements();
animateCounters();