---
title: "Technical SEO Best Practices: Designing Sites that Search Bots Love"
description: "A practical engineering reference guide by Manjunath Islampure outlining core configurations, meta tags, and indexing rules for high-performance documentation sites."
---

*By **Manjunath Islampure** • Software Delivery Head & AI Explorer*

You can write the most brilliant technical guide in the world, but if search engine crawlers get lost trying to read your website's directory structure, nobody will ever find it. Technical SEO isn’t a marketing gimmick—it’s just good systems engineering applied to web discovery.

Because frameworks like Astro and Starlight compile your code into blazing-fast, static HTML with zero bloated JavaScript out of the box, you already start with a massive speed advantage. Here is the exact checklist I use to make sure search bots index my pages flawlessly.

---

## 📋 The Technical Cleanliness Checklist

| Core Component | Implementation Rule | Why It Actually Matters |
| :--- | :--- | :--- |
| **Canonical Tags** | Force a single URL format | Stops Google from penalizing you for "duplicate content" if a user visits via a slash variation |
| **Sitemap Indexes** | Automate XML builds on compile | Hand-delivers an active roadmap of all your hidden articles straight to Googlebot |
| **Meta Descriptions** | Keep them between 120-155 characters | Ensures your search card summary looks clean and doesn't get cut off with a messy "..." |
| **Robots.txt** | Explicitly link your sitemap | Directs incoming web spiders exactly where to crawl the second they discover your domain |

---

## ⚙️ 1. The Power of Schema Markup (JSON-LD)
Think of Schema markup as an internal API contract between your website's HTML head and Google's core parsing index. It explicitly tells the bot what your page represents rather than making it guess. For technical blogs, injecting a `TechArticle` block into your page component header makes an enormous difference:

```json
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "How to Run DeepSeek-R1 Locally on macOS",
  "author": {
    "@type": "Person",
    "name": "Manjunath Islampure"
  }
}
```

---

## 🏎️ 2. Maintaining Clean Semantic HTML
Google rewards websites that are fast and highly structured. When writing your markdown files, stay disciplined with your styling:
* Always follow a logical heading hierarchy (`# H1` -> `## H2` -> `### H3`). Never skip straight to a `### H3` just because you like the font size better—it breaks the crawl layout tree for automated readers.
* Always supply descriptive `alt` text for images or logos. Bots can't "see" your images, so your alt text is their only way of understanding your visual context.
