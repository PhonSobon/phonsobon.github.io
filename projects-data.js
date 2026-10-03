// Single source of truth for Publications & Projects.
// Newest first — projects.html shows all; the home page shows entries with featured: true.
// category: "research" | "work" | "academic" | "hackathon"
// links: { label, url } — omit url to render a disabled chip.
window.PROJECTS = [
  {
    title: "Khmer Image Description Intelligence",
    year: 2026,
    period: "2026",
    category: "research",
    venue: "Images Description Intelligence Pipeline · Hugging Face",
    desc: "Vision‑language captioning for Khmer, evaluated with chrF to account for Khmer's lack of whitespace boundaries. Iterated from a from‑scratch ResNet‑101 + Bahdanau LSTM through SigLIP+mBART‑50, Florence‑2 LoRA, PaliGemma 2, and a final Qwen2.5‑VL‑3B QLoRA fine‑tune.",
    tags: ["Qwen2.5-VL", "QLoRA", "PaliGemma 2", "Florence-2", "chrF"],
    links: [
      { label: "Paper" },
      { label: "Dataset", url: "https://huggingface.co/datasets/phonsobon/khmer_images_captioning_v2" },
      { label: "Demo", url: "https://huggingface.co/spaces/phonsobon/khimgcap" },
      { label: "Code", url: "https://huggingface.co/phonsobon/qwen2.5-vl-3b-khmer-captioning-lora" }
    ]
  },
  {
    title: "Khmer Auto‑Complete",
    year: 2026,
    period: "2026",
    category: "research",
    venue: "CTM Document Intelligence Pipeline · Hugging Face",
    desc: "LSTM‑based next‑word prediction for Khmer using word‑level tokenization, with an in‑progress small Transformer‑decoder variant trained from scratch on a 4–8 word context window.",
    tags: ["LSTM", "Transformer", "Tokenization"],
    links: [
      { label: "Paper" },
      { label: "Project", url: "https://huggingface.co/datasets/phonsobon/khmer_auto_complete" },
      { label: "Demo" },
      { label: "Code", url: "https://huggingface.co/phonsobon/khmer_auto_completed" }
    ]
  },
  {
    title: "Khmer Speech‑to‑Text Web App",
    year: 2026,
    period: "2026",
    category: "research",
    venue: "Independent Project · Hugging Face",
    desc: "FastAPI + static frontend speech‑to‑text application built around a fine‑tuned Qwen3‑ASR model for Khmer, packaged for Docker deployment.",
    tags: ["Qwen3-ASR", "FastAPI", "Docker"],
    links: [
      { label: "Paper" },
      { label: "Project" },
      { label: "Demo" },
      { label: "Code", url: "https://huggingface.co/phonsobon/khmer-speech-to-text" }
    ]
  },
  {
    title: "Khmer Automatic Speech Recognition (ASR)",
    featured: true,
    year: 2025,
    period: "Jul 2025 — Present",
    category: "work",
    venue: "AI Engineer · Ministry of Post and Telecommunications",
    desc: "A speech‑to‑text system that turns spoken Khmer into written text. I fine‑tuned Qwen3‑ASR and Whisper on more than a thousand hours of Khmer audio, reaching around 90% accuracy, then compressed and optimized the models so they run quickly on ordinary CPUs instead of expensive GPUs.",
    tags: ["Qwen3-ASR", "Whisper", "ONNX Runtime", "CTranslate2", "INT8"]
  },
  {
    title: "Khmer Tag Recommendation",
    featured: true,
    year: 2025,
    period: "Jul 2025 — Present",
    category: "work",
    venue: "AI Engineer · Ministry of Post and Telecommunications",
    desc: "A model that reads a Khmer or English document and suggests the tags that describe it, so staff no longer have to label files by hand. Built on mT5‑Small, it gets the right set of tags about 95% of the time and now runs inside a government document management system.",
    tags: ["mT5-Small", "Multi-label", "NLP"]
  },
  {
    title: "Khmer Text Summarization",
    featured: true,
    year: 2025,
    period: "Jul 2025 — Present",
    category: "work",
    venue: "AI Engineer · Ministry of Post and Telecommunications",
    desc: "A model that reads long Khmer documents and news articles and writes a short summary in its own words. I fine‑tuned mT5‑Small on Khmer news data so readers can grasp the main points of a document in seconds, and the model is now part of a document management workflow.",
    tags: ["mT5-Small", "Summarization", "NLP"]
  },
  {
    title: "Khmer OCR",
    year: 2025,
    period: "Jul 2025 — Present",
    category: "work",
    venue: "AI Engineer · Ministry of Post and Telecommunications",
    desc: "A system that reads Khmer text from scanned documents and images. I helped design the full pipeline, from finding where text appears on a page with YOLO to recognizing the characters with a CRNN model, and exposed it as an API other services can call.",
    tags: ["YOLOv11", "CRNN", "CTC", "FastAPI"]
  },
  {
    title: "Khmer–English Document Search",
    year: 2025,
    period: "Jul 2025 — Present",
    category: "work",
    venue: "AI Engineer · Ministry of Post and Telecommunications",
    desc: "A search engine for scanned government documents. Text is pulled out with Khmer OCR, stored in PostgreSQL, and matched by meaning in both Khmer and English, so people can find the document they need without knowing its exact wording.",
    tags: ["PostgreSQL", "Similarity Search", "FastAPI"]
  },
  {
    title: "RAG Chatbot Assistant (Proof of Concept)",
    year: 2025,
    period: "Jul 2025 — Present",
    category: "work",
    venue: "AI Engineer · Ministry of Post and Telecommunications",
    desc: "An early prototype of an AI assistant that answers questions using an organization's own documents. I designed how it retrieves and uses information, compared different LLMs, and prepared the data and embedding models behind it.",
    tags: ["RAG", "LLM", "Vector DB", "Embeddings"]
  },
  {
    title: "Blog Data — Technical Blog Platform",
    year: 2025,
    period: "Jan 2025 — Apr 2025",
    category: "academic",
    venue: "University Project",
    desc: "A blog platform for technical writing, built with a Laravel backend and a Next.js frontend. The admin side uses machine learning to show which content is performing and to recommend what to publish next.",
    tags: ["Laravel", "Next.js", "Machine Learning"]
  },
  {
    title: "University Management System — Data & Analytics",
    year: 2025,
    period: "Dec 2024 — 2025",
    category: "work",
    venue: "Data Analyst · Ministry of Post and Telecommunications",
    desc: "The data side of a national University Management System. I designed the databases, built the cleaning pipeline on AWS, and turned the data into dashboards in Power BI and Apache Superset that show how universities are doing.",
    tags: ["AWS", "MongoDB", "MySQL", "Power BI", "Superset"]
  },
  {
    title: "Digital Community of Cambodia",
    year: 2025,
    period: "Dec 2024 — 2025",
    category: "work",
    venue: "Data Analyst · Ministry of Post and Telecommunications",
    desc: "Analytics for a national digital community platform. I prepared the data, built Looker Studio dashboards, tracked website traffic, and presented monthly insights to leadership.",
    tags: ["MySQL", "Looker Studio", "Google Analytics", "Web Scraping"]
  },
  {
    title: "Digital Law, Policy, and Security in Cambodia",
    year: 2025,
    period: "Dec 2024 — 2025",
    category: "research",
    venue: "Policy Research · Ministry of Post and Telecommunications",
    desc: "Research into how Cambodia governs data and digital technology, compared with its ASEAN neighbours, to help shape future national data policy.",
    tags: ["Data Governance", "Digital Policy", "ASEAN"]
  },
  {
    title: "University Management System — Product Ownership",
    year: 2024,
    period: "Jan 2024 — Nov 2024",
    category: "work",
    venue: "Junior Product Owner · Ministry of Post and Telecommunications",
    desc: "As product owner, I helped roll out a management system to Cambodian universities. I mapped how each university works, migrated their data, ran testing and training, and kept developers and universities aligned until sign‑off.",
    tags: ["Product Management", "UAT", "Data Migration"]
  },
  {
    title: "K‑QuickSight",
    year: 2024,
    period: "Feb 2023 — Apr 2024",
    category: "hackathon",
    venue: "Turing Hackathon Cycle 6 · Techo Startup Center · ISTAD Project",
    desc: "A self‑service analytics tool that lets anyone upload data, clean it, run simple machine learning, and build shareable dashboards without writing code. It started as an ISTAD project and was later pitched at the Turing Hackathon.",
    tags: ["Data Analytics", "Machine Learning", "Dashboards", "APIs"]
  },
  {
    title: "Fresh Express",
    year: 2023,
    period: "Nov 2023",
    category: "hackathon",
    venue: "KonektAgri Hackathon",
    desc: "A mobile app idea that connects farmers directly with retailers and offers affordable, cold‑chain transport, so fresh produce reaches markets faster and with less waste.",
    tags: ["Mobile App", "AgriTech", "Logistics"]
  },
  {
    title: "Smart Hydroponic System",
    year: 2023,
    period: "Sep 2023",
    category: "hackathon",
    venue: "GCIP Hackathon",
    desc: "A small, solar‑powered hydroponic setup with automatic watering that lets families grow vegetables at home in limited space, along with training to help farmers adopt it.",
    tags: ["IoT", "Solar", "AgriTech"]
  },
  {
    title: "Surveybox",
    year: 2023,
    period: "Feb 2023 — Dec 2023",
    category: "academic",
    venue: "ISTAD Training Project",
    desc: "An online survey platform built end to end. I designed the database and APIs, created the user interface, and coordinated the team.",
    tags: ["REST API", "Database Design", "UX/UI"]
  },
  {
    title: "Forecasting 2024 Demand for Short & Expert Courses at ISTAD",
    year: 2023,
    period: "Feb 2023 — Dec 2023",
    category: "academic",
    venue: "ISTAD Data Analytics Project",
    desc: "A data project predicting which short and expert courses would be in demand at ISTAD in 2024, helping the institute plan which classes to open.",
    tags: ["EDA", "Forecasting", "Machine Learning"]
  },
  {
    title: "Smile Car",
    year: 2022,
    period: "Oct 2022",
    category: "hackathon",
    venue: "NICC Start Up",
    desc: "A mobile app idea that helps drivers quickly find and choose the nearest trusted car repair garage.",
    tags: ["Mobile App", "Location-based"]
  }
];

