import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <Admin /> },
])

export default function App() {
  return <RouterProvider router={routes} />
}
