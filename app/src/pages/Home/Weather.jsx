import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar a visibilidade do componente

  // Substitua com sua chave API do WeatherAPI
  const weatherApiKey = '19d6ecba75884cfbbf113429242906';

  // Cidade fixa para a previsão do tempo
  const city = 'Ivaiporã';

  useEffect(() => {
    // Fetch weather data para a cidade fornecida
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}&lang=pt&aqi=no`
        );
        // Corrige o nome do país para "Brasil"
        response.data.location.country = 'Brasil';
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados do clima:', error);
        setError('Erro ao buscar dados do clima. Verifique sua chave API e a cidade.');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center space-y-4">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 text-gray-600 hover:text-gray-900"
        aria-label="Fechar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" x2="6" y1="6" y2="18" />
          <line x1="6" x2="18" y1="6" y2="18" />
        </svg>
      </button>
      {loading ? (
        <div className="text-gray-700">Carregando...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <>
          <div className="flex items-center space-x-4">
            <img
              src={weather.current.condition.icon}
              alt="Ícone do clima"
              className="md:w-12 md:h-12 w-8 h-8"
            />
            <div className='flex flex-col items-center justify-center'>
              <h3 className="text-lg font-bold">{weather.location.name}</h3>
              <p className="text-sm">{weather.current.condition.text}</p>
              <p className="text-2xl">{Math.round(weather.current.temp_c)}°C</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{weather.location.country}</p>
        </>
      )}
    </div>
  );
};

export default Weather;
