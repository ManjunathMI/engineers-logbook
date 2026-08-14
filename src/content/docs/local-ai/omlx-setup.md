---
layout: default
title: oMLX & VS Code Integration
parent: Local AI Infrastructure
nav_order: 1
---

# The Complete Local AI Playbook: Running oMLX & Integrating with VS Code

If you are an active developer or student, you have likely hit a frustrating wall: **token exhaustion**. Whether you maxed out your GitHub Copilot limits, hit rate caps on commercial APIs, or want to avoid recurring monthly subscriptions for tools like Claude or OpenAI, running a local Large Language Model (LLM) is the ultimate developer superpower. 

By utilizing Apple Silicon's unified memory architecture via MLX and wiring it directly into your IDE using the Continue VS Code Extension, you can build, code, and chat with state-of-the-art models completely offline, privately, and for **$0/month in API costs**.

---

## 💡 Why Local LLMs Matter (The Problem & The Fix)
* **The Token Trap:** Cloud-based assistants enforce strict rate limits or costly pay-per-token tiers. When you run out of quota mid-project, your workflow grinds to a halt.
* **Privacy & Security:** Local execution means your proprietary code, database schemas, and configuration files never leave your machine's physical SSD or RAM.
* **The Budget Solution:** For educational purposes, personal scripting, and heavy refactoring, open-weights models offer near-frontier intelligence for free once you have the hardware to run them.

---

## 🛠️ Step 1: Laying a Clean Foundation on macOS
Avoid cluttering your system with conflicting Python installations. This setup uses Homebrew and Pipx to keep binaries and package managers fully isolated.

1. **Install Homebrew:**
   ```bash
   /bin/bash -c "\$(curl -fsSL https://githubusercontent.com)"
   ```
2. **Prioritize Path Order in `~/.zshrc`:**
   Ensure Homebrew takes precedence by placing this at the top of your shell configuration file:
   ```zsh
   export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:\$PATH"
   ```
3. **Install Clean Python and Pipx:**
   ```zsh
   brew install python pipx
   pipx ensurepath
   ```
4. **Install the Hugging Face CLI Safely:**
   ```zsh
   pipx install "huggingface_hub[cli]"
   ```

---

## 📥 Step 2: Downloading the Baseline Model via CLI
We store all local models inside a dedicated root-level path (`~/.omlx/models/`) to maximize disk efficiency without unnecessary duplicates. Download the Qwen 2.5 Coder model optimized for general coding assistance:

```zsh
hf download mlx-community/Qwen2.5-Coder-7B-Instruct-4bit --local-dir ~/.omlx/models/mlx-community/Qwen2.5-Coder-7B-Instruct-4bit
```

---

## 🖥️ Step 3: Launching oMLX & Interacting with the Web UI Dashboard
Once your models are safely sitting on your drive, you interact with your models and manage your environment using the native `omlx` ecosystem commands. Running the startup orchestrator kicks off a local background service:

```zsh
# Launch the oMLX server infrastructure
omlx start
```

### 📊 The Local Web UI
Once started, open your web browser and navigate to:
👉 **`http://127.0.0`**

Inside this dashboard, you can view your active locally downloaded models, monitor your unified memory utilization, check logs, and **copy the securely generated oMLX API Key** required to link your local server endpoint to external applications like VS Code.

### 🛑 Managing the Service
If you ever need to stop the background operations or close the open server threads to free up system memory, use the stop command:
```zsh
omlx stop
```

---

## 🔌 Step 4: Integrating with VS Code Using "Continue"
To turn your local model into an active coding copilot inside VS Code, install the open-source **Continue Extension** from the marketplace.

1. Open VS Code and install **Continue**.
2. Click the Continue icon on your sidebar, select settings, and open your **`~/.continue/config.yml`** file.
3. Update the parameters to target the local OpenAI-compatible API base exposed by the running `omlx` service, paste your copied dashboard token into the `apiKey` field, and assign roles for chat, inline editing, and autocomplete actions:

```yaml
name: Main Config
version: 1.0.0
schema: v1
models:
  - name: Llama 3.1 8B
    provider: ollama
    model: llama3.1:8b
    roles:
      - chat
      - edit
      - apply
  - name: oMLX Qwen2.5-Coder-7B
    provider: openai
    model: Qwen2.5-Coder-7B-Instruct-4bit
    apiBase: http://localhost:8000/v1  # Point directly to your active oMLX local server instance
    apiKey: <your_secret_copied_omlx_setup_api_key_here>
    roles:
      - chat
      - edit
      - autocomplete
  - name: Nomic Embed
    provider: ollama
    model: nomic-embed-text:latest
    roles:
      - embed
```

