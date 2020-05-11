import React from 'react';
import { Link } from 'react-router-dom';

import Computer from '../../../assets/pc.jpeg';
import './styles.css';

function RequestCompleted() {
  return (
    <div className="product-container">
    <div className="product-content">
      <section className="product-cards">
        <h1><Link to="/">Home</Link></h1>
        
        <div className="product-card">
          <h1>Encontre o seu produto pelo código</h1>
          <input type="text" placeholder="Código"/>  
            
          <div className="card-content">
            <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do produto</li>
              <p>Computador HP i7 8654</p>
              <li>Valor do produto</li>
              <p>250.000,00 AOA</p>
              <li>Loja</li>
              <p>NCR Angola</p>

              <select name="product" id="product">
                <option value="prestacoes">Número de prestações</option>
                <option value="tres">3</option>
                <option value="seis">6</option>  
            </select>  
            </ul>  
          </div>
            
          <button>Adicionar</button>
        </div>
      </section>
        
      <section className="product-inffo">
          <h1>Lista de Produtos</h1>
          <h3><Link to="/">Esvaziar Lista</Link></h3>
          <div className="inffo-card">
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
          <div className="inffo-card">
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
          <div className="inffo-card">
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
          <div className="btn">
            <button className="button">Solicitar</button>
          </div>
      </section>  
    </div>
    </div>
  )
}

export default RequestCompleted;