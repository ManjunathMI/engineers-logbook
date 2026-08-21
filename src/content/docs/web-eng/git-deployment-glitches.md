---
title: "Git & Deployment Glitches: Real-World Fixes for Static Sites"
description: "A troubleshooting playbook by Manjunath Islampure documenting workarounds for common Git cache bugs, branch desyncs, and GitHub Actions build errors."
---

*By **Manjunath Islampure** • Software Delivery Head & AI Explorer*

Automating your documentation pipeline with GitHub Actions is incredibly satisfying—until a build thread drops, a permission key breaks, or a deployment desynchronizes mid-push. 

Over nearly 16 years of managing enterprise software deliveries, I’ve learned that the trickiest bugs are rarely in the code itself; they usually live in the environment infrastructure or the deployment pipeline. This troubleshooting guide lists the exact real-world Git and CI/CD roadblocks I encountered while launching this site, along with the fast command line fixes to get you back on track.

---

## 🛑 Glitch 1: The Case-Insensitive Git Cache (Updates Missing Live)
* **The Problem:** You changed a filename’s capitalization locally (e.g., swapping `DeepSeek-Guide.md` to `deepseek-setup.md`) or made a minor config tweak, committed the patch, and pushed it. The GitHub Actions job turns completely green, but the old link or layout is still showing up on the live site.
* **The Root Cause:** By default, Git can be incredibly stubborn about tracking subtle file case adjustments on macOS, causing it to push stale references to your remote repository.
* **The Fix:** Force Git to completely drop its old index cache and restage your workspace from scratch using your terminal:
  ```zsh
  # Clear the tracking index cleanly
  git rm -r --cached .
  
  # Re-stage everything fresh and push
  git add .
  git commit -m "fix: clear tracking index cache to resolve naming mismatch"
  git push origin master
  ```

---

## 🛑 Glitch 2: GitHub Actions Fails on the Permissions Layer
* **The Problem:** Your build runner kicks off perfectly, compiles your Astro code successfully, but suddenly crashes during the upload stage with a generic `403 Forbidden` error or a security write failure.
* **The Root Cause:** GitHub’s security architecture requires explicit write token scopes declared right inside your workflow YAML file to safely hand off static bundles to GitHub Pages.
* **The Fix:** Open your `.github/workflows/deploy.yml` file and ensure this specific block sits right above your active `jobs` tree configuration:
  ```yaml
  permissions:
    contents: read
    pages: write
    id-token: write
  ```

---

## 🛑 Glitch 3: The Ghost Branch Divergence Mismatch
* **The Problem:** You push your source code to your `master` branch, but your GitHub Pages dashboard settings are hunting for a traditional `gh-pages` branch, leaving your production site out of sync.
* **The Root Cause:** Legacy deployment paradigms required forcing compiled assets into a secondary branch, causing developers to maintain two parallel lines of code history.
* **The Fix:** Skip the branch mess completely. Head to your **GitHub Repository Settings -> Pages**. Under the **Build and deployment** section, look for the Source dropdown and change it from "Deploy from a branch" to **"GitHub Actions"**. This tells GitHub to read your `.yml` deployment script directly, making secondary branches obsolete.
