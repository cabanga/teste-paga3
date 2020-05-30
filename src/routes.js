import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import RequestCompleted from './pages/RequestCompleted/';
import BuyProduct from './pages/BuyProduct/';

import UserEditProfile from './pages/UserEditProfile/';
import UserProfile from './pages/UserProfile/';
import SellerProfile from './pages/SellerProfile/';
import NewProduct from './pages/NewProduct/';

import Login from './pages/Login/';
import Register from './pages/Register/';

import Main from './components/Main';
import ScrollToTop from './components/ScrollTop';

export default props => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Main} />
        
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
        <Route exact path="/request/completed" component={RequestCompleted} />
        <Route exact path="/comprar" component={BuyProduct} />
        <Route exact path="/user/edit/profile" component={UserEditProfile} />
        <Route exact path="/user/dashboard" component={UserProfile} />
        <Route exact path="/seller/dashboard" component={SellerProfile} />
        <Route exact path="/product/new" component={NewProduct} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)