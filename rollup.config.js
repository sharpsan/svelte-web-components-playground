// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'iife'
	},
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true,
			}
		}),
		resolve(),
	]
}