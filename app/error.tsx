"use client";

import { useEffect } from "react";
import WrongIcon from "@public/wrong.svg";
import * as S from "./error.styled";
import Image from "next/image";
import { Typography } from "antd";
export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<S.Container>
			<Image src={WrongIcon} alt="Something went wrong icon" />
			<S.Content>
				<Typography.Title level={2}>Kusk Dev Portal</Typography.Title>
				<Typography.Text>
					Make sure you are providing the target API and the target API
					namespace as a query params.
				</Typography.Text>
			</S.Content>
		</S.Container>
	);
}
