'use client'

import { useState } from "react";

export default function Header() {

  const [mostrarBusca, setMostrarBusca] = useState(false);
  const [textoBusca, setTextoBusca] = useState("");


  function buscar() {
    setMostrarBusca(!mostrarBusca);
  }

  function mostraTexto() {
    alert(" O texto selecionado é " + textoBusca);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white e border-b border-gray-200 h-20">
      <section className="flex items-center justify-between px-6 py-0 h-full">
        {/* Logo */}
        <h1 className="uppercase relative top-[-5px]">
          <span className="text-[#bcb349] text-3xl font-bold">PO</span>
          <span className="text-[#9a2d5d] text-3xl font-bold">KE</span>
        </h1>

        {/* Navbar */}
        <nav className="navbar space-x-6 text-gray-800 text-s relative top-[-5px]">
          <a href="#home">
            Home
          </a>
          <a href="#about" className="hover:text-[#9a2d5d]">
            Sobre Nós
          </a>
          <a href="#menu" className="hover:text-[#9a2d5d]">
            Menu
          </a>
          <a href="#endereco" className="hover:text-[#9a2d5d]">
            Endereço
          </a>
        </nav>

        {mostrarBusca && (
          <div className="mt-30 flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-[300px]">
            <img
              src="https://img.icons8.com/ios-filled/24/c3672f/search--v1.png"
              alt="Buscar"
              className="w-5 h-5 opacity-80"
            />
            <input
              type="text"
              value={textoBusca}
              onChange={(e) => setTextoBusca(e.target.value)}
              placeholder="Buscar..."
              className="flex-1 text-sm text-gray-800 bg-transparent outline-none placeholder-gray-400"
            />
            <button
              onClick={mostraTexto}
              className="text-[#c3672f] font-semibold hover:underline text-sm"
            >
              OK
            </button>
          </div>
        )}

        {/* Ícones */}
        <div className="flex items-center space-x-4 relative top-[-5px] ">

          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/30/c3672f/search--v1.png"
            alt="search"
            onClick={buscar}
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/c3672f/shopping-cart--v1.png"
            alt="shopping-cart"
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
          />
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/c3672f/user--v1.png"
            alt="user--v1"
            className="cursor-pointer transition-transform duration-300 hover:scale-110" />
        </div>
      </section>
    </header>
  );
}
