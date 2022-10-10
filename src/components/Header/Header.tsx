import KuskLogo from '@assets/KuskLogo.svg';
import {Typography} from 'antd';

import * as S from './styled';

const Header = () => {
  return (
    <S.Container>
      <img src={KuskLogo} />
      <Typography.Title level={2}>App portal</Typography.Title>
    </S.Container>
  );
};
export default Header;
