import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
	devIndicators: {
		appIsrStatus: true,
		buildActivity: true,
		buildActivityPosition: 'bottom-right',
	},
	experimental: {
		// typedRoutes: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, '/app/styles')],
		prependData: `@import "bootstrap.scss";`,
		silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api'],
	},
};

export default nextConfig;
