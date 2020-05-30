import React from 'react';

import './styles.css';

import Logo from '../Logo/';
import MenuItem from '../MenuItens/';

function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <MenuItem />
      </div>
    </header>
  )
}

export default Header;