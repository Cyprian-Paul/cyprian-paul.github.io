/* ===== DATA ===== */
const skills = [
  { icon: "📊", name: "Data Analysis", desc: "Turning raw numbers into decisions that matter.", level: 85 },
  { icon: "🗂️", name: "Project Management", desc: "Planning, executing, and closing projects on time.", level: 80 },
  { icon: "✍️", name: "Business Writing", desc: "Reports, proposals, and communications that land.", level: 90 },
  { icon: "💡", name: "Strategic Planning", desc: "Mapping goals to achievable, measurable outcomes.", level: 78 },
  { icon: "🤝", name: "Stakeholder Management", desc: "Building trust across teams and decision-makers.", level: 82 },
  { icon: "🔍", name: "Research & Insights", desc: "Finding the signal in noise using structured methods.", level: 88 },
  { icon: "📈", name: "Reporting & Dashboards", desc: "Presenting performance in ways people actually read.", level: 84 },
  { icon: "🌍", name: "Cross-cultural Communication", desc: "Working effectively in diverse East African contexts.", level: 76 },
];

const projects = [
  {
    tag: "AI · Computer Vision",
    title: "Shelf Scanner — AI Book Discovery App",
    desc: "Built an end-to-end AI app where users input reading preferences and take a photo of a bookshelf. GPT-4o Vision identifies books from spine text and generates personalized recommendations.",
    outcome: "Full AI product lifecycle: data ingestion, vision API, personalized recommendations, and production deployment."
  },
  {
    tag: "AI · Product Engineering",
    title: "PackVote — Group Travel Planning Platform",
    desc: "Developed a platform where trip organizers add participants, the system sends SMS surveys via Twilio to collect preferences, and AI generates destination recommendations with ranked-choice voting.",
    outcome: "Integrated model gateway routing across OpenAI, Anthropic, and DeepSeek with A/B tested prompts and Prometheus monitoring."
  },
  {
    tag: "MLOps · Machine Learning",
    title: "Are You a Cat? — Production MLOps Pipeline",
    desc: "Built a complete MLOps system using ZenML with three pipelines: training, deployment, and inference. TensorFlow CNN trained on cats, dogs, and selfies with automated deployment triggers.",
    outcome: "Full MLOps infrastructure with MLflow experiment tracking, Deepchecks data validation, and a live Streamlit app."
  },
  {
    tag: "Computer Vision · Mobile",
    title: "Days to Banana Death — CV Regression App",
    desc: "Collected a custom dataset by photographing bananas daily across ripeness levels. Fine-tuned ResNet to predict days remaining before bananas go bad from a single photo.",
    outcome: "Custom dataset, computer vision regression, and a working mobile-friendly product built end to end."
  },
  {
    tag: "AI · Developer Tools",
    title: "AI-Powered Code Review Assistant",
    desc: "Built a tool that integrates with GitHub pull requests and provides intelligent code review beyond basic linting. Understands context across files, flags security vulnerabilities, and suggests architectural improvements.",
    outcome: "Demonstrates AI integration into real software development workflows used by engineering teams daily."
  },
  {
    tag: "AI · Knowledge Management",
    title: "Personal AI Knowledge Assistant",
    desc: "Built a RAG-based system that ingests documents, emails, notes, and learning materials then provides conversational access. Uses vector databases for semantic search with cited responses.",
    outcome: "Modern AI architecture: RAG pipeline, vector database, data ingestion, and a seamless chat interface with privacy controls."
  },
  {
    tag: "ML · Infrastructure",
    title: "Real-Time System Monitoring with AI Predictions",
    desc: "Created a monitoring platform that predicts system failures before they happen by analyzing patterns in logs, performance data, and user behavior. Built ML models for anomaly detection.",
    outcome: "Specific forecasts like 'database hits connection limits in 6 hours based on current traffic' — not vague warnings."
  },
  {
    tag: "NLP · Developer Tools",
    title: "AI-Enhanced Documentation Generator",
    desc: "Built a tool that automatically generates and maintains technical documentation by analyzing code structure, git history, and team communications. Integrates directly into development workflows.",
    outcome: "Semantic code analysis that helps new team members onboard faster and reduces documentation debt."
  },
];

