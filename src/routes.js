import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import RequestCompleted from './pages/RequestCompleted/';
import BuyProduct from './pages/BuyProduct/';

import UserEditProfile from './pages/UserEditProfile/';
import UserProfile from './pages/UserProfile/';
import SellerProfile from './pages/SellerProfile/';
import NewProduct from './pages/NewProduct/';

import LoginUser from './pages/LoginUser/';
import LoginSeller from './pages/LoginSeller/';

import RegisterUser from './pages/RegisterUser/';
import RegisterSeller from './pages/RegisterSeller/';

import Main from './components/Home/Main';
import ScrollToTop from './components/Home/ScrollTop';

export default props => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Main} />
        
        <Route exact path="/login/user" component={LoginUser} />
        <Route exact path="/login/seller" component={LoginSeller} />
        
        <Route exact path="/register/user" component={RegisterUser} />
        <Route exact path="/register/seller" component={RegisterSeller} />
        
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