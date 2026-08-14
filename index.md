---
layout: default
title: Welcome Hub
nav_order: 1
permalink: /
---

# 📔 The Engineer's Logbook
*Production-grade playbooks, environment configurations, and technical lessons learned.*

<div class="grid-container">
  <a href="./local-ai/" class="card">
    <div class="icon">🤖</div>
    <h3>Local AI Infrastructure</h3>
    <p>Zero-cost local LLM setups with oMLX, Hugging Face, and VS Code integration.</p>
  </a>
  
  <a href="./local-ai/deepseek-guide/" class="card">
    <div class="icon">🧠</div>
    <h3>Deep Reasoning Models</h3>
    <p>Scaling up to 14B/32B parameter models like DeepSeek-R1 for complex logic.</p>
  </a>

  <a href="#" class="card coming-soon">
    <div class="icon">🚧</div>
    <h3>DevOps & Systems</h3>
    <p>Docker, Kubernetes, and System Architecture guides coming soon.</p>
  </a>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 40px;
}
.card {
  background: #161b22; /* Matches your dark theme */
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 24px;
  text-decoration: none !important;
  transition: transform 0.2s, border-color 0.2s;
  color: #c9d1d9 !important;
}
.card:hover {
  transform: translateY(-5px);
  border-color: #58a6ff;
}
.card .icon { font-size: 32px; margin-bottom: 12px; }
.card h3 { color: #58a6ff; margin: 0 0 8px 0; font-size: 1.2em; }
.card p { margin: 0; color: #8b949e; font-size: 0.95em; }
.coming-soon { opacity: 0.6; pointer-events: none; }
</style>
