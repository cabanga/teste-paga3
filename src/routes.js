import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Contacts from './components/Home/Contact/Contacts';
import Request from './components/Web/RequestCompleted/';
import RequestEmpty from './components/Web/RequestEmpty/';
import EditProfile from './components/Web/Edit-profile/';
import Dashboard from './components/Web/Dashboard/';
import DashboardWelcome from './components/Web/DashboardWelcome/';
import DashboardWelcomeTwo from './components/Web/DashboardWelcome-two/';
import DashboardWelcomeThree from './components/Web/DashboardWelcome-three/';
import Product from './components/Web/Product/';
import ProductOne from './components/Web/ProductOne/';
import ProductTwo from './components/Web/ProductTwo/';
import ProductThree from './components/Web/ProductThree/';
import ProductFour from './components/Web/ProductFour/';
import ProductFive from './components/Web/ProductFive/';
import About from './components/Home/About/';
import Login from './components/Home/Login/';
import Register from './components/Home/Register/';
import Main from './components/Home/Main';
import ScrollToTop from './components/Home/ScrollTop'

export default props => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/request" component={Request} />
        <Route exact path="/requestempty" component={RequestEmpty} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboardwelcome" component={DashboardWelcome} />
        <Route exact path="/dashboardwelcometwo" component={DashboardWelcomeTwo} />
        <Route exact path="/dashboardwelcomethree" component={DashboardWelcomeThree} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/productone" component={ProductOne} />
        <Route exact path="/producttwo" component={ProductTwo} />
        <Route exact path="/productthree" component={ProductThree} />
        <Route exact path="/productfour" component={ProductFour} />
        <Route exact path="/productfive" component={ProductFive} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)