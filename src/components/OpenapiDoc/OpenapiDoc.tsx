"use client";

import { Typography } from "antd";
import Image from "next/image";
import { useEffect, useRef } from "react";
import KuskLogo from "@assets/KuskLogo.svg";

import * as S from "./styled";

const OpenapiDoc = ({ data }: { data: string }) => {
	const ref = useRef<any>(null);

	useEffect(() => {
		console.log(data);
		ref?.current?.loadSpec(data);
	}, [ref.current]);
	return (
		<S.Container>
			<rapi-doc
				ref={ref}
				id="rapi-doc"
				load-fonts="false"
				font-size="large"
				primary-color="#3b82f6"
				theme="light"
				bg-color="#fff"
				nav-bg-color="#fff"
				nav-accent-text-color="transparent"
				use-path-in-nav-bar="true"
				allow-advanced-search="false"
				regular-font="roboto"
				mono-font="roboto mono"
				layout="row"
				render-style="read"
				response-area-height="400px"
				schema-style="table"
				show-header="false"
				show-method-in-nav-bar="as-colored-block"
				nav-active-item-marker="colored-block"
				nav-item-spacing="relaxed"
				style={{ height: "100vh", width: "100%" }}
			>
				<div
					slot="nav-logo"
					style={{
						width: "100%",
						height: 56,
						display: "flex",
						alignItems: "center",
						gap: 16,
					}}
				>
					<Image
						src={KuskLogo}
						alt="Kusk Logo"
						style={{ width: 30, height: 30, verticalAlign: "top" }}
					/>
					<h2 style={{ marginBottom: 0 }}>Kusk</h2>
				</div>
			</rapi-doc>
		</S.Container>
	);
};
export default OpenapiDoc;
