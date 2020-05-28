import React from 'react';

import './style.css';

function ProductSearch() {
  return (
    <>
      <input
        type="search"
        placeholder="Código do produto"
      />
      <button
        className="searchButton"
      >Buscar</button>
    </>  
  )
}

export default ProductSearch;