import * as React from 'react';
import { Layout } from '../../../shared/components/Layout/index';
import { ProveedorGestionEquipos } from '../hoc/ProveedorGestionEquipos';
import { RouteComponentProps } from 'react-router-dom';

const MainPage: React.FC<RouteComponentProps> = () => {
  return (
    <Layout title="Productos" description="Gestión de Equipos">
      <ProveedorGestionEquipos/>
    </Layout>
  );
};

export default MainPage;
