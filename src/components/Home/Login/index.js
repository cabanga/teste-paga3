import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';
import './styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const responseUser = await api.post('usersessions', { email, password });

      localStorage.setItem('userLogin', email, password);
      localStorage.setItem('userName', responseUser.data.firstName);

      history.push('/dashboardwelcome');
      alert('Login feito com sucesso');
    } catch (err) {
      alert('Erro ao fazer login, tente novamente')
    }
  }

  return (
    <Fragment>
      <h1 className="back-button">
        <Link to="/">Home</Link>
      </h1>
      <div className="login-container">
        <div className="content">
          <section>
            <h2>Entrar</h2>
            <h4>Pagar por prestações agora ficou mais fácil</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit
            </p>
            <div className="sign-button">
              <Link to="/register">Criar uma conta</Link>
            </div>
          </section>
          <section className="login-form">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Seu Email"
                />
                     
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Sua Senha"
                />
                      
                <button
                  className="button"
                  type="submit"
                >Entrar</button>
                <p>
                  Esqueceu sua <Link to="/">Palavra Passe?</Link>
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
