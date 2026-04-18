// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://research.uw-i2.org',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			components: {
				Hero: './src/components/Hero.astro',
			},
			title: 'I2 Research Guide',
			logo: {
				src: './src/assets/i2logo.png',
				alt: 'Interactive Intelligence',
			},
			customCss: ['./src/styles/custom.css', 'katex/dist/katex.min.css'],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/how-to-use' },
						{ slug: 'getting-started/research-tips' },
					],
				},
				{
					label: 'AI Research',
					autogenerate: { directory: 'ai' },
				},
				{
					label: 'Machine Learning',
					autogenerate: { directory: 'ml' },
				},
				{
					label: 'Neuroscience',
					autogenerate: { directory: 'neuroscience' },
				},
			],
		}),
	],
});
