import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

function NewProduct() {
  
  return (
    <div className="new-product">
      <div className="content">
        <section>
        <h1>Paga3</h1>
        
        <h1>Cadastrar novo produto</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041"/>
           Voltar no Perfil
          </Link>
        </section>
        <form>
          <input
            type="text"  
            placeholder="Nome do produto" 
          />
          <textarea 
            placeholder="Descrição do produto"
          />
          <input
            type="text"  
            placeholder="Valor em kwanza"
          />
        </form>
      </div>
    </div>
  )
}

export default NewProduct;