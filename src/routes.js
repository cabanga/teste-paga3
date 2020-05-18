import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Contacts from './components/Home/Contact/Contacts';
import Request from './components/Web/RequestCompleted/';
import RequestEmpty from './components/Web/RequestEmpty/';
import EditProfile from './components/Web/Edit-profile/';
import Dashboard from './components/Web/Dashboard/';
import DashboardWelcome from './components/Web/DashboardWelcome/';
import ProfileSeller from './components/Web/ProfileSeller/';
import NewProduct from './components/Web/NewProduct/';
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
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboardwelcome" component={DashboardWelcome} />
        <Route exact path="/profile" component={ProfileSeller} />
        <Route exact path="/product/new" component={NewProduct} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)