import {Header} from '@components/Header';
import KuskLogo from '@assets/KuskLogo.svg';

import 'rapidoc';
import {Typography} from 'antd';

const OpenapiDoc = () => {
  return (
    <div>
      <rapi-doc
        spec-url="https://api.apis.guru/v2/specs/abstractapi.com/geolocation/1.0.0/openapi.yaml"
        render-style="read"
        load-fonts="false"
        font-size="large"
        primary-color="#3b82f6"
        theme="light"
        bg-color="#F4F4F5"
        regular-font="roboto"
        style={{height: '100vh', width: '100%'}}
      >
        <div>
          <Typography.Title>Developer Portal</Typography.Title>
        </div>
        <img slot="logo" src={KuskLogo} style={{width: 30, height: 30}} />
      </rapi-doc>
    </div>
  );
};
export default OpenapiDoc;
