import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Button() {
  return (
      <div className="link">
        <Link to="/register/user">Crie a sua Conta</Link>
      </div>
  )
}

export default Button;