import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import './styles.css';

function Register() {
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

      history.push('/loginseller');
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
          <Link to="/loginseller">Já tenho conta</Link>
        </div>
      </section>  
      <section className="register-form">
        <div className="form">
            <form onSubmit={handleRegister}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome da empresa"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email da sua empresa"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
              <input
                type="text"
                name="iban"
                value={iban}
                onChange={e => setIban(e.target.value)}
                placeholder="IBAN da empresa"
              />
              <input
                type="text"
                name="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Endereço da empresa"
              />  
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