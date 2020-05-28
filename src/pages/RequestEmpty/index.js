import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import Fall from '../../assets/fall.svg';
import './style.css';

function RequestEmpty() {
  return (
    <div className="productContainer">
    <div className="productContent">
      <section className="productCards">
        <Link to="/user/dashboard" className="back-link">
            <FiArrowLeft size={16} color="#E02041"/>
           Voltar no Perfil
          </Link>
        
        <div className="productCard">
          <h1>Encontre o seu produto pelo código</h1>
          <input type="search" placeholder="Código do produto" />
          <button className="searchButton">Buscar</button>  
            
          <div className="cardContent">
            <ul>
              <li>Nome do produto</li>
              <p>Computador HP i7 8654</p>
              <li>Valor do produto</li>
              <p>250.000,00 AOA</p>
              <li>Loja</li>
              <p>NCR Angola</p>
              <li>Número de prestações</li>
              <p>3</p>  
            </ul> 
          </div>         
          <button className="button">Adicionar</button>
        </div>
      </section>
        
      <section className="productInfo">
        <h1>Lista de Produtos</h1>
        <img src={Fall} alt="Women" />
        <h2>Aqui estará sua lista de produtos</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laborum.
        </p>   
      </section>  
    </div>
    </div>
  )
}

export default RequestEmpty;