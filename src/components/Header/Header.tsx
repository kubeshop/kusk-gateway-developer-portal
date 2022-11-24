import KuskLogo from "@assets/KuskLogo.svg";
import { Typography } from "antd";
import Image from "next/image";

import * as S from "./styled";

const Header = () => {
	return (
		<S.Container>
			<Image src={KuskLogo} alt="Kusk logo" />
			<Typography.Title level={2}>App portal</Typography.Title>
		</S.Container>
	);
};
export default Header;
