import * as React from 'react';
import { Layout } from 'app/shared/components/Layout';
import { Login } from '../components/Login/index';
import { RouteComponentProps } from 'react-router-dom';

const LoginPage: React.FC<RouteComponentProps> = () => (
  <Layout title="Login" description="Login de la aplicación">
    <Login/>
  </Layout>
);


export default LoginPage;
