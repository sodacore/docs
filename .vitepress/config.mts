import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Docs',
	titleTemplate: 'Sodacore',
	lang: 'en-GB',
	description: 'Modern, lightweight, and extendable framework for Node.',
	head: [
		[ 'link', { rel: 'shortcut icon', type: 'image/jpg', href: '/logo.png' } ],
	],
	cleanUrls: true,
	appearance: 'dark',
	themeConfig: {
		logo: '/logo.png',

		// ------------ NAVBAR ------------
		nav: [
			{
				text: 'Docs',
				items: [
					{ text: 'Guide', link: '/docs/guide/index' },
					{ text: 'Examples', link: '/docs/examples/index' },
					{ text: 'API Reference', link: '/docs/api/index' },
				],
			},
			{
				text: 'Packages',
				items: [
					{ text: 'Framework', link: '/packages/framework/index' },
					{ text: 'HTTP', link: '/packages/http/index' },
					{ text: 'WebSocket', link: '/packages/ws/index' },
					{ text: 'Database', link: '/packages/database/index' },
				],
			},
			{
				text: 'About',
				items: [
					{ text: 'Introduction', link: '/about/introduction' },
					{ text: 'Releases', link: '/about/releases' },
					{ text: 'Team', link: '/about/team' },
					{ text: 'Community Guide', link: '/about/community' },
					{ text: 'Code of Conduct', link: '/about/code-of-conduct' },
					{ text: 'FAQ', link: '/about/faq' },
				],
			},
		],

		// ------------ SIDEBAR ------------
		sidebar: [
			{
				text: 'About',
				collapsed: true,
				items: [
					{ text: 'Introduction', link: '/about/introduction' },
					{ text: 'Releases', link: '/about/releases' },
					{ text: 'Team', link: '/about/team' },
					{ text: 'Community Guide', link: '/about/community' },
					{ text: 'Code of Conduct', link: '/about/code-of-conduct' },
					{ text: 'FAQ', link: '/about/faq' },
				],
			},
		],

		// ------------ SOCIAL ------------
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/sodacore' },
			{ icon: 'discord', link: 'https://discord.gg/CgumPyVr6X' },
		],

		footer: {
			message: 'Released under the Apache-2.0 License.',
			copyright: 'Copyright © 2023-present Symbux Development',
		},

		lastUpdated: {
			text: 'Updated at',
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'medium',
				timeZone: 'UTC',
			},
		},

		search: {
			provider: 'local',
		},
	},
})
