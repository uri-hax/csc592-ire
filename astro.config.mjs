import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://hax-lab.github.io',
  	base: '/csc592-web',
	integrations: [
		starlight({
			title: 'CSC592-IRE',
			sidebar: [
				{
					label: 'Milestones',
					autogenerate: { directory: 'milestones' },
				},
				{
					label: 'Syllabus',
					autogenerate: { directory: 'syllabus' },
				},
				{
					label: 'Resources',
					items: [
						{ label: 'GitHub', link: 'https://github.com/orgs/csc505-f25/discussions' },
						{ label: 'Gradescope', link: 'https://www.gradescope.com/' },
					],
				}
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
		}),
	],
});
