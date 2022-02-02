import { Route, Switch } from 'react-router-dom';
import { EquiposRouter } from '../feature/Equipos/EquiposRouter';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';
import React from 'react';

export const PrivateRoutes = () => {
  return (
    <Switch>
        <Route path="/Productos" component={ProductoRouter} />
        <Route path="/equipos" component={EquiposRouter} />        
    </Switch>
  );
};
