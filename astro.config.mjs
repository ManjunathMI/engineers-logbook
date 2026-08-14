import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  base: '/engineers-logbook/', // Maps cleanly to your public live GitHub Pages path
  site: 'https://github.io',
  integrations: [
    starlight({
      title: "Engineers Logbook", // Custom top-header signature
     // 🎨 CUSTOM LOGO INTEGRATION BLOCK
      // Points your browser tab icon straight to your custom image asset file
      favicon: './src/assets/mi_logo_BG_Rmvd.png',
      logo: {
        alt: "The Engineer's Logbook Brand Logo",
        src: './src/assets/mi_logo_BG_Rmvd.png', // Points directly to your image asset file
      },
      // 🔌 OVERRIDE COMPONENT LAYOUT CORE
      components: {
        Footer: './src/components/Footer.astro', // Swaps the footer on every page
      },
	  social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/ManjunathMI/' },
        { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/manjunath-islampure/' }
      ],
      sidebar: [
        {
          label: 'Local AI Playbooks',
          items: [
            { label: 'oMLX & VS Code Setup', link: '/local-ai/omlx-setup/' },
            { label: 'DeepSeek-R1 & Scaling', link: '/local-ai/deepseek-guide/' },
          ],
        },
      ],
    }),
  ],
});