import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

export default function RegisterSeller() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [iban, setIban] = useState('');
  const [address, setAddress] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    setName('');
    setEmail('');
    setPassword('');
    setIban('');
    setAddress('');

    const data = {
      name,
      email,
      password,
      iban,
      address
    };

    try {
      // eslint-disable-next-line
      const response = await api.post('sellers', data);

      alert(`Registro realizado com sucesso`);

      history.push('/login/seller');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
        <h1>Faça o cadastro da sua organização</h1>
          <p>Pagar por prestações agora ficou mais fácil.</p>
          
          <Link to="/login/seller" className="back-link">
            <FiArrowLeft size={20} color="#F94545"/>
            Fazer login
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da Organização"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email da Organização"
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
            type="text"
            placeholder="IBAN da Organização"
            value={iban}
            onChange={e => setIban(e.target.value)}
          />

          <input
            type="text"
            placeholder="Endereço da Organização"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}