import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  base: '/engineers-logbook/',
  site: 'https://manjunathmi.github.io',  
  integrations: [
    starlight({
      title: "Engineers Logbook",
      favicon: './src/assets/mi_logo_BG_Rmvd.png',
      logo: {
        alt: "The Engineer's Logbook Brand Logo",
        src: './src/assets/mi_logo_BG_Rmvd.png',
      },
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
          ],
        },
      ],
    }),
  ],
});