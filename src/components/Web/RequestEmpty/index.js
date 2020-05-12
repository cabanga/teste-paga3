import React from 'react';
import { Link } from 'react-router-dom';

import Computer from '../../../assets/pc.jpeg';
import Fall from '../../../assets/fall.svg';
import './styles.css';

function RequestEmpty() {
  return (
    <div className="productContainer">
    <div className="productContent">
      <section className="productCards">
        <h1><Link to="/">Home</Link></h1>
        
        <div className="productCard">
          <h1>Encontre o seu produto pelo código</h1>
          <input type="text" placeholder="Código"/>  
            
          <div className="cardContent">
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