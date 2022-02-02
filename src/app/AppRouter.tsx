import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EquiposRouter } from './feature/Equipos/EquiposRouter';
import HomeMainPage from './feature/Home/pages/Main';
import { HomeRouter } from 'app/feature/Home/HomeRouter';
import { LoginRouter } from './feature/Login/LoginRouter';
import { Navigation } from './shared/components/Navigation';
import { PrivateRoute } from './routes/PrivateRoute';
import { PrivateRoutes } from './routes/PrivateRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomeMainPage} />
        <Route path="/login" component={LoginRouter} />
        <PrivateRoute isAuth={true} component={PrivateRoutes} />
      </Switch>
    </BrowserRouter>
  );
};
