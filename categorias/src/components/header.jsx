import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => (
  <div id="container-header">
    <header>
      <img src="/assets/logo.png" alt="Logo StarCine" id="logo-Starcine" />

      <nav className="dropdown">
        <button className="dropbtn">
          <span id="title-menu">Categoria <i className="fas fa-chevron-down"></i></span>
        </button>
        <div className="dropdown-content">
          <a href="#">Animes</a>
          <a href="#">Filmes</a>
          <a href="#">Séries</a>
        </div>
      </nav>

      <div className="search-container">
        <input type="search" placeholder="Buscar..." />
        <img src="./assets/search.svg" alt="Buscar" className="search-icon" />
      </div>

      <a href="#" className="favoritos-link">
        <i className="fa-regular fa-bookmark" id="fav_svg"></i>
        <span id="fav_title">Lista de Favoritos</span>
      </a>

      <nav className="dropdown-user">
        <div id="icon-account">
          <i className="fas fa-user user-icon"></i>
        </div>
        <button className="dropbtn-user">
          <i className="fas fa-chevron-down"></i>
        </button>
        <div className="user-dropdown-content">
          <a href="#">Perfil</a>
          <a href="#">Sair</a>
        </div>
      </nav>

      <div id="theme">
        <input
          type="checkbox"
          className="checkbox"
          id="chk"
          onChange={toggleTheme}
          checked={!isDarkMode}
        />
        <label className="turn-on" htmlFor="chk">
          <i className="fas fa-moon icon-moon"></i>
          <i className="fas fa-sun icon-sun"></i>
          <div className="ball"></div>
        </label>
      </div>
    </header>
  </div>
);

export default Header;
