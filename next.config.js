/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		fontLoaders: [
			{
				loader: "@next/font/google",
				weight: ["400", "500", "700", "900"],
				subsets: ["latin"],
				preload: true,
			},
		],
	},
	assetPrefix: process.env.ASSET_URL || undefined,
	env: {
		kuskAPI: process.env.KUSK_GATEWAY_API_URL,
	},
};

module.exports = nextConfig;
