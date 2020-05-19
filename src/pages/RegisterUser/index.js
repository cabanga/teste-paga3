import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

export default function RegisterSeller() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      history.push('/login/user');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
        <h1>Cadastra-se na Paga3</h1>
          <p>Pagar por prestações agora ficou mais fácil.</p>
          
          <Link to="/login/user" className="back-link">
            <FiArrowLeft size={20} color="#F94545"/>
            Fazer login
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Primeiro nome"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Último nome"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
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
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}