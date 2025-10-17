import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss()
	],
	preview: {
		port: 80,
		strictPort: true,
		host: '', 
		allowedHosts: true,
	},
	server: {
		allowedHosts: true,
	},
});	
