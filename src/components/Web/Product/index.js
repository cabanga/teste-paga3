import React from 'react';
import { Link } from 'react-router-dom';

import Woman from '../../../assets/woman.jpg';
import Computer from '../../../assets/pc.jpeg';
import './styles.css';

function Product() {
  return (
    <div className="product">
      <aside className="product-profile">
        <img src={Woman} alt="Logotipo da empresa" />
        <span>Empresa</span>
        <h1>NCR Angola</h1>
        <span>IBAN</span>
        <h1>A06 0988747747884</h1>
        <span>Endereço</span>
        <h1>Luanda, Viana</h1>
      </aside>

      <main className="main">
        <div className="btn-back">
         <p><Link to="/">Voltar</Link></p> 
        </div>
        <div className="main-content">
          <h1>Adicionar produto a loja</h1>
          <h3>Gerencie aqui os produtos da loja</h3>
        </div>
        <div className="main-form">
          <img src={Computer} alt="Computador" />
          <form>
            <label>Nome do produto</label>
            <input type="text" value="Computador HP i7 8654" />
            <label>Código do produto</label>
            <input type="text" placeholder="Código de refêrencia" />
            <label>Preço</label>
            <input type="text" value="A0A 250.000,00"/>
          </form>
        </div>
        <div className="btn-product">
          <input type="button" value="Adicionar novo produto" />
        </div>
      </main>
    </div>
  )
}

export default Product;