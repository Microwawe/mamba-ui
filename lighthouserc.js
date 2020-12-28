module.exports = {
	ci: {
		assert: {
			preset: 'lighthouse:recommended',
			assertions: {
				'categories:performance': ['warn', {minScore: 0.9}],
				'categories:accessibility': ['warn', {minScore: 0.9}],
				'categories:best-practices': ['warn', {minScore: 0.9}],
				'categories:seo': ['warn', {minScore: 0.9}],
				'categories:pwa': ['warn', {minScore: 0.9}],
			},
		},
		collect: {
			staticDistDir: './dist/mamba-ui',
		},
		upload: {
			target: 'filesystem',
		},
	},
};
