import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

function NewProduct() {
  return (
    <div className="new-product">
      <div className="content">
        <section>
          <Link to="/store/dashboard" className="back-link">
            <FiArrowLeft size={20} color="#F94545"/>
           Voltar no Perfil
          </Link>
        <h1>Cadastrar um novo Produto</h1>
        </section>
        <form>
          <input
            type="text"  
            placeholder="Nome do produto" 
          />
           <input
            type="text"  
            placeholder="Preço do produto" 
          />
          <input
            type="text" 
            placeholder="Código do produto"
          />
          <input
            type="text" 
            placeholder="Número de prestações"
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewProduct;