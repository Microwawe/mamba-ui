export const selectors = {
	settings: {
		colorGrid: '[data-cy=settings-colors-grid]',
		component: '[data-cy=settings-component]',
		darkModeToggle: '[data-cy=settings-dark-mode-toggle]',
		selectedColorName: '[data-cy=settings-selected-color-name]',
		toggleOpenButton: '[data-cy=settings-toggle]',
	},
	showcode: {
		showPreviewButton: '[data-cy=show-preview-button]',
		showHtmlButton: '[data-cy=show-html-button]',
		showVueButton: '[data-cy=show-vue-button]',
		showJsxButton: '[data-cy=show-jsx-button]',
		showFullscrenButton: '[data-cy=show-fullscreen-button]',
		copyCodeButton: '[data-cy=copy-code-button]',
		copyCaretButton: '[data-cy=copy-caret-button]',
		copyCodeSuccess: '[data-cy=copy-code-success]',
	},
	fullscreenModal: {
		closeButton: '[data-cy=fullscreen-modal-close-button]',
	},
};
