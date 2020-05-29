import React, { useEffect, useState } from 'react';

import './style.css';
import api from '../../services/api';

function ProductSearch() {
  const [search, setSearch] = useState('');
  const product_code = localStorage.getItem('productCode');

  useEffect(() => {
    api.get('/find/product', {
      headers: {
        Authorization: product_code,
      }
    }).then(response => {
      setSearch(response.data)
    })
  }, []);

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(e => setSearch(e.target.value))}
        placeholder="Código do produto"
      />
      <button
        className="searchButton"
      >Buscar</button>
    </>  
  )
}

export default ProductSearch;