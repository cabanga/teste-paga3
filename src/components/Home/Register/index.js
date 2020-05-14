import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import './styles.css';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

    const data = {
      firstName,
      lastName,
      email,
      password
    };

    try {
      // eslint-disable-next-line
      const response = await api.post('users', data);

      alert(`Registro realizado com sucesso`);

      history.push('/login');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <Fragment>
      <h1 className="back-button">
        <Link to="/">Home</Link>
      </h1>
    <div className="register-container">
      <div className="content">
      <section>
        <h2>Entrar</h2>
        <h4>Pagar por prestações agora ficou mais fácil</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit 
        </p>
        <div className="login-button">
          <Link to="/login">Já tenho conta</Link>
        </div>
        <div className="login-button">
          <Link to="/registerseller">Registar Loja</Link>
        </div>    
      </section>  
      <section className="register-form">
        <div className="form">
            <form onSubmit={handleRegister}>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Primeiro nome"
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Último nome"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
             
              <select
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              >
                <option value="empresa">Tipo de empresa</option>
                <option value="publica">Pública</option>
                <option value="privada">Privada</option>
              </select>
              <button className="button" type="submit">
                Registrar-se
              </button>
            </form>  
        </div>    
      </section>
      </div>
      </div>
    </Fragment>
  )
}

export default Register;