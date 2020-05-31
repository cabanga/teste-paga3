import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

export default function RegisterSeller() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setRole('');

    const data = {
      email,
      password,
      confirmPassword,
      role
    };

    try {
      // eslint-disable-next-line
      const response = await api.post('/users', {
        user: {
          role: Number(data.role),
          email: data.email,
          password: data.password,
          password_confirmation: data.confirmPassword
        }
      });
      console.log(response);

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
        </section>
        <form onSubmit={handleRegister}>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option>Selecione uma opção</option>
            <option value="0">Cliente</option>
            <option value="10">Empresa</option>
          </select>
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
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setPasswordConfirm(e.target.value)}
            placeholder="Confirme a password"
          />
          <button className="button" type="submit">Cadastrar</button>
          <Link to="/login" className="back-link">
            <FiLogIn size={20} color="#F94545"/>
            Fazer login
          </Link>
        </form>
      </div>
    </div>
  )
}