import { ShoppingBag, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e8ddd0] bg-[#f8f5f0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide text-[#5c4033]">
          Aroma
        </a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#inicio"
            className="text-sm text-[#3d332b] transition hover:text-[#b8955a]"
          >
            Inicio
          </a>

          <a
            href="#categorias"
            className="text-sm text-[#3d332b] transition hover:text-[#b8955a]"
          >
            Categorías
          </a>

          <a
            href="#productos"
            className="text-sm text-[#3d332b] transition hover:text-[#b8955a]"
          >
            Productos
          </a>

          <a
            href="#nosotros"
            className="text-sm text-[#3d332b] transition hover:text-[#b8955a]"
          >
            Nosotros
          </a>

          <a
            href="#contacto"
            className="text-sm text-[#3d332b] transition hover:text-[#b8955a]"
          >
            Contacto
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="relative text-[#5c4033] transition hover:text-[#b8955a]"
            aria-label="Carrito"
          >
            <ShoppingBag size={22} />

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#5c4033] text-[10px] text-white">
              0
            </span>
          </button>

          <button
            className="text-[#5c4033] md:hidden"
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;