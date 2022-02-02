import { Redirect, Route, RouteProps } from 'react-router-dom';
import React from 'react';
interface Props extends RouteProps{
  isAuth:boolean
} 
export const PrivateRoute = ({isAuth,...routeProps}:Props) => {
  if(isAuth){
    return <Route {...routeProps}/>;
  }else{
    return <Redirect to='/'/>;
  }
};
