module.exports = {
	extends: ['stylelint-config-recommended'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
				],
			},
		],
		'declaration-block-trailing-semicolon': 'always',
	},
};
