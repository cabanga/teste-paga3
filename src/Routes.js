import React from 'react';
import { Route, Router, Switch } from 'react-router';

import FindProduct from './pages/FindProduct/';

import EditeUser from './pages/EditUser/';
import EditSeller from './pages/EditSeller/';
import EditStore from './pages/EditStore/';
import UserProfile from './pages/UserProfile/';
import StoreProfile from './pages/StoreProfile/';
import SellerProfile from './pages/SellerProfile/';
import NewStore from './pages/NewStore/';
import NewProduct from './pages/NewProduct/';

import Login from './pages/Login/';
import Register from './pages/Register/';

import Main from './components/Main';
import NotFound from './pages/NotFound/';
import { history } from './history';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => (
  <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
        <PrivateRoute exact path="/comprar" component={FindProduct} />
        <PrivateRoute exact path="/edit-info-user" component={EditeUser} />
        <PrivateRoute exact path="/edit-info-seller" component={EditSeller} />
        <PrivateRoute exact path="/edit-info-store" component={EditStore} />
        <PrivateRoute exact path="/user/dashboard" component={UserProfile} />
        <PrivateRoute exact path="/store/dashboard" component={StoreProfile} />
        <PrivateRoute exact path="/seller/dashboard" component={SellerProfile} />
        <PrivateRoute exact path="/seller/new-store" component={NewStore} />
        <PrivateRoute exact path="/store/new-product" component={NewProduct} />
        <PrivateRoute component={NotFound} />
      </Switch>
  </Router>
)

export default Routes;