import type { NextConfig } from 'next';
import { ServiceInitializer } from './app/lib/services';
const path = require('path');

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/*/**',
				search: '',
			},
		],
	},
	devIndicators: {
		appIsrStatus: true,
		buildActivity: true,
		buildActivityPosition: 'bottom-right',
	},
	experimental: {
		serverActions: {
			bodySizeLimit: '5mb',
		},
	},
	sassOptions: {
		includePaths: [path.join(__dirname, '/app/lib/styles')],
		prependData: `@import "bootstrap.scss";`,
		silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api'],
	},
	serverRuntimeConfig: {
		// trustedHosts: ['http://localhost:3000'],
		serviceInitializer:
			process.env.NODE_ENV === 'development'
				? ServiceInitializer.initialize()
				: null,
	},
	// serverRuntimeConfig: {
	// serviceInitializer: ServiceInitializer.initialize(),
	// },
};

export default nextConfig;
