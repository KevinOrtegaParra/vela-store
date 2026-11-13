
function ProductCard({ product, onView }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Imagen */}
      <div className="h-72 overflow-hidden bg-[#eee4d8]">
        <img
          src={product.img}
          alt={`Vela aromática de ${product.name}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Información */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#3d332b]">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-[#8b7563]">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-semibold text-[#5c4033]">
            ${product.price.toLocaleString("es-CO")}
          </span>

          <button
            onClick={() => onView(product)}
            className="rounded-full bg-[#5c4033] px-4 py-2 text-sm text-white transition hover:bg-[#463026]"
          >
            Ver producto
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
