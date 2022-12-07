import { Roboto } from "@next/font/google";
import RootStyleRegistry from "./RootStyleRegistry";

import "./globals.css";

const roboto = Roboto({
	weight: ["400", "700"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={roboto.className}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

			<head />
			<body>
				<RootStyleRegistry>{children}</RootStyleRegistry>
			</body>
			<script
				type="module"
				src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"
				async
			></script>
		</html>
	);
}

if (process.env.NEXT_MANUAL_SIG_HANDLE) {
	process.on("SIGTERM", () => {
		console.log("Received SIGTERM: ", "cleaning up");
		process.exit(0);
	});
	process.on("SIGINT", () => {
		console.log("Received SIGINT: ", "cleaning up");
		process.exit(0);
	});
}
