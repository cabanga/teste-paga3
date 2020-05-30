import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Button() {
  return (
    <Link className="sign-in" to="/register">Cadastrar-se</Link>
  );
}

export default Button;