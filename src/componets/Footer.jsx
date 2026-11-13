function Footer() {
    return (
        <footer id="contacto" className="bg-[#3d332b] px-6 py-12 text-[#f8f5f0]">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

                <div>
                    <h2 className="text-2xl font-bold">Aroma</h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#d8cabe]">
                        Velas aromáticas creadas para transformar tus espacios
                        y convertir cada momento en una experiencia especial.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold">Navegación</h3>

                    <div className="mt-4 flex flex-col gap-2 text-sm text-[#d8cabe]">
                        <a href="/#inicio" className="hover:text-white">
                            Inicio
                        </a>

                        <a href="/#productos" className="hover:text-white">
                            Productos
                        </a>

                        <a href="/#nosotros" className="hover:text-white">
                            Nosotros
                        </a>

                        <a href="/#contacto" className="hover:text-white">
                            Contacto
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold">Contáctanos</h3>

                    <div className="mt-4 space-y-3 text-sm text-[#d8cabe]">

                        <a
                            href="https://wa.me/573023969413"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition hover:text-white"
                        >
                            WhatsApp
                        </a>

                        <a
                            href="https://instagram.com/miguelangelmartinezortega1016"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition hover:text-white"
                        >
                            Instagram
                        </a>

                        <a
                            href="mailto:miguelangelmartinezortega1016@gmail.com"
                            className="block transition hover:text-white"
                        >
                            contacto@aroma.com
                        </a>

                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 max-w-7xl border-t border-[#65564c] pt-6 text-center text-sm text-[#bbaea4]">
                © 2026 Aroma. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;