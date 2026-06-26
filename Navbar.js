import React from 'react';

function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo" onClick={e => { e.preventDefault(); onNavigate('home'); }}>
        <img 
          src="/logo.png" 
          alt="Логотип" 
          style={{ width: '300px', height: '140px', objectFit: 'contain' }} 
        />
      </a>

      <ul className="navbar-links">
        <li>
          <a href="/" className={currentPage === 'home' ? 'active' : ''}
            onClick={e => { e.preventDefault(); onNavigate('home'); }}>
            Главная
          </a>
        </li>
        <li>
          <a href="/catalog" className={currentPage === 'catalog' ? 'active' : ''}
            onClick={e => { e.preventDefault(); onNavigate('catalog'); }}>
            Питомцы
          </a>
        </li>
        <li>
          <a href="/about" className={currentPage === 'about' ? 'active' : ''}
            onClick={e => { e.preventDefault(); onNavigate('about'); }}>
            О сайте
          </a>
        </li>
        <li>
          <a href="/help" className={currentPage === 'help' ? 'active' : ''}
            onClick={e => { e.preventDefault(); onNavigate('help'); }}>
            Помощь приюту
          </a>
        </li>
      </ul>

      <button className="btn-register">Зарегистрироваться</button>
    </nav>
  );
}

export default Navbar;
