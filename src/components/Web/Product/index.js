import React, { useState } from 'react';

import Woman from '../../../assets/woman.jpg';
import './styles.css';

import api from '../../../services/api';

function Product() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const sellerName = localStorage.getItem('sellerName');
  const sellerIban = localStorage.getItem('sellerIban');
  const sellerAddress = localStorage.getItem('sellerAddress');

  async function handleSubmitProduct(e) {
    e.preventDefault();

    setProductName('');
    setProductPrice('');
    setProductPrice('');
    setProductCode('');
    setProductImage('');
    setProductDescription('');

    const data = {
      productName,
      productPrice,
      productCode,
      productImage,
      productDescription
    };

    try {
      const response = await api.post('products', data)
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="product">
      <aside className="product-profile">
        <img src={Woman} alt="Logotipo da empresa" />
        <span>Empresa</span>
        <h1>{sellerName}</h1>
        <span>IBAN</span>
        <h1>{sellerIban}</h1>
        <span>Endereço</span>
        <h1>{sellerAddress}</h1>
      </aside>

      <main className="main">
        <div className="main-content">
          <h1>Adicione seus produtos aqui</h1>
          <h3>Gerencie aqui os produtos da loja</h3>
        </div>
        <div className="main-form">
          <form onSubmit={handleSubmitProduct}>
            <label>Nome do produto</label>
            <input
              type="text"
              name="productName"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              placeholder="Computador HP i7 8654"
            />
            <label>Preço</label>
            <input
              type="text"
              name="productPrice"
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
              placeholder="A0A 250.000,00"
            />
            <label>Código do produto</label>
            <input
              type="text"
              name="productCode"
              value={productCode}
              onChange={e => setProductCode(e.target.value)}
              placeholder="Código de refêrencia"
            />
            <label>Imagem do produto</label>
            <input
              type="file"
              name="productImage"
              value={productImage}
              onChange={e => setProductImage(e.target.value)}
              id="image"
            />
            <label>Descrição do produto</label>
            <textarea
              name="productDescription"
              value={productDescription}
              onChange={e => setProductDescription(e.target.value)}
              id="description"
              cols="30"
              rows="10"
              placeholder="Breve discrição do produto"
            ></textarea>
            <div className="btn-product">
              <button type="submit">
                Adicionar novo produto
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Product;