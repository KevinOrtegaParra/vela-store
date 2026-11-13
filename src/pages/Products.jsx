
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../componets/ProductCard";
import ProductModal from "../componets/ProductModal";

function Products() {
  const [filter, setFilter] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filters = ["Todos", "Vela", "Jabón"];

  const filteredProducts =
    filter === "Todos"
      ? products
      : products.filter((product) => product.type === filter);

  return (
    <>
      <main className="min-h-screen bg-[#f8f5f0] px-6 py-16">

        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b8955a]">
              NUESTRA COLECCIÓN
            </span>

            <h1 className="mt-3 text-4xl font-semibold text-[#3d332b]">
              Nuestros productos
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[#8b7563]">
              Descubre nuestras velas y jabones artesanales,
              creados para acompañar tus momentos especiales.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-6 py-2.5 text-sm transition ${
                  filter === item
                    ? "bg-[#5c4033] text-white"
                    : "border border-[#d9cbbd] text-[#5c4033] hover:bg-[#eee4d8]"
                }`}
              >
                {item === "Vela" ? "Velas" : item === "Jabón" ? "Jabones" : item}
              </button>
            ))}
          </div>

          {/* Productos */}
          {filteredProducts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onView={setSelectedProduct}
                />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-[#8b7563]">
              Próximamente tendremos nuevos productos.
            </p>
          )}

        </div>
      </main>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default Products;
