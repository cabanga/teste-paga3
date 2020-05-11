import React from 'react';
import { Link } from 'react-router-dom';

import Woman from '../../../assets/woman.jpg';
import Computer from '../../../assets/pc.jpeg';
import './styles.css';

function Product() {
  return (
    <div className="product-one">
      <div className="product-content-one">
        <aside className="product-profile-one">
          <div className="product-content-one">
            <img src={Woman} alt="Mulher" />
            <span>Gerente</span>
            <h1>Debora Leandro</h1>
            <p>Redifinir palavra-passe</p>
          </div>
          <div>
            <p className="btn-out"><Link to="/">Sair</Link></p>
          </div>
        </aside>
      </div>
      <main className="main-one">
        <div className="main-content-one">
          <h1>Adicionar produto a loja</h1>
          <h3>Gerencie aqui os produtos da loja</h3>
        </div>
        <div className="main-description">
          <div className="main-card">
            <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do Produto</li>
              <p>Computador HP i7 8654</p>
              <li>Nome do Solicitador</li>
              <p>Debora Leandro</p>
              <li>Preço</li>
              <p>A0A 250.000,00</p>
            </ul>
          </div>
          <div className="btn-validate">
            <input type="button" value="Validar"/>
          </div>
        </div>
        <div className="main-description">
          <div className="main-card">
            <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do Produto</li>
              <p>Computador HP i7 8654</p>
              <li>Nome do Solicitador</li>
              <p>Debora Leandro</p>
              <li>Preço</li>
              <p>A0A 250.000,00</p>
            </ul>
          </div>
          <div className="btn-validate">
            <input type="button" value="Validar"/>
          </div>
        </div>
        <div className="main-description">
         <div className="main-card">
            <img src={Computer} alt="Computador" />
            <ul>
              <li>Nome do Produto</li>
              <p>Computador HP i7 8654</p>
              <li>Nome do Solicitador</li>
              <p>Debora Leandro</p>
              <li>Preço</li>
              <p>A0A 250.000,00</p>
            </ul>
          </div>
          <div className="btn-validate">
            <input type="button" value="Validar"/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Product;