import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

function EditProfile() {
  return (
      <div className="edit-container">
        <section className="form-edit">
          <Link to="/user/dashboard" className="back-link">
            <FiArrowLeft size={20} color="#F94545"/>
            Voltar no Perfil
          </Link>
         <h1>Editar as informações de usuário</h1>
          <form>
            <input type="text" placeholder="Primeiro nome" required />
            <input type="text" placeholder="Último nome" required   />
            <input type="number" placeholder="Sua idade" required />
            <input type="text" placeholder="Qual seu género" required />
            <input type="tel" placeholder="Seu contato telefónico" required />
          </form>
        </section>
      </div>
  )
}

export default EditProfile;