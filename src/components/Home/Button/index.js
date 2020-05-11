import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Button() {
  return (
    <Fragment>
      <div className="link">
        <Link to="/register">Crie a sua Conta</Link>
      </div>
    </Fragment>
  )
}

export default Button;