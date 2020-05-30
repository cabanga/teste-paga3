import React from 'react';

import './styles.css';

function MenuItens() {
  return (
    <>
      <div className="menu-section">
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contatos</li>
            <li>Entrar</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default MenuItens;