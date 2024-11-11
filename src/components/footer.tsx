const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4 text-center">
      <div className="container">
        {/* Sección de enlaces */}
        <section className="mt-5">
          <div className="row justify-center text-center pt-5">
            <div className="col-md-2">
              <h6 className="uppercase font-bold">
                <a href="#!" className="text-white no-underline">Inicio</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="uppercase font-bold">
                <a href="/pages/product" className="text-white no-underline">Productos</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="uppercase font-bold">
                <a href="/pages/about" className="text-white no-underline">¿Quienes somos?</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="uppercase font-bold">
                <a href="/pages/contact" className="text-white no-underline">Contacto</a>
              </h6>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        {/* Sección de descripción */}
        <section className="mb-5">
          <div className="row justify-center">
            <div className="lg:w-8/12">
              <p>
                Empresa especializada en cerámica, velas de soja aromáticas y con el mejor precio y calidad del mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de redes sociales */}
        <section className="text-center mb-5">
          <a href="https://www.facebook.com/profile.php?id=100091698780289" className="text-white mx-4 no-underline">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://x.com/PabloDKx" className="text-white mx-4 no-underline">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://www.google.com.ar/" className="text-white mx-4 no-underline">
            <i className="bi bi-google"></i>
          </a>
          <a href="https://www.instagram.com/malec_velas/" className="text-white mx-4 no-underline">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/pablo-ochoa-0b9428301/" className="text-white mx-4 no-underline">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/codeOchoa" className="text-white mx-4 no-underline">
            <i className="bi bi-github"></i>
          </a>
        </section>
      </div>

      {/* Derechos y enlaces adicionales */}
      <div className="p-3">
        <span>&copy; 2024 Copyright: Malec. Todos los derechos reservados.</span>
        <div>
          Defensa de las y los consumidores. Para reclamos{' '}
          <a
            href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario"
            className="text-white no-underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            ingrese aquí
          </a>
        </div>
        <a href="https://kissaccesorios.empretienda.com.ar/" className="text-white no-underline">Test</a>
      </div>
    </footer>
  );
};

export default Footer;
