import {defineConfig} from 'vite';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				  @import "./src/styles/prism_light.scss";
				  @import "./src/styles/prism_dark.scss";
				`,
			},
		},
	},
});
