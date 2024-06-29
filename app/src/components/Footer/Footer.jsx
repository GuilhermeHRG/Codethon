function Footer() {
  return (
    <footer className="flex flex-col justify-between min-h-96 w-full bg-blue-600 ">
      <div className="flex flex-col gap-4 mt-16 mx-20">
        <header>
          <h2 className="text-2xl md:text-5xl font-bold">
            Explore vale do ivaí
          </h2>
        </header>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="text-2xl">
              exploreivai@gmail.com
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl">
              (43) 99999-9999
            </a>
          </li>
          <li>
            <a href="#" className="text-2xl">
              Av. Brasil, 1250
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center bg-white w-full p-3">
        <p className="text-lg text-center font-medium">
          &copy; 2024 Explore Vale do Ivaí&reg;. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
