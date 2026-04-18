// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
			customCss: ['./src/styles/custom.css'],
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
