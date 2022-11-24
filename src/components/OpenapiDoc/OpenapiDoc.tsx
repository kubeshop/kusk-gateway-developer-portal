"use client";

import KuskLogo from "@assets/KuskLogo.svg";

import { Typography } from "antd";
import Image from "next/image";
import { useEffect, useRef } from "react";

const OpenapiDoc = ({ data }: { data: string }) => {
	const ref = useRef<any>(null);

	useEffect(() => {
		console.log(data);
		ref?.current?.loadSpec(data);
	}, [ref.current]);
	return (
		<div>
			<rapi-doc
				ref={ref}
				render-style="read"
				load-fonts="false"
				font-size="large"
				primary-color="#3b82f6"
				theme="light"
				bg-color="#F4F4F5"
				regular-font="roboto"
				style={{ height: "100vh", width: "100%" }}
			>
				<div>
					<Typography.Title>Developer Portal</Typography.Title>
				</div>
				<Image
					slot="logo"
					src={KuskLogo}
					alt="Kusk logo"
					style={{ width: 30, height: 30 }}
				/>
			</rapi-doc>
		</div>
	);
};
export default OpenapiDoc;
