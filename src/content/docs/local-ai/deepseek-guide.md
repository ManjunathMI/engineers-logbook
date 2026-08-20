---
layout: default
title: How to Upgrade and Scale Local LLMs to DeepSeek-R1 14B on macOS 
description: "A step-by-step engineering guide by Manjunath Islampure on installing, scaling, and configuring DeepSeek-R1 14B reasoning models locally via Apple MLX and Continue."
parent: Local AI Infrastructure
nav_order: 2
---

*By **Manjunath Islampure** • Verified Production Playbook*

Once your local AI infrastructure is built using oMLX, you are no longer constrained by the capabilities of a single small model. When a cutting-edge reasoning model drops, you can instantly scale up your machine's capabilities without waiting for corporate API access.

This guide outlines how to download and switch to the **DeepSeek R1 Distill Qwen 14B** reasoning model, and how to safely update your configuration files when moving to higher parameter versions.

---

## 🧠 Why DeepSeek-R1 Distilled?
Unlike standard instruction models that provide immediate text outputs, DeepSeek-R1 introduces an advanced **Chain-of-Thought (CoT)** reasoning loop. It prints its hidden thinking process directly in your terminal/IDE, showing you how it analyzes edge cases, troubleshoots logic flaws, and builds architecture plans before outputting code. 

---

## 📥 Step 1: How to Download DeepSeek-R1 14B from Hugging Face via CLI
Because your Hugging Face and environment paths are globally configured via Pipx and Homebrew, you can pull down a larger 14-Billion parameter quantized model with a single command:

```zsh
hf download mlx-community/DeepSeek-R1-Distill-Qwen-14B-4bit --local-dir ~/.omlx/models/mlx-community/DeepSeek-R1-Distill-Qwen-14B-4bit
```

---

## ⚙️ Step 2: Dynamically Scaling Your Configuration File
When upgrading to a larger or newer revision variant (like upgrading from 7B to 14B or a heavy-hitting 32B model), you do not need to rewrite your environment settings. 

Simply append the new model layout as an independent block under your existing active options inside your **`~/.continue/config.yml`** file:

```yaml
  - name: oMLX DeepSeek-R1-14B
    provider: openai
    model: DeepSeek-R1-Distill-Qwen-14B-4bit
    apiBase: http://localhost:8000/v1
    apiKey: <your_secret_copied_omlx_setup_api_key_here>
    roles:
      - chat
      - edit
```
Once saved, the option to swap between the Qwen code completion model and the DeepSeek deep reasoning engine appears instantly in your VS Code sidebar selector.

---
### Apple Silicon Memory Requirements for Local DeepSeek-R1

| Model Variant | Minimum Unified Memory (RAM) | Recommended Apple Mac Hardware |
| :--- | :--- | :--- |
| **DeepSeek-R1 Distill 7B** | 8 GB - 16 GB | Base M1 / M2 / M3 / M4 MacBook |
| **DeepSeek-R1 Distill 14B** | 16 GB - 24 GB | M-Series Pro Chips (MacBook Pro) |
| **DeepSeek-R1 Distill 32B** | 32 GB+ | M-Series Max / Ultra (Studio/Pro) |

---

## 🌟 Top High-Tier Models to Explore Next
If your Mac has adequate Unified Memory (16GB+ for 7B/14B models, 32GB+ for 32B models), here are the top-performing open-weights models to add to your logbook next:

* **[Qwen2.5-Coder-32B-Instruct-4bit](https://huggingface.co):** The ultimate heavy-hitter for local code generation, matching commercial proprietary models on complex code engineering.
* **[Llama-3.1-8B-Instruct-4bit](https://huggingface.co):** Exceptional general-purpose conversational logic and structured output control.
* **[DeepSeek-R1-Distill-Qwen-32B-4bit](https://huggingface.co):** The absolute gold standard for offline chain-of-thought engineering problems and deep debugging without hitting token limits.

