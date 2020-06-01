import React from 'react';
import { Link } from 'react-router-dom';

import Floot from '../../../assets/flooop.png';

import './styles.css';

function MenuItens() {
  return (
    <header>
      <div className="container">
        <img src={Floot} alt="Paga3" />
        
        <div className="menu-section on">
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Sobre</Link></li>
              <li><Link to="/">Contatos</Link></li>
              <li className="border"><Link to="/login">Entrar</Link></li>
            </ul>
          </nav>
          
          </div>
      </div>
    </header>
  )
}

export default MenuItens;