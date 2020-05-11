import React from 'react';
import { Link } from 'react-router-dom';

import Woman from '../../../assets/woman.jpg';
import Computer from '../../../assets/pc.jpeg';

import './styles.css';

function ProductFive() {
  return (
    <div className="product-five">
      <div className="product-content-five">
        <aside className="product-profile-five">
          <div className="product-content-five">
            <img src={Woman} alt="Mulher" />
            <span>Gerente</span>
            <h1>Debora Leandro</h1>
            <p>Redifinir palavra-passe</p>
          </div>
          <div>
            <p className="btn-out-five"><Link to="/">Sair</Link></p>
          </div>
        </aside>
      </div>
      <main className="main-five">
        <div className="main-description-five">
          <h1>Descrição do Produto</h1>
          <div className="main-card-five">
            <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do Produto</li>
              <p>Computador HP i7 8654</p>
              <li>Nome do Solicitador</li>
              <p>Debora Leandro</p>
              <li>Preço</li>
              <p>A0A 250.000,00</p>
              <li>Número de prestações</li>
              <p>3</p>
            </ul>
          </div>
          <div className="main-text">
            <p>Recebi o Pagamento de 14.000 kzs o equivalente a 1/3 do valor do produto</p>
          </div>
          <div className="btn-validate-five">
            <input type="button" value="Recebi e valido esta compra"/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductFive;