import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import NoticiaDetalhes from './pages/NoticiaDetalhes/NoticiaDetalhes';
import PrivateRoute from './PrivateRoute/PrivateRoute'; // Ajuste o caminho conforme necessário
import { AuthProvider } from './Auth/Auth'; // Ajuste o caminho conforme necessário

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <PrivateRoute element={<Admin />} /> },
  { path: '/noticia/:id', element: <NoticiaDetalhes /> }
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}
