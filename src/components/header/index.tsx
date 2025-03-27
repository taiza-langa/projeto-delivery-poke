export default function Header() {
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
        </nav>

        {/* Ícones */}
        <div className="flex items-center space-x-4 relative top-[-5px] ">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/30/c3672f/search--v1.png"
            alt="search"
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
          className="cursor-pointer transition-transform duration-300 hover:scale-110"/>
        </div>
      </section>
    </header>
  );
}
