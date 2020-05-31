import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

import api from '../../services/api';

function NewProduct() {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productInstallment, setProductInstallment] = useState('');

  const history = useHistory();

  const sellerLogin = localStorage.getItem('sellerLogin');

  async function handleNewProduct(e) {
    e.preventDefault();

    const data = {
      productName,
      productCode,
      productPrice,
      productInstallment
    };

    try {
      await api.post('products', data, {
        headers: {
          Authorization: sellerLogin,
        }
      });

      history.push('/seller/dashboard');
    } catch (error) {
      alert('Não foi possível, tente de novo');
    }
  }

  return (
    <div className="new-product">
      <div className="content">
        <section>
          <Link to="/seller/dashboard" className="back-link">
            <FiArrowLeft size={20} color="#F94545"/>
           Voltar no Perfil
          </Link>
        <h1>Cadastrar um novo produto</h1>
        </section>
        <form onSubmit={handleNewProduct}>
          <input
            type="text"
            value={productName}
            onChange={e => setProductName(e.target.value)}  
            placeholder="Nome do produto" 
          />
          <input
            type="text"
            value={productCode}
            onChange={e => setProductCode(e.target.value)}  
            placeholder="Adicione o código do produto"
          />
          <input
            type="text"
            value={productPrice}
            onChange={e => setProductPrice(e.target.value)}  
            placeholder="Valor em kwanza"
          />
          <input
            type="text"
            value={productInstallment}
            onChange={e => setProductInstallment(e.target.value)}  
            placeholder="Número de prestações"
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default NewProduct;