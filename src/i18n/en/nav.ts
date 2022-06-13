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
	{ text: 'Dashboard Setup', slug: 'dashboard-setup', key: 'dashboard-setup' },
	{ text: 'OxyProps vs. X', slug: 'comparing-oxyprops-vs-other-plugins', key: 'comparing-oxyprops-vs-other-plugins' },

	{ text: 'Core Concepts', header: true, type: 'learn', key: 'coreConcepts' },
	{ text: 'CSS Custom Properties', slug: 'core-concepts/css-custom-properties', key: 'core-concepts/css-custom-properties' },

	{ text: 'CSS Framework', header: true, type: 'learn', key: 'framework' },
	{ text: 'Colors', slug: 'framework/colors', key: 'framework/colors' },
	{ text: 'Layouts', slug: 'framework/layouts', key: 'framework/layouts' },
	{ text: 'Gradients', slug: 'framework/gradients', key: 'framework/gradients' },
	{ text: 'Shadows', slug: 'framework/shadows', key: 'framework/shadows' },
	{ text: 'Aspect Ratios', slug: 'framework/aspect-ratios', key: 'framework/aspect-ratios' },
	{ text: 'Typography', slug: 'framework/typography', key: 'framework/typography' },
	{ text: 'Easing', slug: 'framework/easing', key: 'framework/easing' },
	{ text: 'Animations', slug: 'framework/animations', key: 'framework/animations' },
	{ text: 'Sizes', slug: 'framework/sizes', key: 'framework/sizes' },
	{ text: 'Borders', slug: 'framework/borders', key: 'framework/borders' },
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
	{ text: 'Cheat Sheet', slug: 'reference/cheat-sheet', key: 'reference/cheat-sheet' },

] as const;
