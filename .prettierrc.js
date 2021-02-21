module.exports = {
	...require('gts/.prettierrc.json'),
	'arrowParens': 'avoid',
	'useTabs': true,
	'tabWidth': 4,
	'quoteProps': 'preserve',
	'printWidth': 100,
	'overrides': [
		{
			'files': ['*.yml', '*.md'],
			'options': {
				'tabWidth': 2,
				'useTabs': false,
			},
		},
	],
};
