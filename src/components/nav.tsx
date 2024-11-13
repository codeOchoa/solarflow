import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toggleSearch = () => setSearchOpen(!isSearchOpen);

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container mx-auto px-4 lg:px-5 flex items-center justify-between">
        <Link href="#!">
          <a className="navbar-brand text-lg font-bold">Malec</a>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center space-x-4">
          <li><Link href="#!"><a className="nav-link">Inicio</a></Link></li>
          <li className="relative group">
            <button className="nav-link dropdown-toggle">Productos</button>
            <ul className="dropdown-menu hidden group-hover:block absolute bg-white border rounded-lg shadow-lg mt-2">
              {["Ver todos los productos", "Sale", "Tazas", "Accesorios", "Colecciones", "Gift card", "Ofertas", "Preventa", "Envio gratis"].map((item, index) => (
                <li key={index}>
                  <Link href={`./pages/${item === "Ver todos los productos" ? "product.html" : "404.html"}`}>
                    <a className="dropdown-item px-4 py-2">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link href="./pages/about.html"><a className="nav-link">¿Quiénes somos?</a></Link></li>
          <li className="relative group">
            <button className="nav-link dropdown-toggle">Ayuda</button>
            <ul className="dropdown-menu hidden group-hover:block absolute bg-white border rounded-lg shadow-lg mt-2">
              {["Localizar mi producto", "Cambio de artículos", "Preguntas frecuentes"].map((item, index) => (
                <li key={index}>
                  <Link href={`./pages/${item === "Preguntas frecuentes" ? "404.html" : "contact.html"}`}>
                    <a className="dropdown-item px-4 py-2">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Icons for search and cart */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="text-gray-500 hover:text-gray-800 lg:block hidden"
          >
            <i className="bi bi-search"></i>
          </button>

          {/* Cart Icon */}
          <Link href="./pages/cart.html">
            <a className="flex items-center text-gray-500 hover:text-gray-800">
              <i className="bi-cart-fill"></i>
              <span className="ml-1 badge bg-red-500 text-white rounded-full px-2">1</span>
            </a>
          </Link>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden text-gray-500 hover:text-gray-800">
            <i className="bi bi-list"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-75">
            <div className="flex justify-between items-center p-4">
              <form className="flex-grow">
                <input type="search" placeholder="Buscar" className="form-control" />
              </form>
              <button onClick={toggleMenu} className="text-white">
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <ul className="bg-white p-4 space-y-4">
              <li><Link href="#!"><a className="block text-gray-800">Inicio</a></Link></li>
              <li>
                <button className="w-full text-left" onClick={() => toggleSubMenu('Productos')}>Productos</button>
                <ul className="pl-4">
                  {["Ver todos los productos", "Sale", "Tazas", "Accesorios", "Colecciones", "Gift card", "Ofertas", "Preventa", "Envio gratis"].map((item, index) => (
                    <li key={index}><Link href={`./pages/${item === "Ver todos los productos" ? "product.html" : "404.html"}`}><a>{item}</a></Link></li>
                  ))}
                </ul>
              </li>
              <li><Link href="./pages/about.html"><a className="block text-gray-800">¿Quiénes somos?</a></Link></li>
              <li>
                <button className="w-full text-left" onClick={() => toggleSubMenu('Ayuda')}>Ayuda</button>
                <ul className="pl-4">
                  {["Localizar mi producto", "Cambio de artículos", "Preguntas frecuentes"].map((item, index) => (
                    <li key={index}><Link href={`./pages/${item === "Preguntas frecuentes" ? "404.html" : "contact.html"}`}><a>{item}</a></Link></li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
        
        {/* Search Form */}
        {isSearchOpen && (
          <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-4 w-full lg:w-1/3 z-10">
            <form className="flex">
              <input type="search" placeholder="Buscar" className="form-control" />
              <button onClick={toggleSearch} className="ml-2 text-gray-500">
                <i className="bi bi-x-lg"></i>
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;