window.PROJECT_CATEGORIES = {
  research: "Research",
  work: "Work",
  academic: "Academic",
  hackathon: "Hackathon"
};

(function(){
  function esc(s){
    return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
  }

  window.renderProjectCard = function(p){
    const links = (p.links || []).map(l => l.url
      ? `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`
      : `<span class="disabled">${esc(l.label)}</span>`).join("");
    const tags = (p.tags || []).map(t => `<span>${esc(t)}</span>`).join("");
    const highlights = (p.highlights && p.highlights.length)
      ? `<details class="pub-more"><summary>Details</summary><ul>${p.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul></details>`
      : "";
    return `
      <div class="pub-card" data-category="${esc(p.category)}">
        <div class="pub-meta"><span class="pub-cat">${esc(window.PROJECT_CATEGORIES[p.category] || p.category)}</span><time>${esc(p.period)}</time></div>
        <h3>${esc(p.title)}</h3>
        <div class="pub-authors"><span class="me">Sobon</span></div>
        <div class="pub-venue">${esc(p.venue)}</div>
        <p class="pub-desc">${esc(p.desc)}</p>
        ${tags ? `<div class="pub-tags">${tags}</div>` : ""}
        ${highlights}
        ${links ? `<div class="pub-links">${links}</div>` : ""}
      </div>`;
  };

  // Render a list grouped by year into `el`
  window.renderProjectList = function(el, items){
    let html = "", lastYear = null;
    items.forEach(p => {
      if(p.year !== lastYear){ html += `<div class="pub-year">${p.year}</div>`; lastYear = p.year; }
      html += window.renderProjectCard(p);
    });
    el.innerHTML = html || `<p class="pub-empty">Nothing here yet.</p>`;
  };
})();
