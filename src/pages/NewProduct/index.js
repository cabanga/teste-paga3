import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

function NewProduct() {
  
  return (
    <div className="new-product">
      <div className="content">
        <section>
        <h1>Paga3</h1>
        
        <h1>Cadastrar novo produto</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa tempora consequatur nob.</p>
          
          <Link to="/seller/dashboard" className="back-link">
            <FiArrowLeft size={20} color="#F94545"/>
           Voltar no Perfil
          </Link>
        </section>
        <form>
          <input
            type="text"  
            placeholder="Nome do produto" 
          />
          <input
            type="file"
            className="custom-file-input"
          />
          <textarea 
            placeholder="Descrição do produto"
          />
          <input
            type="text"  
            placeholder="Adicione o código do produto"
          />
          <input
            type="text"  
            placeholder="Valor em kwanza"
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewProduct;