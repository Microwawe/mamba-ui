module.exports = {
	...require('gts/.prettierrc.json'),
	'useTabs': true,
	'tabWidth': 4,
	'quoteProps': 'preserve',
	'printWidth': 100,
	'overrides': [
		{
			'files': '*.yml',
			'options': {
				'tabWidth': 2,
				'useTabs': false,
			},
		},
	],
};
