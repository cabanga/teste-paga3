import React from 'react';

import './styles.css';

function EditProfile() {
  return (
    <>
      <div className="register-container">
      <div className="content">
        <form>
          <input
            type="text"
            placeholder="Nome da Organização"
          />
          <input
            type="email"
            placeholder="Email da Organização"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <input
            type="tel"
            placeholder="Telefone"
          />
          <button className="button" type="submit">Salvar</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default EditProfile;
