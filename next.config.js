/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	assetPrefix: process.env.ASSET_URL || undefined,
};

module.exports = nextConfig;
