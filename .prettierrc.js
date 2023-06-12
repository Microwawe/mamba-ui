module.exports = {
	...require('gts/.prettierrc.json'),
	'arrowParens': 'avoid',
	'useTabs': true,
	'tabWidth': 4,
	'quoteProps': 'preserve',
	'endOfLine': 'lf',
	'printWidth': 100,
	'htmlWhitespaceSensitivity': 'ignore',
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
