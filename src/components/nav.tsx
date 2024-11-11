import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({ products: false, help: false });

  const toggleDropdown = (name) => {
    setIsDropdownOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#!">
          <a className="text-lg font-semibold">Malec</a>
        </Link>
        <div className="hidden lg:flex space-x-6">
          <Link href="#!"><a className="text-gray-700">Inicio</a></Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("products")}
              className="text-gray-700"
            >
              Productos
            </button>
            {isDropdownOpen.products && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded">
                <Link href="/pages/product"><a className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Ver todos los productos</a></Link>
                <hr className="border-gray-200" />
                {["Sale", "Tazas", "Accesorios", "Colecciones", "Gift card", "Ofertas", "Preventa", "Envio gratis"].map((item, index) => (
                  <Link key={index} href="/pages/404">
                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-200">{item}</a>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/pages/about"><a className="text-gray-700">¿Quiénes somos?</a></Link>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("help")}
              className="text-gray-700"
            >
              Ayuda
            </button>
            {isDropdownOpen.help && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded">
                {["Localizar mi producto", "Cambio de artículos", "Preguntas frecuentes"].map((item, index) => (
                  <Link key={index} href="/pages/contact">
                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-200">{item}</a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <i className="bi bi-search"></i>
          </button>
          <Link href="/pages/cart">
            <a className="relative">
              <i className="bi bi-cart-fill"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">1</span>
            </a>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-100 shadow-lg">
          <Link href="#!"><a className="block px-4 py-2 text-gray-700">Inicio</a></Link>
          <Link href="/pages/product"><a className="block px-4 py-2 text-gray-700">Productos</a></Link>
          <Link href="/pages/about"><a className="block px-4 py-2 text-gray-700">¿Quiénes somos?</a></Link>
          <Link href="/pages/contact"><a className="block px-4 py-2 text-gray-700">Ayuda</a></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
