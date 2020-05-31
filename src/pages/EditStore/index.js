import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

function EditStore() {
  return (
    <div className="store-container">
        <section className="store-form">
          <Link to="/user/dashboard" className="back-link">
            <FiArrowLeft size={20} color="#F94545"/>
            Voltar no Perfil
          </Link>
         <h1>Editar as informações da Loja</h1>
          <form>
            <input type="text" placeholder="Nome da Loja" required />
            <input type="text" placeholder="Telefone da Loja" required   />
            <input type="text" placeholder="Conta bancaria da Loja" required />
            <input type="tel" placeholder="IBAN da Loja" required />
        </form>
        <button className="button" type="submit">Salvar</button>
        </section>
      </div>
  )
}

export default EditStore;