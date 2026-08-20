---
title: "Local AI on macOS: The Complete oMLX & VS Code Setup Guide"
description: "A production-grade playbook by Manjunath Islampure on installing oMLX, managing Apple Silicon memory, and integrating local LLMs with VS Code."
nav_order: 1
---

*By **Manjunath Islampure** • Verified Production Guide*

If you are an active developer or student, you have likely hit a frustrating wall: **token exhaustion**. Whether you maxed out your GitHub Copilot limits, hit rate caps on commercial APIs, or want to avoid recurring monthly subscriptions for tools like Claude or OpenAI, running a local Large Language Model (LLM) is the ultimate developer superpower. 

By utilizing Apple Silicon's unified memory architecture via **oMLX** and wiring it directly into your IDE using the Continue VS Code Extension, you can build, code, and chat with state-of-the-art models completely offline, privately, and for **$0/month in API costs**.

---

## 💡 Why Local LLMs Matter (The Problem & The Fix)
* **The Token Trap:** Cloud-based assistants enforce strict rate limits or costly pay-per-token tiers. When you run out of quota mid-project, your workflow grinds to a halt.
* **Privacy & Security:** Local execution means your proprietary code, database schemas, and configuration files never leave your machine's physical SSD or RAM.
* **The Budget Solution:** For educational purposes, personal scripting, and heavy refactoring, open-weights models offer near-frontier intelligence for free once you have the hardware to run them.

---

## 🛠️ Step 1: Laying a Clean Foundation on macOS
Avoid cluttering your system with conflicting Python installations. This setup uses Homebrew and Pipx to keep binaries and package managers fully isolated.

1. **Install Homebrew** (if not already installed):
   ```zsh
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

5. **Install the Native oMLX Server Binaries:**
   Unlike standard Python scripts, oMLX requires adding its dedicated tap to run efficiently as a background service on macOS.
   ```zsh
   brew tap jundot/omlx
   brew install jundot/omlx/omlx
   ```

---

## 📥 Step 2: Downloading the Baseline Model via CLI
We store all local models inside a dedicated root-level path (`~/.omlx/models/`) to maximize disk efficiency without unnecessary duplicates. Download the Qwen 2.5 Coder model optimized for general coding assistance:

```zsh
hf download mlx-community/Qwen2.5-Coder-7B-Instruct-4bit --local-dir ~/.omlx/models/mlx-community/Qwen2.5-Coder-7B-Instruct-4bit
```

### 🧠 Hardware RAM Recommendations
Google often highlights structured tables for hardware compatibility queries. Use this baseline reference to pick your model footprints:

| Your Mac RAM | Recommended Model Size | Best Use Case |
| :--- | :--- | :--- |
| **8 GB - 16 GB** | 7B Quantized (4-bit) | General scripting, bug explanations |
| **16 GB - 32 GB** | 14B Quantized (4-bit) | Complex refactoring, architectural planning |
| **32 GB+** | 32B Quantized (4-bit) | Production-grade reasoning, large context |

---

## 🖥️ Step 3: Launching oMLX & Interacting with the Web UI Dashboard
Once your models are safely sitting on your drive, you interact with them and manage your environment using the native `omlx` ecosystem commands. Running the startup orchestrator kicks off a local background service:

```zsh
# Launch the oMLX server infrastructure
omlx start
```

### 📊 The Local Web UI
Once started, open your web browser and navigate to:
👉 **`http://127.0.0.1:8000/admin/dashboard`**

Inside this dashboard, you can view your active locally downloaded models, monitor your unified memory utilization, check real-time logs, and **copy the securely generated oMLX API Key** required to link your local server endpoint to external applications like VS Code.

### ⚡ Pro-Tip: Widen the Context Window for Coding Tasks
Because coding workflows consume massive tokens during repository mapping, the default context limit is often insufficient. After booting into the dashboard, navigate to **Settings**, scroll to **Generation Parameters**, and adjust the **Maximum Context Window** to **`32768`** or **`65536`** tokens based on your Mac's available RAM. Click Save and restart your server thread to apply the change.

### 🚀 Why oMLX Destroys Ollama for Local Coding Agents
Unlike standard local layers, oMLX implements an advanced **Paged SSD KV Cache architecture**. When you run long, multi-file prompts inside VS Code, oMLX commits previously generated token prefixes to your SSD in safetensors formatting rather than dropping them from memory. When your coding extension circles back to reference that same file context, it restores in milliseconds without triggering recomputation lags or high RAM overhead.

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
3. Update your file to merge your existing setups with the local OpenAI-compatible API base exposed by the running `omlx` service. Paste your copied dashboard token into the `apiKey` field, and assign roles for chat, inline editing, and autocomplete actions:

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

### Why use `provider: openai` for oMLX?
Even though you are running entirely locally offline, oMLX exposes a server API layer that **perfectly mimics OpenAI's data schemas**. This design is highly beneficial because it guarantees drop-in compatibility with almost any modern development environment (Cursor, VS Code, Zed) that natively supports custom OpenAI endpoints.

---

## 🐚 Step 5: Automating Server Management with Zsh Aliases
Instead of running long background orchestrations manually every time you reboot your Mac, append these clean shortcuts to the bottom of your `~/.zshrc` file to manage your local service smoothly:

```zsh
# oMLX Quick Automation Controls
alias ai-up="omlx start && open http://127.0.0"
alias ai-down="omlx stop"
alias ai-status="brew services info omlx"
```
Run `source ~/.zshrc` to activate these shortcuts instantly inside your terminal.
