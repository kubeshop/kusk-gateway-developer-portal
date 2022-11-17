import {Header} from '@components/Header';
import KuskLogo from '@assets/KuskLogo.svg';

import 'rapidoc';
import {Typography} from 'antd';
import * as S from './styled';
const OpenapiDoc = () => {
  return (
    <S.Container>
      <rapi-doc
        spec-url="https://api.apis.guru/v2/specs/abstractapi.com/geolocation/1.0.0/openapi.yaml"
        render-style="read"
        load-fonts="false"
        font-size="large"
        primary-color="#3b82f6"
        theme="light"
        bg-color="#fff"
        nav-bg-color="#fff"
        use-path-in-nav-bar="true"
        nav-active-item-marker="display:none;"
        regular-font="roboto"
        layout="column"
        schema-style="tree"
        show-header="false"
        show-method-in-nav-bar="as-colored-block"
        style={{height: '100vh', width: '100%'}}
      >
        <div slot="nav-logo" style={{width: '100%', height: 56, display: 'flex', alignItems: 'center', gap: 16}}>
          <img src={KuskLogo} style={{width: 30, height: 30, verticalAlign: 'top'}} />
          <h2 style={{marginBottom: 0}}>Kusk</h2>
        </div>
      </rapi-doc>
    </S.Container>
  );
};
export default OpenapiDoc;
