import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaTrash } from 'react-icons/fa';

import Woman from '../../assets/woman.jpg';
import './style.css';

import api from '../../services/api';

function SellerProfile() {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  const sellerLogin = localStorage.getItem('sellerLogin');
  const sellerName = localStorage.getItem('sellerName');
  const sellerIban = localStorage.getItem('sellerIban');
  const sellerAddress = localStorage.getItem('sellerAddress');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: sellerLogin,
      }
    }).then(response => {
      setProducts(response.data);
    })
  }, [sellerLogin]);

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`products/${id}`, {
        headers: {
          Authorization: sellerLogin,
        }
      });

      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      alert('Deu merda');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
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

      <main className="main-profile">
        <header>
          <span>{sellerName}</span>

          <Link className="add-product" to="/product/new">Adicionar produto</Link>
          <button onClick={handleLogout} type="button" className="button">
          <FaPowerOff size={18} color="#F94545" />
        </button>
        </header>
        <h1>Produtos cadastrados</h1>
        <ul>
          {products.map(({
            id,
            productName,
            productDescription,
            productCode,
            productPrice,
            productInstallment
          }) => (
            <li key={id}>
            <strong>Produto</strong>
            <p>{productName}</p>
            <strong>Descrição</strong>
            <p>{productDescription}</p>
            <strong>Código do Produto</strong>
            <p>{productCode}</p>
            <strong>Número de prestações</strong>    
            <p>{productInstallment}</p>
            <strong>Preço</strong>
            <p>{Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(productPrice)}</p>

            <button onClick={() => handleDeleteProduct(id)} type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default SellerProfile;