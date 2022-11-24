/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	assetPrefix: process.env.ASSET_URL || undefined,
	env: {
		kuskAPI: "https://api.kusk.io",
	},
};

module.exports = nextConfig;
