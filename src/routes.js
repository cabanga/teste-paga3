import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Contacts from './components/Home/Contact/Contacts';
import Request from './components/Web/RequestCompleted/';
import RequestEmpty from './components/Web/RequestEmpty/';
import UserEditProfile from './pages/UserEditProfile/';
import UserProfile from './pages/UserProfile/';
import SellerProfile from './pages/SellerProfile/';
import NewProduct from './pages/NewProduct/';
import About from './components/Home/About/';

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
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/about" component={About} />
        
        <Route exact path="/login/user" component={LoginUser} />
        <Route exact path="/login/seller" component={LoginSeller} />
        
        <Route exact path="/register/user" component={RegisterUser} />
        <Route exact path="/register/seller" component={RegisterSeller} />
        
        <Route exact path="/request" component={Request} />
        <Route exact path="/requestempty" component={RequestEmpty} />
        <Route exact path="/user/edit/profile" component={UserEditProfile} />
        <Route exact path="/user/dashboard" component={UserProfile} />
        <Route exact path="/seller/dashboard" component={SellerProfile} />
        <Route exact path="/product/new" component={NewProduct} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)