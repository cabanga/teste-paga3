import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Woman from '../../../assets/woman.jpg';

function EditProfile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <section className="profile">
        <h2>Editar Perfil</h2>
        <img src={Woman} alt="Profile" />
        <h1>Debora Leandro</h1>
        <span>@debl</span>
        <p>
          <Link to="/">Redifinir Palavra-Passe</Link>
        </p>
        
        <div className="profile-info">
        <h1>Dados de Utilizador</h1>
          <form className="profile-form">

          <label>Nome de utilizador</label>    
          <input
            type="text"
            value="Debl"  
          />

          <label>Email</label>    
          <input
            type="email"
            value="debora@leandro.com"  
          />
          <input className="button" type="button" value="Salvar"/>
        </form>
      </div>  
      </section>

      <section className="personal">
      <div className="personal-links">
          <ul>
            <li>
              1 <Link to="/">Informações Pessoais</Link>
            </li>
            <li>
              2 <Link to="/">Informações Bancaria</Link>
            </li>
            <li>
              3 <Link to="/">Anexos</Link>
            </li>  
          </ul>
      </div>
      <div className="personal-form">
        <h3>Informações Pessoais</h3>
        <form>
          <input
            type="text"
            name="Nome"
            placeholder="Debora"
          />
          <input
            type="text"
            name="Nome"
            placeholder="Debora"
          />
          <input
            type="text"
            name="Nome"
            placeholder="Debora"
          />
          <input
            type="text"
            name="Nome"
            placeholder="Debora"
          />
          <input
            type="text"
            name="Nome"
            placeholder="Debora"
          />
          <input
            type="text"
            name="Nome"
            placeholder="Debora"
          />    
        </form>
          </div>
          <div className="center">
          <input className="button" type="button" value="Salvar"/>
          </div>
        </section>  
      </div>
      </div>
  )
}

export default EditProfile;
