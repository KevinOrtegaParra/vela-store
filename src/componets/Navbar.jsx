import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e8ddd0] bg-[#f8f5f0]/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">

        {/* Navbar principal */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-wide text-[#5c4033]"
          >
            Aroma
          </a>

          {/* Menú desktop */}
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

          {/* Acciones */}
          <div className="flex items-center gap-4">

            {/* Carrito */}
            <button
              className="relative text-[#5c4033] transition hover:text-[#b8955a]"
              aria-label="Carrito"
            >
              <ShoppingBag size={22} />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#5c4033] text-[10px] text-white">
                0
              </span>
            </button>

            {/* Botón menú móvil */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#5c4033] md:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="border-t border-[#e8ddd0] py-5 md:hidden">

            <div className="flex flex-col gap-1">

              <a
                href="#inicio"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[#3d332b] transition hover:bg-[#eee4d8] hover:text-[#5c4033]"
              >
                Inicio
              </a>

              <a
                href="#categorias"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[#3d332b] transition hover:bg-[#eee4d8] hover:text-[#5c4033]"
              >
                Categorías
              </a>

              <a
                href="#productos"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[#3d332b] transition hover:bg-[#eee4d8] hover:text-[#5c4033]"
              >
                Productos
              </a>

              <a
                href="#nosotros"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[#3d332b] transition hover:bg-[#eee4d8] hover:text-[#5c4033]"
              >
                Nosotros
              </a>

              <a
                href="#contacto"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[#3d332b] transition hover:bg-[#eee4d8] hover:text-[#5c4033]"
              >
                Contacto
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;