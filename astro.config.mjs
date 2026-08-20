import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap'; 

export default defineConfig({
  // Crucial for GitHub Pages assets mapping
  base: '/engineers-logbook/',
  site: 'https://manjunathmi.github.io',  
  
  integrations: [
    starlight({
      // Optimized for personal name search indexing
      title: "The Engineer's Logbook",
      description: "Production-grade playbooks, local AI configurations, and software engineering metrics curated by Manjunath Islampure.",
      favicon: './src/assets/mi_logo_BG_Rmvd.png',
      logo: {
        alt: "The Engineer's Logbook Brand Logo",
        src: './src/assets/mi_logo_BG_Rmvd.png',
      },
      head: [
        {
          tag: 'script',
          content: `
            if (!localStorage.getItem('starlight-theme')) {
              localStorage.setItem('starlight-theme', 'dark');
            }
            document.documentElement.dataset.theme = localStorage.getItem('starlight-theme') || 'dark';
          `,
          attrs: { is: 'inline' }
        }
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/ManjunathMI/' },
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/manjunath-islampure/' },
        { label: '👤 About', icon: 'seti:makefile', href: 'https://manjunathmi.github.io/engineers-logbook/about/' },
      ],
      sidebar: [
        // ✅ About sits at top level, outside any group
        { label: '👤 About', link: '/about/' },
        {
          label: 'Local AI Playbooks',
          items: [
            { label: 'oMLX & VS Code Setup', link: '/local-ai/omlx-setup/' },
            { label: 'DeepSeek-R1 & Scaling', link: '/local-ai/deepseek-guide/' },
            { label: 'Hardware Optimization', link: '/local-ai/finetune-omlx/' },
          ],
        },
      ],
    }),
    sitemap(), // Generates sitemap-index.xml for Google Search Console discovery
  ],
});
