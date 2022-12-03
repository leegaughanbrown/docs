/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Start Here', header: true, type: 'learn', key: 'startHere' },
	{ text: 'Getting Started', slug: 'getting-started-with-oxyprops', key: 'getting-started' },
	{ text: 'Installation', slug: 'install', key: 'install' },
	{ text: 'Plugin Settings', slug: 'plugin-settings', key: 'plugin-settings' },
	// { text: 'OxyProps vs. X', slug: 'comparing-oxyprops-vs-other-plugins', key: 'comparing-oxyprops-vs-other-plugins' },

	{ text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
	{ text: 'Design Tokens', slug: 'core-concepts/design-tokens', key: 'core-concepts/design-tokens' },
	{ text: 'CSS Custom Properties', slug: 'core-concepts/css-custom-properties', key: 'core-concepts/css-custom-properties' },

	{ text: 'CSS Framework', header: true, type: 'learn', key: 'framework' },
	{ text: 'Animations', slug: 'framework/animations', key: 'framework/animations' },
	{ text: 'Aspect Ratios', slug: 'framework/aspect-ratios', key: 'framework/aspect-ratios' },
	{ text: 'Borders', slug: 'framework/borders', key: 'framework/borders' },
	{ text: 'Buttons', slug: 'framework/buttons', key: 'framework/buttons' },
	{ text: 'Cards', slug: 'framework/cards', key: 'framework/cards' },
	{ text: 'Colors', slug: 'framework/colors', key: 'framework/colors' },
	{ text: 'Color Schemes', slug: 'framework/color-schemes', key: 'framework/color-schemes' },
	{ text: 'Cursors', slug: 'framework/cursors', key: 'framework/cursors' },
	{ text: 'Easing', slug: 'framework/easing', key: 'framework/easing' },
	{ text: 'Gradients', slug: 'framework/gradients', key: 'framework/gradients' },
	{ text: '12 Cols Grids', slug: 'framework/grids12', key: 'framework/grids12' },
	{ text: 'Basic Grids', slug: 'framework/grids', key: 'framework/grids' },
	{ text: 'RAM Grids', slug: 'framework/ram', key: 'framework/ram' },
	{ text: 'Normalize', slug: 'framework/normalize', key: 'framework/normalize' },
	{ text: 'Layouts', slug: 'framework/layouts', key: 'framework/layouts' },
	{ text: 'Shadows', slug: 'framework/shadows', key: 'framework/shadows' },
	{ text: 'Typography', slug: 'framework/typography', key: 'framework/typography' },
	{ text: 'Sizes', slug: 'framework/sizes', key: 'framework/sizes' },
	{ text: 'Layers', slug: 'framework/layers', key: 'framework/layers' },
	{ text: 'Media Queries', slug: 'framework/media-queries', key: 'framework/media-queries' },

	{ text: 'Builder Features', header: true, type: 'learn', key: 'features' },
	{ text: 'Context Menu', slug: 'features/context-menu', key: 'features/context-menu' },
	{ text: 'Global Colors', slug: 'features/global-colors', key: 'features/global-colors' },
	{ text: 'Global Settings', slug: 'features/global-settings', key: 'features/global-settings' },
	{ text: 'Custom Elements', slug: 'features/custom-elements', key: 'features/custom-elements' },
	{ text: 'Selectors', slug: 'features/selectors', key: 'features/selectors' },
	{ text: 'Stylesheets', slug: 'features/stylesheets', key: 'features/stylesheets' },

	{ text: 'Reference', header: true, type: 'api', key: 'reference' },
	{ text: '12-grid Utilities', slug: 'reference/12-grid-utilities', key: 'reference/12-grid-utilities' },
	{ text: 'Layouts Props', slug: 'reference/layouts-props', key: 'reference/layouts-props' },
	{ text: 'Colors Props', slug: 'reference/colors-props', key: 'reference/colors-props' },
	{ text: 'Gradients Props', slug: 'reference/gradients-props', key: 'reference/gradients-props' },
	{ text: 'Shadows Props', slug: 'reference/shadows-props', key: 'reference/shadows-props' },
	{ text: 'Aspect Ratios Props', slug: 'reference/aspect-ratios-props', key: 'reference/aspect-ratios-props' },
	{ text: 'Typography Props', slug: 'reference/typography-props', key: 'reference/typography-props' },
	{ text: 'Easings Props', slug: 'reference/easings-props', key: 'reference/easings-props' },
	{ text: 'Animations Props', slug: 'reference/animations-props', key: 'reference/animations-props' },
	{ text: 'Sizes Props', slug: 'reference/sizes-props', key: 'reference/sizes-props' },
	{ text: 'Borders Props', slug: 'reference/borders-props', key: 'reference/borders-props' },
	{ text: 'Layers Props', slug: 'reference/layers-props', key: 'reference/layers-props' },
] as const;
