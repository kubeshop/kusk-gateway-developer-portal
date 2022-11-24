"use client";

import Image from "next/image";
import { wrapper } from "@redux/store";
import { OpenapiDoc } from "@components/OpenapiDoc";

function Home() {
	return (
		<div>
			<OpenapiDoc />
		</div>
	);
}

export default wrapper.withRedux(Home);
