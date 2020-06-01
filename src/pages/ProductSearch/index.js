import React, { useState } from 'react';

import './style.css';

function ProductSearch() {
  const [search, setSearch] = useState('');

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