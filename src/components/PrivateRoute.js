import React from 'react';

import { Route, Redirect } from 'react-router';

const PrivateRoute = props => {
  const isLogged = !!localStorage.getItem('abc1223');
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute;