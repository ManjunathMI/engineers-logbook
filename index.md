---
layout: default
title: Welcome Hub
nav_order: 1
permalink: /
---

<!-- Native Inline Theme Toggle Button Layer -->
<div class="theme-controller-wrap">
  <button id="manual-theme-toggle" class="premium-toggle-btn">🌓 Switch Theme</button>
</div>

# 📔 The Engineer's Logbook
*Production-grade playbooks, environment configurations, and technical lessons learned.*

<!-- Clean Enterprise Bento Layout Grid Matrix -->
<div class="bento-container">
  
  <a href="./local-ai/omlx-setup.html" class="bento-card active-card">
    <div class="bento-badge">Active Playbook</div>
    <div class="bento-card-header">
      <span class="bento-icon">🤖</span>
      <h3>oMLX & VS Code Integration</h3>
    </div>
    <p>Zero-cost local LLM setups with Apple MLX, Hugging Face, and full IDE auto-complete integration.</p>
    <span class="bento-action-text">Read Playbook →</span>
  </a>
  
  <a href="./local-ai/deepseek-guide.html" class="bento-card active-card">
    <div class="bento-badge">Active Playbook</div>
    <div class="bento-card-header">
      <span class="bento-icon">🧠</span>
      <h3>Deep Reasoning Models</h3>
    </div>
    <p>Scaling up to 14B/32B parameter architectures like DeepSeek-R1 for heavy logic and chain-of-thought debugging.</p>
    <span class="bento-action-text">Read Playbook →</span>
  </a>

  <div class="bento-card locked-card">
    <div class="bento-badge locked-badge">Coming Soon</div>
    <div class="bento-card-header">
      <span class="bento-icon">🚧</span>
      <h3>DevOps & Infrastructure</h3>
    </div>
    <p>Docker engine containerization, automated pipeline orchestration, and cloud architecture guides currently under construction.</p>
  </div>
  
</div>

<!-- Embedded Interactive Layout Styles Engine -->
<style>
/* Theme Engine Rules Mapping Variable Controls */
:root {
  --bento-bg: #ffffff !important;
  --bento-border: #d0d7de !important;
  --bento-text: #24292f !important;
  --bento-muted: #57606a !important;
  --bento-link: #0969da !important;
}

[data-user-theme="dark"] {
  --bento-bg: #161b22 !important;
  --bento-border: #30363d !important;
  --bento-text: #c9d1d9 !important;
  --bento-muted: #8b949e !important;
  --bento-link: #58a6ff !important;
}

/* Force Global Base Overrides into the Parent Containers */
[data-user-theme="dark"] body, 
[data-user-theme="dark"] .main, 
[data-user-theme="dark"] .side-bar, 
[data-user-theme="dark"] .main-header {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
}
[data-user-theme="dark"] .side-bar, [data-user-theme="dark"] .main-header {
  background-color: #161b22 !important;
  border-color: #30363d !important;
}
[data-user-theme="dark"] .site-title, [data-user-theme="dark"] .nav-list-link {
  color: #c9d1d9 !important;
}

.theme-controller-wrap {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.premium-toggle-btn {
  background: var(--bento-bg);
  border: 1px solid var(--bento-border);
  color: var(--bento-text);
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
}
.premium-toggle-btn:hover {
  border-color: var(--bento-link);
}

.bento-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
  width: 100%;
}
.bento-card {
  background: var(--bento-bg);
  border: 1px solid var(--bento-border);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  text-decoration: none !important;
  transition: all 0.25s ease;
}
.bento-card p {
  color: var(--bento-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 16px 0;
}
.bento-badge {
  align-self: flex-start;
  background: rgba(88,166,255,0.1);
  color: var(--bento-link);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 20px;
  margin-bottom: 16px;
}
.locked-badge {
  background: rgba(139,148,158,0.1);
  color: var(--bento-muted);
}
.bento-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.bento-card-header h3 {
  color: var(--bento-text);
  font-size: 1.25rem;
  margin: 0;
}
.bento-action-text {
  color: var(--bento-link);
  font-size: 0.9rem;
  font-weight: 500;
}
.bento-card.active-card:hover {
  transform: translateY(-4px);
  border-color: var(--bento-link);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.bento-card.locked-card {
  opacity: 0.6;
  cursor: not-allowed;
  border-style: dashed;
}
</style>

<!-- Theme Injection Trigger Script -->
<script>
  const toggleButton = document.getElementById('manual-theme-toggle');
  
  // Set initial preference context safely
  const applyStoredTheme = () => {
    const savedState = localStorage.getItem('user-preference-theme') || 'dark';
    document.documentElement.setAttribute('data-user-theme', savedState);
  };
  
  applyStoredTheme();

  toggleButton.addEventListener('click', () => {
    const activeState = document.documentElement.getAttribute('data-user-theme');
    const targetState = activeState === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-user-theme', targetState);
    localStorage.setItem('user-preference-theme', targetState);
  });
</script>
