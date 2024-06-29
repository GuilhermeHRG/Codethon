function Footer() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Seção de Informações */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore  Ivaí</h2>
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                <a href="mailto:exploreivai@gmail.com" className="hover:underline">
                  exploreivai@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:(43)99999-9999" className="hover:underline">
                  (43) 99999-9999
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Av. Brasil, 1250
                </a>
              </li>
            </ul>
          </div>

          {/* Seção de Redes Sociais */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 4.8 3.3 8.9 7.7 10.3v-7.2H7.5v-3h2.2V8.9c0-2.2 1.3-3.4 3.3-3.4.9 0 1.8.1 1.8.1v2h-1c-1.1 0-1.5.7-1.5 1.4v1.5h2.5l-.4 3h-2.1v7.2c4.4-1.4 7.7-5.5 7.7-10.3z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 2.2c3.5 0 3.9.1 5.3.8 1.4.6 2.4 1.6 3 3 0.7 1.4.8 1.8.8 5.3s-.1 3.9-.8 5.3c-.6 1.4-1.6 2.4-3 3-1.4.7-1.8.8-5.3.8s-3.9-.1-5.3-.8c-1.4-.6-2.4-1.6-3-3-.7-1.4-.8-1.8-.8-5.3s.1-3.9.8-5.3c.6-1.4 1.6-2.4 3-3 1.4-.7 1.8-.8 5.3-.8zm0-2.2c-3.6 0-4.1.01-5.5.1-1.4.1-2.6.5-3.7 1.2-1.1.7-2 1.6-2.6 2.7-.7 1.1-1.1 2.4-1.2 3.7-.1 1.4-.1 1.9-.1 5.5s.01 4.1.1 5.5c.1 1.4.5 2.6 1.2 3.7.7 1.1 1.6 2 2.7 2.6 1.1.7 2.4 1.1 3.7 1.2 1.4.1 1.9.1 5.5.1s4.1-.01 5.5-.1c1.4-.1 2.6-.5 3.7-1.2 1.1-.7 2-1.6 2.6-2.7.7-1.1 1.1-2.4 1.2-3.7.1-1.4.1-1.9.1-5.5s-.01-4.1-.1-5.5c-.1-1.4-.5-2.6-1.2-3.7-1.1-.7-2.4-1.1-3.7-1.2-1.4-.1-1.9-.1-5.5-.1zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm3.7-7.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M23 3a10.4 10.4 0 01-2.9.8A4.9 4.9 0 0022.4 2a10.1 10.1 0 01-3.1 1.2A4.8 4.8 0 0016.6 1c-2.7 0-4.8 2.1-4.8 4.7 0 .4 0 .7.1 1.1C7.7 7 4.1 5.3 1.7 2.2c-.4.6-.6 1.3-.6 2 0 1.4.7 2.7 1.8 3.4a4.8 4.8 0 01-2.2-.6v.1c0 2.3 1.6 4.2 3.7 4.6-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1a4.8 4.8 0 004.5 3.3A9.6 9.6 0 010 19.5a13.7 13.7 0 007.6 2.2c9.1 0 14.1-7.5 14.1-14 0-.2 0-.4 0-.6a10.4 10.4 0 002.6-2.6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-900 mt-8 pt-4">
          <div className="bg-blue-950 w-full rounded h-full p-1">
          <p className="text-center text-lg font-medium">
            &copy; 2024 Explore Vale do Ivaí&reg;. Todos os direitos reservados.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
