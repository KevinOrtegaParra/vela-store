
import { X } from "lucide-react";

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-[#f8f5f0] shadow-2xl md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-[#5c4033] shadow"
        >
          <X size={20} />
        </button>

        {/* Imagen */}
        <div className="h-72 md:h-full">
          <img
            src={product.img}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Información */}
        <div className="flex flex-col justify-center p-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8955a]">
            {product.type} · {product.aroma}
          </span>

          <h2
            id="product-modal-title"
            className="mt-3 text-2xl font-semibold text-[#3d332b]"
          >
            {product.name}
          </h2>

          <p className="mt-4 leading-7 text-[#8b7563]">
            {product.description}
          </p>

          <p className="mt-6 text-2xl font-bold text-[#5c4033]">
            ${product.price.toLocaleString("es-CO")}
          </p>

          <button
            onClick={onClose}
            className="mt-7 rounded-full bg-[#5c4033] px-6 py-3 font-medium text-white transition hover:bg-[#463026]"
          >
            Seguir explorando
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
