import React from 'react';

import './styles.css';

import MenuItem from '../MenuItens/';
import Hero from '../Hero/';

function Header() {
  return (
      <div className="bc-header">
        <MenuItem />
        <Hero />
      </div>
  )
}

export default Header;