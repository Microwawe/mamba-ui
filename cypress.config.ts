// eslint-disable-next-line node/no-unpublished-import
import {defineConfig} from 'cypress';

export default defineConfig({
	component: {
		devServer: {
			framework: 'angular',
			bundler: 'webpack',
		},
		specPattern: '**/*.cy.ts',
	},
});
