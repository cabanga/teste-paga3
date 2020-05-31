import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import FindProduct from './pages/FindProduct/';

import EditeUser from './pages/EditUser/';
import EditSeller from './pages/EditSeller/';
import EditStore from './pages/EditStore/';
import UserProfile from './pages/UserProfile/';
import StoreProfile from './pages/StoreProfile/';
import SellerProfile from './pages/SellerProfile/';
import NewStore from './pages/NewStore/';

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
        
        <Route exact path="/comprar" component={FindProduct} />
        <Route exact path="/edit-info-user" component={EditeUser} />
        <Route exact path="/edit-info-seller" component={EditSeller} />
        <Route exact path="/edit-info-store" component={EditStore} />
        <Route exact path="/user/dashboard" component={UserProfile} />
        <Route exact path="/store/dashboard" component={StoreProfile} />
        <Route exact path="/seller/dashboard" component={SellerProfile} />
        <Route exact path="/seller/new-store" component={NewStore} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)