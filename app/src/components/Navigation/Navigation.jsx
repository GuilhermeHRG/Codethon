// src/components/Navigation/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-white bg-opacity-90 backdrop-blur-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-40`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 5.586l5.293-4.293a1 1 0 0 1 1.414 1.414L9.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414L8 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center space-y-6 py-10 text-xl font-medium">
        <Link
          to="/"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          onClick={onClose}
        >
          Início
        </Link>
        <Link
          to="/about"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          onClick={onClose}
        >
          Todas as Notícias
        </Link>
        <Link
          to="/services"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          onClick={onClose}
        >
          Você Pode Gostar
        </Link>
        <Link
          to="/contact"
          className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          onClick={onClose}
        >
          Contato
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
