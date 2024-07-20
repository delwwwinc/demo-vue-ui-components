/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	core: {
		disableTelemetry: true, // 👈 Disables telemetry
	},
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/vue3-vite",
		options: {},
	},
};
export default config;
