import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Auth/Auth';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import NewsDetails from './pages/NewsDetails/NewsDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <PrivateRoute element={<Admin />} /> },
  { path: '/noticia/:id', element: <NewsDetails /> }
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}
