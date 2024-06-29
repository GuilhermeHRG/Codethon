// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../../Auth/Auth';

function Login() {
  const { login, error } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <main className="bg-gradient-to-br from-blue-500 to-blue-700 min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="hidden md:flex justify-center items-center min-h-screen w-full md:w-1/2 bg-white shadow-lg p-8">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-6">
              Bem-vindo de volta!
            </h2>
            <p className="text-gray-700 text-xl">
              Entre para acessar sua conta e continuar escrevendo as últimas notícias.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-screen w-full md:w-1/2">
          <div className="bg-white backdrop-blur-xl bg-filter bg-opacity-95 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
              Login
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-xl font-medium text-gray-700"
                >
                  Nome de Usuário
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full p-4 border border-gray-300 bg-white text-xl rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="SeuNomeDeUsuario"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-xl font-medium text-gray-700"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full p-4 border border-gray-300 bg-white text-xl rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="........"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Lembrar-me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-xl font-medium p-4 border border-transparent rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
