let ethicalads = null;

if (typeof document !== 'undefined') {
	ethicalads = (function (e) {
		var t = {};
		function a(o) {
			if (t[o]) return t[o].exports;
			var n = (t[o] = {i: o, l: !1, exports: {}});
			return e[o].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
		}
		return (
			(a.m = e),
			(a.c = t),
			(a.d = function (e, t, o) {
				a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o});
			}),
			(a.r = function (e) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
					Object.defineProperty(e, '__esModule', {value: !0});
			}),
			(a.t = function (e, t) {
				if ((1 & t && (e = a(e)), 8 & t)) return e;
				if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
				var o = Object.create(null);
				if (
					(a.r(o),
					Object.defineProperty(o, 'default', {enumerable: !0, value: e}),
					2 & t && 'string' != typeof e)
				)
					for (var n in e)
						a.d(
							o,
							n,
							function (t) {
								return e[t];
							}.bind(null, n)
						);
				return o;
			}),
			(a.n = function (e) {
				var t =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return a.d(t, 'a', t), t;
			}),
			(a.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}),
			(a.p = ''),
			a((a.s = 1))
		);
	})([
		function (e, t, a) {
			var o, n;
			(o = this),
				(n = function () {
					var e = {},
						t = 'undefined' != typeof window && window,
						a = 'undefined' != typeof document && document,
						o = a && a.documentElement,
						n = t.matchMedia || t.msMatchMedia,
						r = n
							? function (e) {
									return !!n.call(t, e).matches;
							  }
							: function () {
									return !1;
							  },
						i = (e.viewportW = function () {
							var e = o.clientWidth,
								a = t.innerWidth;
							return e < a ? a : e;
						}),
						d = (e.viewportH = function () {
							var e = o.clientHeight,
								a = t.innerHeight;
							return e < a ? a : e;
						});
					function l() {
						return {width: i(), height: d()};
					}
					function c(e, t) {
						return (
							!(!(e = e && !e.nodeType ? e[0] : e) || 1 !== e.nodeType) &&
							(function (e, t) {
								var a = {};
								return (
									(t = +t || 0),
									(a.width = (a.right = e.right + t) - (a.left = e.left - t)),
									(a.height = (a.bottom = e.bottom + t) - (a.top = e.top - t)),
									a
								);
							})(e.getBoundingClientRect(), t)
						);
					}
					return (
						(e.mq = r),
						(e.matchMedia = n
							? function () {
									return n.apply(t, arguments);
							  }
							: function () {
									return {};
							  }),
						(e.viewport = l),
						(e.scrollX = function () {
							return t.pageXOffset || o.scrollLeft;
						}),
						(e.scrollY = function () {
							return t.pageYOffset || o.scrollTop;
						}),
						(e.rectangle = c),
						(e.aspect = function (e) {
							var t = (e = null == e ? l() : 1 === e.nodeType ? c(e) : e).height,
								a = e.width;
							return (
								(t = 'function' == typeof t ? t.call(e) : t),
								(a = 'function' == typeof a ? a.call(e) : a) / t
							);
						}),
						(e.inX = function (e, t) {
							var a = c(e, t);
							return !!a && a.right >= 0 && a.left <= i();
						}),
						(e.inY = function (e, t) {
							var a = c(e, t);
							return !!a && a.bottom >= 0 && a.top <= d();
						}),
						(e.inViewport = function (e, t) {
							var a = c(e, t);
							return (
								!!a &&
								a.bottom >= 0 &&
								a.right >= 0 &&
								a.top <= d() &&
								a.left <= i()
							);
						}),
						e
					);
				}),
				e.exports ? (e.exports = n()) : (o.verge = n());
		},
		function (e, t, a) {
			'use strict';
			a.r(t),
				function (e) {
					a.d(t, 'Placement', function () {
						return m;
					}),
						a.d(t, 'check_dependencies', function () {
							return b;
						}),
						a.d(t, 'load_placements', function () {
							return v;
						}),
						a.d(t, 'unload_placements', function () {
							return g;
						}),
						a.d(t, 'wait', function () {
							return x;
						}),
						a.d(t, 'load', function () {
							return w;
						}),
						a.d(t, 'reload', function () {
							return k;
						}),
						a.d(t, 'uplifted', function () {
							return _;
						}),
						a.d(t, 'detectedKeywords', function () {
							return S;
						});
					var o = a(0),
						n = a.n(o);
					a(3);
					function r(e) {
						return (r =
							'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
								? function (e) {
										return typeof e;
								  }
								: function (e) {
										return e &&
											'function' == typeof Symbol &&
											e.constructor === Symbol &&
											e !== Symbol.prototype
											? 'symbol'
											: typeof e;
								  })(e);
					}
					function i(e, t) {
						if (t && ('object' === r(t) || 'function' == typeof t)) return t;
						if (void 0 !== t)
							throw new TypeError(
								'Derived constructors may only return object or undefined'
							);
						return (function (e) {
							if (void 0 === e)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called"
								);
							return e;
						})(e);
					}
					function d(e) {
						var t = 'function' == typeof Map ? new Map() : void 0;
						return (d = function (e) {
							if (
								null === e ||
								((a = e), -1 === Function.toString.call(a).indexOf('[native code]'))
							)
								return e;
							var a;
							if ('function' != typeof e)
								throw new TypeError(
									'Super expression must either be null or a function'
								);
							if (void 0 !== t) {
								if (t.has(e)) return t.get(e);
								t.set(e, o);
							}
							function o() {
								return l(e, arguments, u(this).constructor);
							}
							return (
								(o.prototype = Object.create(e.prototype, {
									constructor: {
										value: o,
										enumerable: !1,
										writable: !0,
										configurable: !0,
									},
								})),
								s(o, e)
							);
						})(e);
					}
					function l(e, t, a) {
						return (l = c()
							? Reflect.construct.bind()
							: function (e, t, a) {
									var o = [null];
									o.push.apply(o, t);
									var n = new (Function.bind.apply(e, o))();
									return a && s(n, a.prototype), n;
							  }).apply(null, arguments);
					}
					function c() {
						if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ('function' == typeof Proxy) return !0;
						try {
							return (
								Boolean.prototype.valueOf.call(
									Reflect.construct(Boolean, [], function () {})
								),
								!0
							);
						} catch (e) {
							return !1;
						}
					}
					function s(e, t) {
						return (s = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function (e, t) {
									return (e.__proto__ = t), e;
							  })(e, t);
					}
					function u(e) {
						return (u = Object.setPrototypeOf
							? Object.getPrototypeOf.bind()
							: function (e) {
									return e.__proto__ || Object.getPrototypeOf(e);
							  })(e);
					}
					function p(e, t) {
						if (!(e instanceof t))
							throw new TypeError('Cannot call a class as a function');
					}
					function f(e, t) {
						for (var a = 0; a < t.length; a++) {
							var o = t[a];
							(o.enumerable = o.enumerable || !1),
								(o.configurable = !0),
								'value' in o && (o.writable = !0),
								Object.defineProperty(
									e,
									((n = o.key),
									(i = void 0),
									(i = (function (e, t) {
										if ('object' !== r(e) || null === e) return e;
										var a = e[Symbol.toPrimitive];
										if (void 0 !== a) {
											var o = a.call(e, t || 'default');
											if ('object' !== r(o)) return o;
											throw new TypeError(
												'@@toPrimitive must return a primitive value.'
											);
										}
										return ('string' === t ? String : Number)(e);
									})(n, 'string')),
									'symbol' === r(i) ? i : String(i)),
									o
								);
						}
						var n, i;
					}
					function h(e, t, a) {
						return (
							t && f(e.prototype, t),
							a && f(e, a),
							Object.defineProperty(e, 'prototype', {writable: !1}),
							e
						);
					}
					var y = {
							android: 'android',
							ios: 'ios',
							iphone: 'ios',
							blockchain: 'blockchain',
							bitcoin: 'bitcoin',
							ethereum: 'ethereum',
							hyperledger: 'hyperledger',
							solidity: 'solidity',
							cryptography: 'cryptography',
							security: 'security',
							infosec: 'security',
							privacy: 'privacy',
							authentication: 'authentication',
							authorization: 'authorization',
							otp: 'otp',
							'2fa': '2fa',
							mfa: 'mfa',
							sms: 'sms',
							frontend: 'frontend',
							backend: 'backend',
							'full-stack': 'backend',
							devops: 'devops',
							ai: 'artificial-intelligence',
							nlp: 'nlp',
							ml: 'machine-learning',
							cloud: 'cloud',
							api: 'api',
							docker: 'docker',
							kubernetes: 'kubernetes',
							container: 'containers',
							containers: 'containers',
							ansible: 'ansible',
							serverless: 'serverless',
							openshift: 'openshift',
							terraform: 'terraform',
							openid: 'openid',
							aws: 'aws',
							azure: 'azure',
							gcp: 'gcp',
							linux: 'linux',
							ubuntu: 'ubuntu',
							monitoring: 'monitoring',
							redis: 'redis',
							rabbitmq: 'rabbitmq',
							nosql: 'nosql',
							postgres: 'postgresql',
							postgresql: 'postgresql',
							mysql: 'mysql',
							database: 'database',
							testing: 'testing',
							pytest: 'pytest',
							lint: 'lint',
							linting: 'lint',
							pylint: 'pylint',
							unittest: 'unittest',
							ci: 'ci',
							cd: 'cd',
							tdd: 'test-driven-development',
							elasticsearch: 'elasticsearch',
							lucene: 'lucene',
							solr: 'solr',
							nginx: 'nginx',
							heroku: 'heroku',
							spa: 'spa',
							django: 'django',
							rails: 'rails',
							angular: 'angular',
							angularjs: 'angular',
							laravel: 'laravel',
							react: 'reactjs',
							reactjs: 'reactjs',
							'react-native': 'reactjs',
							jupyter: 'jupyter',
							matplotlib: 'matplotlib',
							pytorch: 'pytorch',
							pydata: 'pydata',
							pandas: 'pandas',
							numpy: 'numpy',
							wsgi: 'wsgi',
							celery: 'celery',
							jinja: 'jinja',
							jinja2: 'jinja',
							flask: 'flask',
							werkzeug: 'werkzeug',
							oauth: 'oauth',
							vuejs: 'vuejs',
							vue: 'vuejs',
							tensorflow: 'tensorflow',
							tensor: 'tensor',
							webpack: 'webpack',
							dotnet: 'dotnet',
							'.net': 'dotnet',
							'c#': 'c-sharp',
							'c++': 'cplusplus',
							erlang: 'erlang',
							'f#': 'fsharp',
							golang: 'golang',
							haskell: 'haskell',
							java: 'java',
							javascript: 'javascript',
							julia: 'julia',
							kotlin: 'kotlin',
							'obj-c': 'obj-c',
							'objective-c': 'obj-c',
							php: 'php',
							python: 'python',
							perl: 'perl',
							sql: 'sql',
							ruby: 'ruby',
							rust: 'rust',
							scala: 'scala',
							swift: 'swift',
							css: 'css',
							scss: 'scss',
							typescript: 'typescript',
							redux: 'redux',
						},
						m = (function () {
							function e(t, a, o, n) {
								p(this, e),
									(this.publisher = t),
									(this.ad_type = a),
									(this.target = o),
									(this.options = n),
									(this.style = n.style),
									(this.keywords = n.keywords || []),
									(this.load_manually = n.load_manually),
									(this.force_ad = n.force_ad),
									(this.force_campaign = n.force_campaign),
									(this.campaign_types = n.campaign_types || []),
									this.campaign_types.length ||
										(this.campaign_types = [
											'paid',
											'publisher-house',
											'community',
											'house',
										]),
									(this.view_time = 0),
									(this.view_time_sent = !1),
									(this.response = null);
							}
							return (
								h(
									e,
									[
										{
											key: 'load',
											value: function () {
												var e = this;
												return (
													(this.keywords = this.keywords.concat(
														this.detectKeywords()
													)),
													this.fetch()
														.then(function (t) {
															if (void 0 === t)
																throw new j(
																	'Ad decision request blocked'
																);
															if (!t) throw new j('No ads to show.');
															var a = e.target.className || '';
															for (
																a += ' loaded',
																	e.target.className = a.trim();
																e.target.firstChild;

															)
																e.target.removeChild(
																	e.target.firstChild
																);
															return (
																e.applyStyles(t),
																e.target.appendChild(t),
																e
															);
														})
														.then(function (e) {
															var t = setInterval(
																	function (a) {
																		if (e.inViewport(a)) {
																			var o =
																				document.createElement(
																					'img'
																				);
																			(o.src =
																				e.response.view_url),
																				_ &&
																					(o.src +=
																						'?uplift=true'),
																				(o.className =
																					'ea-pixel'),
																				a.appendChild(o),
																				clearInterval(t);
																		}
																	},
																	100,
																	e.target
																),
																a = setInterval(
																	function (t) {
																		e.view_time_sent
																			? clearInterval(a)
																			: e.inViewport(t) &&
																			  ((e.view_time += 1),
																			  e.view_time >= 300 &&
																					clearInterval(
																						a
																					));
																	},
																	1e3,
																	e.target
																);
															document.addEventListener(
																'visibilitychange',
																function t() {
																	if (
																		!(
																			e.view_time <= 0 ||
																			e.view_time_sent
																		) &&
																		e.response.view_time_url &&
																		('hidden' ===
																			document.visibilityState ||
																			'unloaded' ===
																				document.visibilityState)
																	) {
																		var a =
																			document.createElement(
																				'img'
																			);
																		(a.src =
																			e.response
																				.view_time_url +
																			'?view_time=' +
																			e.view_time),
																			(a.className =
																				'ea-pixel'),
																			e.target.appendChild(a),
																			(e.view_time_sent = !0),
																			document.removeEventListener(
																				'visibilitychange',
																				t
																			);
																	}
																}
															);
														})
												);
											},
										},
										{
											key: 'inViewport',
											value: function (e) {
												return !!(
													this.response &&
													this.response.view_url &&
													n.a.inViewport(e, -3) &&
													'visible' === document.visibilityState
												);
											},
										},
										{
											key: 'fetch',
											value: function () {
												var e = this,
													t =
														'ad_' +
														Date.now() +
														'_' +
														Math.floor(1e6 * Math.random()),
													a = t;
												this.target.id && (a = this.target.id);
												var o = {
													publisher: this.publisher,
													ad_types: this.ad_type,
													div_ids: a,
													callback: t,
													keywords: this.keywords.join('|'),
													campaign_types: this.campaign_types.join('|'),
													format: 'jsonp',
													client_version: '1.7.0',
													url: (
														window.location.origin +
														window.location.pathname
													).slice(0, 256),
												};
												this.force_ad && (o.force_ad = this.force_ad),
													this.force_campaign &&
														(o.force_campaign = this.force_campaign);
												var n = new URLSearchParams(o),
													r = new URL(
														'https://server.ethicalads.io/api/v1/decision/?' +
															n.toString()
													);
												return new Promise(function (a, o) {
													window[t] = function (t) {
														if (t && t.html && t.view_url) {
															e.response = t;
															var o = document.createElement('div');
															return (
																(o.innerHTML = t.html),
																a(o.firstChild)
															);
														}
														return a(null);
													};
													var n = document.createElement('script');
													(n.src = r),
														(n.type = 'text/javascript'),
														(n.async = !0),
														n.addEventListener('error', function (e) {
															return a();
														}),
														document
															.getElementsByTagName('head')[0]
															.appendChild(n);
												});
											},
										},
										{
											key: 'detectABP',
											value: function (e, t) {
												var a = !1,
													o = 2,
													n = !1,
													r = !1;
												if ('function' == typeof t) {
													e += '?ch=*&rn=*';
													var i = 11 * Math.random(),
														d = new Image();
													(d.onload = c),
														(d.onerror = function () {
															(n = !0), c();
														}),
														(d.src = e
															.replace(/\*/, 1)
															.replace(/\*/, i));
													var l = new Image();
													(l.onload = c),
														(l.onerror = function () {
															(r = !0), c();
														}),
														(l.src = e
															.replace(/\*/, 2)
															.replace(/\*/, i)),
														(function e(t, n) {
															0 == o || n > 1e3
																? t(0 == o && a)
																: setTimeout(function () {
																		e(t, 2 * n);
																  }, 2 * n);
														})(t, 250);
												}
												function c() {
													--o || (a = !n && r);
												}
											},
										},
										{
											key: 'detectKeywords',
											value: function () {
												if (S) return S;
												for (
													var e = {},
														t = (
															document.querySelector(
																"[role='main']"
															) ||
															document.querySelector('main') ||
															document.querySelector('body')
														).textContent.split(/\s+/),
														a = /^[\('"]?(.*?)[,\.\?\!:;\)'"]?$/g,
														o = 0;
													o < t.length && o < 9999;
													o++
												) {
													var n = t[o].replace(a, '$1').toLowerCase();
													y.hasOwnProperty(n) &&
														(e[y[n]] = (e[y[n]] || 0) + 1);
												}
												var r = Object.entries(e)
													.filter(function (e) {
														return e[1] >= 2;
													})
													.sort(function (e, t) {
														return e[1] > t[1]
															? -1
															: e[1] < t[1]
															? 1
															: 0;
													})
													.slice(0, 3)
													.map(function (e) {
														return e[0];
													});
												return (S = r), r;
											},
										},
										{
											key: 'applyStyles',
											value: function (e) {
												if ('stickybox' === this.style) {
													var t = document.createElement('div');
													t.setAttribute('class', 'ea-stickybox-hide'),
														t.append('Ã—'),
														t.addEventListener('click', function () {
															document
																.querySelector(
																	'[data-ea-publisher]'
																)
																.remove();
														}),
														e.appendChild(t);
												}
												if ('fixedfooter' === this.style) {
													var a = document.createElement('div');
													a.setAttribute('class', 'ea-fixedfooter-hide'),
														e.appendChild(a);
													var o = document.createElement('span');
													o.append('Close Ad'),
														o.addEventListener('click', function () {
															document
																.querySelector(
																	'[data-ea-publisher]'
																)
																.remove();
														}),
														a.appendChild(o);
												}
											},
										},
									],
									[
										{
											key: 'from_element',
											value: function (t) {
												var a = t.getAttribute('data-ea-publisher'),
													o = t.getAttribute('data-ea-type');
												o ||
													((o = 'image'),
													t.setAttribute('data-ea-type', 'image'));
												var n = (t.getAttribute('data-ea-keywords') || '')
														.split('|')
														.filter(function (e) {
															return e.length > 1;
														}),
													r = (
														t.getAttribute('data-ea-campaign-types') ||
														''
													)
														.split('|')
														.filter(function (e) {
															return e.length > 1;
														}),
													i = 'true' === t.getAttribute('data-ea-manual'),
													d = t.getAttribute('data-ea-style'),
													l = t.getAttribute('data-ea-force-ad'),
													c = t.getAttribute('data-ea-force-campaign');
												return (
													('image' !== o && 'text' !== o) || (o += '-v1'),
													(t.className || '')
														.split(' ')
														.indexOf('loaded') >= 0
														? (console.error(
																'EthicalAd already loaded.'
														  ),
														  null)
														: new e(a, o, t, {
																keywords: n,
																style: d,
																campaign_types: r,
																load_manually: i,
																force_ad: l,
																force_campaign: c,
														  })
												);
											},
										},
									]
								),
								e
							);
						})();
					function b() {
						return (
							!!(
								Object.entries &&
								window.URL &&
								window.URLSearchParams &&
								window.Promise
							) ||
							(console.error(
								'Browser does not meet ethical ad client dependencies. Not showing ads'
							),
							!1)
						);
					}
					function v() {
						var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							t = document.querySelectorAll('[data-ea-publisher]'),
							a = Array.prototype.slice.call(t);
						return (
							0 === a.length && console.debug('No ad placements found.'),
							Promise.all(
								a.map(function (t, a) {
									var o = m.from_element(t);
									return (
										0 === a &&
											o &&
											!e &&
											o.detectABP(
												'https://media.ethicalads.io/abp/px.gif',
												function (e) {
													(_ = e),
														e &&
															console.debug(
																'Acceptable Ads enabled. Thanks for allowing our non-tracking ads :)'
															);
												}
											),
										!o || (!e && o.load_manually) ? null : o.load()
									);
								})
							)
						);
					}
					function g() {
						var e = document.querySelectorAll('[data-ea-publisher]');
						Array.prototype.slice.call(e).forEach(function (e) {
							(e.innerHTML = ''), e.classList.remove('loaded');
						});
					}
					var x,
						w,
						k,
						j = (function (e) {
							!(function (e, t) {
								if ('function' != typeof t && null !== t)
									throw new TypeError(
										'Super expression must either be null or a function'
									);
								(e.prototype = Object.create(t && t.prototype, {
									constructor: {value: e, writable: !0, configurable: !0},
								})),
									Object.defineProperty(e, 'prototype', {writable: !1}),
									t && s(e, t);
							})(n, e);
							var t,
								a,
								o =
									((t = n),
									(a = c()),
									function () {
										var e,
											o = u(t);
										if (a) {
											var n = u(this).constructor;
											e = Reflect.construct(o, arguments, n);
										} else e = o.apply(this, arguments);
										return i(this, e);
									});
							function n() {
								return p(this, n), o.apply(this, arguments);
							}
							return h(n);
						})(d(Error)),
						_ = !1,
						S = null;
					if (a.c[a.s] !== e && b()) {
						var O = new Promise(function (e) {
							if (
								'interactive' === document.readyState ||
								'complete' === document.readyState
							)
								return e();
							document.addEventListener(
								'DOMContentLoaded',
								function () {
									e();
								},
								{capture: !0, once: !0, passive: !0}
							);
						});
						(x = new Promise(function (e) {
							O.then(function () {
								v()
									.then(function (t) {
										e(t);
									})
									.catch(function (t) {
										if ((e([]), t instanceof Error)) {
											if (t instanceof j)
												return void console.debug(t.message);
											console.error(t.message);
										}
									});
							});
						})),
							(w = function () {
								console.debug('Loading placements manually'), v(!0);
							}),
							(k = function () {
								g(), v();
							});
					}
				}.call(this, a(2)(e));
		},
		function (e, t) {
			e.exports = function (e) {
				if (!e.webpackPolyfill) {
					var t = Object.create(e);
					t.children || (t.children = []),
						Object.defineProperty(t, 'loaded', {
							enumerable: !0,
							get: function () {
								return t.l;
							},
						}),
						Object.defineProperty(t, 'id', {
							enumerable: !0,
							get: function () {
								return t.i;
							},
						}),
						Object.defineProperty(t, 'exports', {enumerable: !0}),
						(t.webpackPolyfill = 1);
				}
				return t;
			};
		},
		function (e, t, a) {
			var o = a(4),
				n = a(5);
			'string' == typeof (n = n.__esModule ? n.default : n) && (n = [[e.i, n, '']]);
			var r = {insert: 'head', singleton: !1};
			o(n, r);
			e.exports = n.locals || {};
		},
		function (e, t, a) {
			'use strict';
			var o,
				n = function () {
					return (
						void 0 === o &&
							(o = Boolean(window && document && document.all && !window.atob)),
						o
					);
				},
				r = (function () {
					var e = {};
					return function (t) {
						if (void 0 === e[t]) {
							var a = document.querySelector(t);
							if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement)
								try {
									a = a.contentDocument.head;
								} catch (e) {
									a = null;
								}
							e[t] = a;
						}
						return e[t];
					};
				})(),
				i = [];
			function d(e) {
				for (var t = -1, a = 0; a < i.length; a++)
					if (i[a].identifier === e) {
						t = a;
						break;
					}
				return t;
			}
			function l(e, t) {
				for (var a = {}, o = [], n = 0; n < e.length; n++) {
					var r = e[n],
						l = t.base ? r[0] + t.base : r[0],
						c = a[l] || 0,
						s = ''.concat(l, ' ').concat(c);
					a[l] = c + 1;
					var u = d(s),
						p = {css: r[1], media: r[2], sourceMap: r[3]};
					-1 !== u
						? (i[u].references++, i[u].updater(p))
						: i.push({identifier: s, updater: m(p, t), references: 1}),
						o.push(s);
				}
				return o;
			}
			function c(e) {
				var t = document.createElement('style'),
					o = e.attributes || {};
				if (void 0 === o.nonce) {
					var n = a.nc;
					n && (o.nonce = n);
				}
				if (
					(Object.keys(o).forEach(function (e) {
						t.setAttribute(e, o[e]);
					}),
					'function' == typeof e.insert)
				)
					e.insert(t);
				else {
					var i = r(e.insert || 'head');
					if (!i)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						);
					i.appendChild(t);
				}
				return t;
			}
			var s,
				u =
					((s = []),
					function (e, t) {
						return (s[e] = t), s.filter(Boolean).join('\n');
					});
			function p(e, t, a, o) {
				var n = a
					? ''
					: o.media
					? '@media '.concat(o.media, ' {').concat(o.css, '}')
					: o.css;
				if (e.styleSheet) e.styleSheet.cssText = u(t, n);
				else {
					var r = document.createTextNode(n),
						i = e.childNodes;
					i[t] && e.removeChild(i[t]),
						i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
				}
			}
			function f(e, t, a) {
				var o = a.css,
					n = a.media,
					r = a.sourceMap;
				if (
					(n ? e.setAttribute('media', n) : e.removeAttribute('media'),
					r &&
						'undefined' != typeof btoa &&
						(o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
							btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
							' */'
						)),
					e.styleSheet)
				)
					e.styleSheet.cssText = o;
				else {
					for (; e.firstChild; ) e.removeChild(e.firstChild);
					e.appendChild(document.createTextNode(o));
				}
			}
			var h = null,
				y = 0;
			function m(e, t) {
				var a, o, n;
				if (t.singleton) {
					var r = y++;
					(a = h || (h = c(t))),
						(o = p.bind(null, a, r, !1)),
						(n = p.bind(null, a, r, !0));
				} else
					(a = c(t)),
						(o = f.bind(null, a, t)),
						(n = function () {
							!(function (e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e);
							})(a);
						});
				return (
					o(e),
					function (t) {
						if (t) {
							if (
								t.css === e.css &&
								t.media === e.media &&
								t.sourceMap === e.sourceMap
							)
								return;
							o((e = t));
						} else n();
					}
				);
			}
			e.exports = function (e, t) {
				(t = t || {}).singleton || 'boolean' == typeof t.singleton || (t.singleton = n());
				var a = l((e = e || []), t);
				return function (e) {
					if (((e = e || []), '[object Array]' === Object.prototype.toString.call(e))) {
						for (var o = 0; o < a.length; o++) {
							var n = d(a[o]);
							i[n].references--;
						}
						for (var r = l(e, t), c = 0; c < a.length; c++) {
							var s = d(a[c]);
							0 === i[s].references && (i[s].updater(), i.splice(s, 1));
						}
						a = r;
					}
				};
			};
		},
		function (e, t, a) {
			(t = a(6)(!1)).push([
				e.i,
				'[data-ea-publisher].loaded,[data-ea-type].loaded{font-size:14px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-weight:normal;font-style:normal;leter-spacing:0px;vertical-align:baseline;line-height:1.3em}[data-ea-publisher].loaded a,[data-ea-type].loaded a{text-decoration:none}[data-ea-publisher].loaded .ea-pixel,[data-ea-type].loaded .ea-pixel{display:none}[data-ea-publisher].loaded .ea-content,[data-ea-type].loaded .ea-content{margin:1em 1em .5em 1em;padding:1em;background:rgba(0,0,0,.03);color:#505050}[data-ea-publisher].loaded .ea-content a:link,[data-ea-type].loaded .ea-content a:link{color:#505050}[data-ea-publisher].loaded .ea-content a:visited,[data-ea-type].loaded .ea-content a:visited{color:#505050}[data-ea-publisher].loaded .ea-content a:hover,[data-ea-type].loaded .ea-content a:hover{color:#373737}[data-ea-publisher].loaded .ea-content a:active,[data-ea-type].loaded .ea-content a:active{color:#373737}[data-ea-publisher].loaded .ea-content a strong,[data-ea-publisher].loaded .ea-content a b,[data-ea-type].loaded .ea-content a strong,[data-ea-type].loaded .ea-content a b{color:#088cdb}[data-ea-publisher].loaded .ea-callout a:link,[data-ea-type].loaded .ea-callout a:link{color:#6a6a6a}[data-ea-publisher].loaded .ea-callout a:visited,[data-ea-type].loaded .ea-callout a:visited{color:#6a6a6a}[data-ea-publisher].loaded .ea-callout a:hover,[data-ea-type].loaded .ea-callout a:hover{color:#505050}[data-ea-publisher].loaded .ea-callout a:active,[data-ea-type].loaded .ea-callout a:active{color:#505050}[data-ea-publisher].loaded .ea-callout a strong,[data-ea-publisher].loaded .ea-callout a b,[data-ea-type].loaded .ea-callout a strong,[data-ea-type].loaded .ea-callout a b{color:#088cdb}[data-ea-publisher].loaded .ea-callout a,[data-ea-type].loaded .ea-callout a{font-size:.8em}[data-ea-publisher].loaded.dark .ea-content,[data-ea-type].loaded.dark .ea-content{background:rgba(255,255,255,.05);color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:link,[data-ea-type].loaded.dark .ea-content a:link{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:visited,[data-ea-type].loaded.dark .ea-content a:visited{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-content a:hover,[data-ea-type].loaded.dark .ea-content a:hover{color:#f6f6f6}[data-ea-publisher].loaded.dark .ea-content a:active,[data-ea-type].loaded.dark .ea-content a:active{color:#f6f6f6}[data-ea-publisher].loaded.dark .ea-content a strong,[data-ea-publisher].loaded.dark .ea-content a b,[data-ea-type].loaded.dark .ea-content a strong,[data-ea-type].loaded.dark .ea-content a b{color:#50baf9}[data-ea-publisher].loaded.dark .ea-callout a:link,[data-ea-type].loaded.dark .ea-callout a:link{color:#c3c3c3}[data-ea-publisher].loaded.dark .ea-callout a:visited,[data-ea-type].loaded.dark .ea-callout a:visited{color:#c3c3c3}[data-ea-publisher].loaded.dark .ea-callout a:hover,[data-ea-type].loaded.dark .ea-callout a:hover{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-callout a:active,[data-ea-type].loaded.dark .ea-callout a:active{color:#dcdcdc}[data-ea-publisher].loaded.dark .ea-callout a strong,[data-ea-publisher].loaded.dark .ea-callout a b,[data-ea-type].loaded.dark .ea-callout a strong,[data-ea-type].loaded.dark .ea-callout a b{color:#50baf9}@media(prefers-color-scheme: dark){[data-ea-publisher].loaded.adaptive .ea-content,[data-ea-type].loaded.adaptive .ea-content{background:rgba(255,255,255,.05);color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:link,[data-ea-type].loaded.adaptive .ea-content a:link{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:visited,[data-ea-type].loaded.adaptive .ea-content a:visited{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-content a:hover,[data-ea-type].loaded.adaptive .ea-content a:hover{color:#f6f6f6}[data-ea-publisher].loaded.adaptive .ea-content a:active,[data-ea-type].loaded.adaptive .ea-content a:active{color:#f6f6f6}[data-ea-publisher].loaded.adaptive .ea-content a strong,[data-ea-publisher].loaded.adaptive .ea-content a b,[data-ea-type].loaded.adaptive .ea-content a strong,[data-ea-type].loaded.adaptive .ea-content a b{color:#50baf9}[data-ea-publisher].loaded.adaptive .ea-callout a:link,[data-ea-type].loaded.adaptive .ea-callout a:link{color:#c3c3c3}[data-ea-publisher].loaded.adaptive .ea-callout a:visited,[data-ea-type].loaded.adaptive .ea-callout a:visited{color:#c3c3c3}[data-ea-publisher].loaded.adaptive .ea-callout a:hover,[data-ea-type].loaded.adaptive .ea-callout a:hover{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-callout a:active,[data-ea-type].loaded.adaptive .ea-callout a:active{color:#dcdcdc}[data-ea-publisher].loaded.adaptive .ea-callout a strong,[data-ea-publisher].loaded.adaptive .ea-callout a b,[data-ea-type].loaded.adaptive .ea-callout a strong,[data-ea-type].loaded.adaptive .ea-callout a b{color:#50baf9}}[data-ea-publisher].loaded .ea-content,[data-ea-type].loaded .ea-content{border:0px;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,.15)}[data-ea-publisher].loaded.raised .ea-content,[data-ea-type].loaded.raised .ea-content{border:0px;border-radius:3px;box-shadow:0px 2px 3px rgba(0,0,0,.15)}[data-ea-publisher].loaded.bordered .ea-content,[data-ea-type].loaded.bordered .ea-content{border:1px solid rgba(0,0,0,.04);border-radius:3px;box-shadow:none}[data-ea-publisher].loaded.bordered.dark .ea-content,[data-ea-type].loaded.bordered.dark .ea-content{border:1px solid rgba(255,255,255,.07)}@media(prefers-color-scheme: dark){[data-ea-publisher].loaded.bordered.adaptive .ea-content,[data-ea-type].loaded.bordered.adaptive .ea-content{border:1px solid rgba(255,255,255,.07)}}[data-ea-publisher].loaded.flat .ea-content,[data-ea-type].loaded.flat .ea-content{border:0px;border-radius:3px;box-shadow:none}[data-ea-type=image].loaded,[data-ea-publisher]:not([data-ea-type]).loaded,.ea-type-image{display:inline-block}[data-ea-type=image].loaded .ea-content,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content,.ea-type-image .ea-content{max-width:180px;overflow:auto;text-align:center}[data-ea-type=image].loaded .ea-content>a>img,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content>a>img,.ea-type-image .ea-content>a>img{width:120px;height:90px;display:inline-block}[data-ea-type=image].loaded .ea-content>.ea-text,[data-ea-publisher]:not([data-ea-type]).loaded .ea-content>.ea-text,.ea-type-image .ea-content>.ea-text{margin-top:1em;font-size:1em;text-align:center}[data-ea-type=image].loaded .ea-callout,[data-ea-publisher]:not([data-ea-type]).loaded .ea-callout,.ea-type-image .ea-callout{max-width:180px;margin:0em 1em 1em 1em;padding-left:1em;padding-right:1em;font-style:italic;text-align:right}[data-ea-type=image].loaded.horizontal .ea-content,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content,.ea-type-image.horizontal .ea-content{max-width:320px}[data-ea-type=image].loaded.horizontal .ea-content>a>img,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content>a>img,.ea-type-image.horizontal .ea-content>a>img{float:left;margin-right:1em}[data-ea-type=image].loaded.horizontal .ea-content .ea-text,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-content .ea-text,.ea-type-image.horizontal .ea-content .ea-text{margin-top:0em;text-align:left;overflow:auto}[data-ea-type=image].loaded.horizontal .ea-callout,[data-ea-publisher]:not([data-ea-type]).loaded.horizontal .ea-callout,.ea-type-image.horizontal .ea-callout{max-width:320px;text-align:right}[data-ea-type=text].loaded,.ea-type-text{font-size:14px}[data-ea-type=text].loaded .ea-content,.ea-type-text .ea-content{text-align:left}[data-ea-type=text].loaded .ea-callout,.ea-type-text .ea-callout{margin:.5em 1em 1em 1em;padding-left:1em;padding-right:1em;text-align:right;font-style:italic}[data-ea-style=stickybox].loaded{position:fixed;bottom:20px;right:20px;z-index:10}[data-ea-style=stickybox].loaded .ea-type-image .ea-stickybox-hide{cursor:pointer;position:absolute;top:.75em;right:.75em;background-color:#fefefe;border:1px solid #088cdb;border-radius:50%;color:#088cdb;font-size:1em;text-align:center;height:1.5em;width:1.5em;line-height:1.5em}@media(max-width: 1300px){[data-ea-style=stickybox].loaded{position:static;bottom:0;right:0;margin:auto;text-align:center}[data-ea-style=stickybox].loaded .ea-stickybox-hide{display:none}}@media(min-width: 1301px){[data-ea-style=stickybox].loaded .ea-type-image .ea-content{background:#dcdcdc}[data-ea-style=stickybox].loaded.dark .ea-type-image .ea-content{background:#505050}}@media(min-width: 1301px)and (prefers-color-scheme: dark){[data-ea-style=stickybox].loaded.adaptive .ea-type-image .ea-content{background:#505050}}[data-ea-style=fixedfooter].loaded{position:fixed;bottom:0;left:0;z-index:10;width:100%;max-width:100%}[data-ea-style=fixedfooter].loaded .ea-type-text{width:100%;max-width:100%;display:flex;z-index:10;background:#dcdcdc}[data-ea-style=fixedfooter].loaded .ea-type-text .ea-content{border:0px;border-radius:3px;box-shadow:none}[data-ea-style=fixedfooter].loaded .ea-type-text .ea-content{background-color:inherit;max-width:100%;margin:0;padding:1em;flex:auto}[data-ea-style=fixedfooter].loaded .ea-type-text .ea-callout{max-width:100%;margin:0;padding:1em;flex:initial}@media(max-width: 576px){[data-ea-style=fixedfooter].loaded .ea-type-text .ea-callout{display:none}}[data-ea-style=fixedfooter].loaded .ea-type-text .ea-fixedfooter-hide{cursor:pointer;color:#505050;padding:1em;flex:initial;margin:auto 0}[data-ea-style=fixedfooter].loaded .ea-type-text .ea-fixedfooter-hide span{padding:.25em;font-size:.8em;font-weight:bold;border:.15em solid #505050;border-radius:.5em;white-space:nowrap}[data-ea-style=fixedfooter].loaded.dark .ea-type-text{background:#505050}[data-ea-style=fixedfooter].loaded.dark .ea-type-text .ea-fixedfooter-hide span{color:#dcdcdc;border-color:#dcdcdc}@media(prefers-color-scheme: dark){[data-ea-style=fixedfooter].loaded.adaptive .ea-type-text{background:#505050}[data-ea-style=fixedfooter].loaded.adaptive .ea-type-text .ea-fixedfooter-hide span{color:#dcdcdc;border-color:#dcdcdc}}',
				'',
			]),
				(e.exports = t);
		},
		function (e, t, a) {
			'use strict';
			e.exports = function (e) {
				var t = [];
				return (
					(t.toString = function () {
						return this.map(function (t) {
							var a = (function (e, t) {
								var a = e[1] || '',
									o = e[3];
								if (!o) return a;
								if (t && 'function' == typeof btoa) {
									var n =
											((i = o),
											(d = btoa(
												unescape(encodeURIComponent(JSON.stringify(i)))
											)),
											(l =
												'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
													d
												)),
											'/*# '.concat(l, ' */')),
										r = o.sources.map(function (e) {
											return '/*# sourceURL='
												.concat(o.sourceRoot || '')
												.concat(e, ' */');
										});
									return [a].concat(r).concat([n]).join('\n');
								}
								var i, d, l;
								return [a].join('\n');
							})(t, e);
							return t[2] ? '@media '.concat(t[2], ' {').concat(a, '}') : a;
						}).join('');
					}),
					(t.i = function (e, a, o) {
						'string' == typeof e && (e = [[null, e, '']]);
						var n = {};
						if (o)
							for (var r = 0; r < this.length; r++) {
								var i = this[r][0];
								null != i && (n[i] = !0);
							}
						for (var d = 0; d < e.length; d++) {
							var l = [].concat(e[d]);
							(o && n[l[0]]) ||
								(a &&
									(l[2]
										? (l[2] = ''.concat(a, ' and ').concat(l[2]))
										: (l[2] = a)),
								t.push(l));
						}
					}),
					t
				);
			};
		},
	]);
}

export default ethicalads;
