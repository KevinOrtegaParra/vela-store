import Navbar from "../componets/Navbar";
import ProductCard from "../componets/ProductCard";
import Footer from "../componets/Footer"//../components/Footer";

const products = [
  {
    id: 1,
    img: "/image/lavanda.png",
    name: "Lavanda",
    aroma: "Floral",
    description: "Un aroma suave para momentos de relajación.",
    price: 35000,
  },
  {
    id: 2,
    img: "/image/vainilla.png",
    name: "Vainilla",
    aroma: "Dulce",
    description: "Un aroma cálido y acogedor para tu hogar.",
    price: 32000,
  },
  {
    id: 3,
    img: "/image/canela.png",
    name: "Canela",
    aroma: "Especiado",
    description: "Una fragancia cálida perfecta para crear ambiente.",
    price: 38000,
  },
  {
    id: 4,
    img: "/image/jazmin.png",
    name: "Jazmín",
    aroma: "Floral",
    description: "Una fragancia elegante y delicada.",
    price: 35000,
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Navbar />

      <main>
        {/* HERO */}
        <section
          id="inicio"
          className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2"
        >
          {/* Texto */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b8955a]">
              Velas artesanales
            </span>

            <h1 className="mt-5 max-w-xl text-5xl font-bold leading-tight text-[#5c4033] md:text-7xl">
              Aromas que transforman tus espacios.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#6f6259]">
              Velas aromáticas hechas cuidadosamente para crear
              momentos de calma, bienestar y conexión.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#productos"
                className="rounded-full bg-[#5c4033] px-7 py-3.5 font-medium text-white transition hover:bg-[#463026]"
              >
                Ver productos
              </a>

              <a
                href="#nosotros"
                className="rounded-full border border-[#5c4033] px-7 py-3.5 font-medium text-[#5c4033] transition hover:bg-[#5c4033] hover:text-white"
              >
                Nuestra historia
              </a>
            </div>
          </div>

          {/* Imagen / visual */}
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/image/hero.png"
              alt="Velas aromáticas artesanales"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section id="categorias" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8955a]">
                Encuentra tu aroma
              </span>

              <h2 className="mt-3 text-4xl font-bold text-[#5c4033]">
                Una fragancia para cada momento
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["🌿", "Relajantes", "Aromas para desconectar."],
                ["🌸", "Florales", "Delicados y elegantes."],
                ["🍊", "Frutales", "Frescos y vibrantes."],
                ["🪵", "Amaderados", "Cálidos y profundos."],
              ].map(([icon, title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-[#f8f5f0] p-8 text-center transition hover:-translate-y-1"
                >
                  <div className="text-4xl">{icon}</div>

                  <h3 className="mt-5 text-xl font-semibold text-[#5c4033]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm text-[#8b7563]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTOS */}
        <section id="productos" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8955a]">
                  Nuestra colección
                </span>

                <h2 className="mt-3 text-4xl font-bold text-[#5c4033]">
                  Nuestros favoritos
                </h2>
              </div>

              <button className="w-fit text-sm font-semibold text-[#5c4033] underline underline-offset-4">
                Ver todos los productos
              </button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="bg-[#e8ddd0] px-6 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

            <div className="flex min-h-[400px] items-center justify-center rounded-[2rem] bg-[#d8c3aa]">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/image/nuestraEsencia.png"
                  alt="Velas aromáticas artesanales"
                  className="h-[520px] w-full object-cover"
                />
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b8955a]">
                Nuestra esencia
              </span>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#5c4033]">
                Más que una vela, una experiencia.
              </h2>

              <p className="mt-6 leading-8 text-[#6f6259]">
                Creamos velas aromáticas pensando en esos pequeños
                momentos que hacen especial cada día.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <h3 className="font-semibold text-[#5c4033]">
                    Hechas con cuidado
                  </h3>

                  <p className="mt-1 text-sm text-[#75685e]">
                    Cada vela es elaborada cuidadosamente.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#5c4033]">
                    Aromas seleccionados
                  </h3>

                  <p className="mt-1 text-sm text-[#75685e]">
                    Fragancias pensadas para diferentes ambientes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#5c4033]">
                    Un detalle especial
                  </h3>

                  <p className="mt-1 text-sm text-[#75685e]">
                    Perfectas para regalar y crear recuerdos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#5c4033] px-6 py-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b978]">
              Encuentra tu aroma
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
              Crea el ambiente perfecto para cada momento.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[#d8cabe]">
              Descubre nuestra colección de velas aromáticas.
            </p>

            <a
              href="#productos"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-[#5c4033] transition hover:bg-[#f0e8df]"
            >
              Explorar colección
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;