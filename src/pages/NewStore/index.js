import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

function NewStore() {
  return (
    <div className="new-store">
      <div className="store-content">
        <section>
          <Link to="/seller/dashboard" className="back-link">
            <FiArrowLeft size={20} color="#F94545"/>
           Voltar no Perfil
          </Link>
        <h1>Cadastrar uma nova Loja</h1>
        </section>
        <form>
          <input
            type="text"  
            placeholder="Nome da Loja" 
          />
           <input
            type="text"  
            placeholder="Categória da Loja" 
          />
          <input
            type="text" 
            placeholder="Endereço da Loja"
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewStore;