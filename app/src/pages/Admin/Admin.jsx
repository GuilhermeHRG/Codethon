import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }, [selectedFile]);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar o formulário
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#3b82f6] to-blue-900 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Cadastro de Notícia</h2>
        
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Título da Notícia:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título da notícia"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Autor:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Digite o nome do autor"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descrição:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição da notícia"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">Foto da Notícia:</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
          />
        </div>

        {preview && (
          <div className="mb-4">
            <img src={preview} alt="Preview" className="w-full h-auto rounded-md object-cover" />
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-auto bg-blue-900 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Cadastrar Notícia
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;