import {useRoutes} from 'react-router-dom';
import {ApiDoc} from '@pages';

const Router = () => {
  return useRoutes([{path: '/*', element: <ApiDoc />}]);
};

export default Router;
