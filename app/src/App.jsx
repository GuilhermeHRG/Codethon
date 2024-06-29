// src/App.jsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Auth/Auth';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import NewsDetails from './pages/NewsDetails/NewsDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllNews from './components/AllNews/AllNews';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <PrivateRoute element={<Admin />} /> },
  { path: '/noticia/:id', element: <NewsDetails /> },
  { path:'/todas-as-noticias', element:<AllNews />} 
]);

export default function App() {
  return (
    <AuthProvider>  {/* AuthProvider deve envolver RouterProvider */}
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}
