import React, { useEffect } from "react";

function Navigation({ isOpen, onClose }) {
  const translateClass = isOpen ? "translate-x-0" : "-translate-x-full";
  const overlayClass = isOpen ? "opacity-75" : "opacity-0 pointer-events-none";

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleItemClick = () => {
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black ${overlayClass} backdrop-blur-2xl backdrop-filter transition-opacity duration-1000 ease-in-out`}
        onClick={handleOverlayClick}
      />

      <div
        className={`fixed inset-y-0 left-0 z-40 flex w-full items-center justify-center bg-[#3b82f6] shadow-lg transition-transform duration-1000 ease-in-out md:w-1/3 ${translateClass}`}
      >
        <nav className="m-8 flex w-full flex-col gap-4">
          <hr className="my-8 w-full border-2 border-white" />
          <ul className="flex flex-col gap-4">
            <li className="mb-4">
              <a
                className="text-4xl md:text-5xl font-medium text-white hover:underline"
                href="#politics"
                onClick={handleItemClick}
              >
                Política
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-4xl md:text-5xl font-medium text-white hover:underline"
                href="#world"
                onClick={handleItemClick}
              >
                Mundo
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-4xl md:text-5xl font-medium text-white hover:underline"
                href="#business"
                onClick={handleItemClick}
              >
                Negócios
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-4xl md:text-5xl font-medium text-white hover:underline"
                href="#technology"
                onClick={handleItemClick}
              >
                Tecnologia
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-4xl md:text-5xl font-medium text-white hover:underline"
                href="#sports"
                onClick={handleItemClick}
              >
                Esportes
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-4xl md:text-5xl font-medium text-white hover:underline"
                href="#entertainment"
                onClick={handleItemClick}
              >
                Entretenimento
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-4xl md:text-5xl font-medium text-white hover:underline"
                href="#science"
                onClick={handleItemClick}
              >
                Ciência
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-4xl md:text-5xl font-medium text-white hover:underline"
                href="#health"
                onClick={handleItemClick}
              >
                Saúde
              </a>
            </li>
          </ul>
          <hr className="my-8 w-full border-2 border-white" />
        </nav>
      </div>
    </>
  );
}

export default Navigation;
