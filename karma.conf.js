/* eslint-disable node/no-unpublished-require */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine', '@angular-devkit/build-angular'],
		plugins: [
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma'),
		],
		client: {
			clearContext: true,
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, './coverage/angular-quickstart'),
			reports: ['html', 'lcovonly', 'text-summary'],
			fixWebpackSourcePaths: true,
		},
		customLaunchers: {
			CustomChromeHeadless: {
				base: 'Chrome',
				flags: [
					'--headless',
					'--disable-gpu',
					'--no-sandbox',
					'--remote-debugging-port=9222',
				],
			},
		},
		reporters: ['progress', 'kjhtml'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['CustomChromeHeadless'],
		singleRun: true,
		restartOnFileChange: false,
	});
};
