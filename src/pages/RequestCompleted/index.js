import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';

import Computer from '../../assets/pc.jpeg';
import './style.css';

function RequestCompleted() {
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
          <input type="search" placeholder="Código"/>  
            
          <div className="cardContent">
            <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do produto</li>
              <p>Computador HP i7 8654</p>
              <li>Valor do produto</li>
              <p>250.000,00 AOA</p>
              <li>Loja</li>
              <p>NCR Angola</p>
              <li>Números de prestações</li>
              <p>3</p>  
            </ul>  
          </div>
            
          <button className="button">Adicionar</button>
        </div>
      </section>
        
      <section className="productInffo">
          <h1>Lista de Produtos</h1>
          <h3><Link to="/">Esvaziar Lista</Link></h3>
          <div className="inffoCard">
          <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do produto</li>
              <p>Computador HP i7 8654</p>
              <li>Valor do produto</li>
              <p>250.000,00 AOA</p>
              <li>Loja</li>
              <p>NCR Angola</p> 
            </ul>   
          </div>
          <div className="inffoCard">
          <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do produto</li>
              <p>Computador HP i7 8654</p>
              <li>Valor do produto</li>
              <p>250.000,00 AOA</p>
              <li>Loja</li>
              <p>NCR Angola</p> 
            </ul>   
          </div>
          <div className="inffoCard">
          <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do produto</li>
              <p>Computador HP i7 8654</p>
              <li>Valor do produto</li>
              <p>250.000,00 AOA</p>
              <li>Loja</li>
              <p>NCR Angola</p> 
            </ul>   
          </div>
            <button className="button">Solicitar</button>
      </section>  
    </div>
    </div>
  )
}

export default RequestCompleted;