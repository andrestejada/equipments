import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EquiposRouter } from './feature/Equipos/EquiposRouter';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import MainPage from 'app/Main';
import { Navigation } from './shared/components/Navigation';
import { ProductoRouter } from 'app/feature/Producto/ProductoRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/home" component={HomeRouter} />
        <Route path="/productos" component={ProductoRouter} />
        <Route path="/equipos" component={EquiposRouter} />
      </Switch>
    </BrowserRouter>
  );
};
