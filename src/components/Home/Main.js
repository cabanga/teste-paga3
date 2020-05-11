import React, { Fragment } from 'react';

import TopBar from './TopBar/';
import Cards from './Card/';
import About from './About/';
import Partners from './Partners/';
import Footer from './Footer/';

function Main() {
  return (
    <Fragment>
      <div style={{ overflow: 'hidden' }}>
        <TopBar />
        <Cards />
        <About />
        <Partners />
        <Footer />
      </div>
    </Fragment>
  )
}

export default Main;