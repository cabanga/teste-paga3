import React  from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaTrash, FaShoppingBasket } from 'react-icons/fa';

import Woman from '../../assets/woman.jpg';
import './style.css';

function UserProfile() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="user">
      <aside className="user-profile">
        <div className="user-picture">
          <img src={Woman} alt="Logotipo da empresa" />
        </div>
        <p>
          <Link to="/edit-info-user">Editar perfil</Link>
        </p>
        <div className="user-info">
          <h3>Informações pessoais</h3>
          <span>Nome completo</span>
          <h4>Fernando dos Santos</h4>
          <span>Contato telefónico</span>
          <h4>923215717</h4>
          <span>Idade</span>
          <h4>23 anos</h4>
          <span>Gênero</span>
          <h4>Masculino</h4>
        </div>
        <div className="user-info">
          <h3>Entedidade empregadora</h3>
          <span>Nome</span>
          <h4>Paga3</h4>
          <span>Função</span>
          <h4>Desenvolvedor</h4>
          <span>Valor do sálario</span>
          <h4>5000.000, 00 AOA</h4>
          <span>Possui crédito</span>
          <h4>Sim</h4>
          <span>Valor crédito</span>
          <h4>100.000, 00 AOA</h4>
        </div>
        <div className="user-info">
          <h3>Informações bancarias</h3>
          <span>Banco em que recebe o sálario</span>
          <h4>Banco Bic</h4>
          <span>Número da conta</span>
          <h4>937534424252</h4>
          <span>Número do IBAN</span>
          <h4>A06222229376335332</h4>
        </div>
      </aside>

      <main className="main">
        <header>
          <Link className="btn-add" to="/comprar">
            <FaShoppingBasket size={32} color="#F1F3F6"/>
           <span>Comprar</span>
          </Link>
          <button onClick={handleLogout} type="button" className="button">
          <FaPowerOff size={18} color="#F94545" />
        </button>
        </header>

         <h1>Todos os produtos adquiridos</h1>
        <ul>
          <li>
            <strong>Nome do produto</strong>
            <p>Computador HP i7 8654</p>
            <strong>Categória</strong>
            <p>250.000,00 AOA</p>
            <strong>Loja</strong>
            <p>NCR Angola - Talatona</p>
            <strong>Número de prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>Computador HP i7 8654</p>
            <strong>Valor do produto</strong>
            <p>Informática</p>
            <strong>Loja</strong>
            <p>NCR Angola - Talatona</p>
            <strong>Número de prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>Computador HP i7 8654</p>
            <strong>Valor do produto</strong>
            <p>250.000,00 AOA</p>
            <strong>Loja</strong>
            <p>NCR Angola - Talatona</p>
            <strong>Número de prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
          <li>
            <strong>Nome do produto</strong>
            <p>Computador HP i7 8654</p>
            <strong>Valor do produto</strong>
            <p>250.000,00 AOA</p>
            <strong>Loja</strong>
            <p>NCR Angola - Talatona</p>
            <strong>Número de prestações</strong>
            <p>3</p>
            <button type="button">
              <FaTrash size={20} color="#F94545"/>
            </button>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default UserProfile;