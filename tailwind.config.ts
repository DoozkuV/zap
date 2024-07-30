import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#F1720D',
					secondary: '#f3f4f6',
					accent: '#EF4444',
					neutral: '#f0ede0',
					'base-100': '#f5f5f5',
					info: '#c5e7e8',
					success: '#d4ebdb',
					warning: '#f9c7a4',
					error: '#ffc1ce'
				},
			},
		],
	},

	theme: {
		extend: {}
	},

	plugins: [daisyui]
} as Config;
