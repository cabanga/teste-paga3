import React from 'react';

import Floot from '../../assets/flooop.png';
import './styles.css';

function Logo() {
  return (
    <div className="logo">
      <img src={Floot} alt="Paga3" />
    </div>
  )
}

export default Logo;