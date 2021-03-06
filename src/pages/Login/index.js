import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn  } from 'react-icons/fi'

import api from '../../services/api';
import './style.css';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    setEmail('');
    setPassword('');

    try {
      const responseUser = await api.post('/users/sign_in', {
        email,
        password
      });
      console.log(responseUser);
      history.push('/');
      alert('Login feito com sucesso');
    } catch (err) {
      alert('Erro ao fazer login, tente novamente')
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size={20} color="#F94545"/>
            Fazer cadastro
          </Link>
        </form>
      </section>
    </div>
  )
}