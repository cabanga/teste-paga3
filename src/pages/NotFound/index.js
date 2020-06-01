import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Página não encontrada</h1>
      <p>A página que solicitou não existe. :(</p>
      <Link className="notfound-btn" to="/">Voltar na Home</Link>
    </div>
  )
}

export default NotFound;