/*
  ============================================================
  ACHIEVEMENTS WITH PROJECT LINKS
  Replace [ADD YOUR LINK HERE] with the actual URL to your
  project. Example: https://github.com/yourusername/project
  If a project has no link yet, leave it as [ADD YOUR LINK HERE]
  and it will show as a placeholder button.
  ============================================================
*/
const achievements = [
  {
    title: "Built and deployed 8 end-to-end AI projects",
    desc: "Each project was independently scoped, built, and shipped — covering computer vision, MLOps, NLP, RAG, and production AI systems.",
    link: "[]",
    linkLabel: "View All Projects"
  },
  {
    title: "Shelf Scanner — AI Book Discovery App",
    desc: "GPT-4o Vision identifies books from shelf photos and generates personalized reading recommendations. Deployed on Vercel.",
    link: "[]",
    linkLabel: "View Project"
  },
  {
    title: "PackVote — Group Travel Planning Platform",
    desc: "SMS-based preference collection via Twilio, AI destination recommendations, and ranked-choice group voting system.",
    link: "[]",
    linkLabel: "View Project"
  },
  {
    title: "Are You a Cat? — MLOps Pipeline",
    desc: "Full ZenML pipeline with MLflow tracking, Deepchecks validation, and automated deployment based on model performance thresholds.",
    link: "[]",
    linkLabel: "View Project"
  },
  {
    title: "Days to Banana Death — CV Regression App",
    desc: "Custom dataset, fine-tuned ResNet model, FastAPI backend, deployed as a mobile-friendly web app on Vercel.",
    link: "[]",
    linkLabel: "View Project"
  },
  {
    title: "AI-Powered Code Review Assistant",
    desc: "GitHub PR integration with context-aware code review, security vulnerability detection, and architectural improvement suggestions.",
    link: "[]",
    linkLabel: "View Project"
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
  document.getElementById("achievementsList").innerHTML = achievements.map((a, i) => {
    const isPlaceholder = a.link === "[ADD YOUR LINK HERE]";
    const linkHTML = isPlaceholder
      ? `<span class="achievement-link" style="opacity:0.45; cursor:default;">🔗 ${a.linkLabel} — [ADD YOUR LINK HERE]</span>`
      : `<a href="${a.link}" target="_blank" class="achievement-link">🔗 ${a.linkLabel}</a>`;
    return `
      <div class="achievement-item">
        <div class="achievement-num">0${i + 1}</div>
        <div class="achievement-content">
          <div class="achievement-title">${a.title}</div>
          <div class="achievement-desc">${a.desc}</div>
          ${linkHTML}
        </div>
      </div>
    `;
  }).join("");
}

/* ===== COUNTER ANIMATION ===== */
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 40);
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString();
      if (current >= target) clearInterval(iv);
    }, 35);
  });
}

/* ===== ANALYZER ===== */
const analyzerMap = {
  finance: { label: "Finance Relevance", text: "My reporting and data analysis work directly applies here. I have produced financial summaries and budget variance reports for organizations managing multi-million KES portfolios." },
  health: { label: "Health Sector Fit", text: "I have supported program evaluations in health-adjacent NGOs, including data collection and stakeholder reporting for community health initiatives." },
  ngo: { label: "Development Sector Fit", text: "I have worked directly with NGOs and county governments on research, reporting, and strategy documents. I understand donor communication and M&E frameworks." },
  tech: { label: "Tech Environment Fit", text: "I adapt quickly to digital workflows and tools. My AI and software projects show I can work in fast-moving technical environments." },
  consult: { label: "Consulting Alignment", text: "My project portfolio is built on consulting-style engagements: scoped deliverables, client-facing reports, and stakeholder presentations with measurable outcomes." },
  edu: { label: "Education Sector Fit", text: "I have designed training materials and run workshops for adult learners. I understand curriculum design and can translate complex content for varied audiences." },
};

const defaultCards = [
  { label: "Core Value I Bring", text: "I translate complex information into clear, actionable outputs. Whether it is a report, a strategy document, or a stakeholder brief, I focus on decisions, not just data." },
  { label: "Why I Stand Out", text: "I combine research depth with communication clarity. Most professionals are strong in one area. I bridge both, which makes my outputs usable from day one." },
  { label: "What I Can Deliver", text: "Within 30 days of joining your team, I deliver a working knowledge of your processes and a concrete contribution: a report, an audit, or a communication product." },
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

/* ===== CONTACT FORM ===== */
function sendMessage() {
  const name = document.getElementById("formName").value.trim();
  const email = document.getElementById("formEmail").value.trim();
  const message = document.getElementById("formMessage").value.trim();
  const fb = document.getElementById("formFeedback");
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
  fb.style.color = "var(--success)";
  fb.textContent = "Message received. I will get back to you within 24 hours.";
  document.getElementById("formName").value = "";
  document.getElementById("formEmail").value = "";
  document.getElementById("formSubject").value = "";
  document.getElementById("formMessage").value = "";
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
renderProjects();
renderAchievements();
animateCounters();
