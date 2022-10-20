import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Main from './Layout/Main';
import Inventory from './Components/Inventory/Inventory'
import Orders from './Components/Orders/Orders'
import Home from './Components/Home/Home';
import { dataLoader } from './Loader/Loader';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />,
      children: [
        {
          path: '/',
          loader: dataLoader,
          element: <Home />
        },
        {
          path: '/home',
          loader: dataLoader,
          element: <Home />
        },
        {
          path: '/shop',
          loader: dataLoader,
          element: <PrivateRoute><Shop /></PrivateRoute>
        },
        {
          path: '/orders',
          loader: dataLoader,
          element: <PrivateRoute><Orders /></PrivateRoute>
        },
        {
          path: '/inventory', element: <PrivateRoute><Inventory /></PrivateRoute>
        },
        {
          path: '/about', element: <About />
        },
        {
          path: '/login', element: <Login />
        },
        {
          path: '/register', element: <Register />
        },
        {
          path: '/shipping', element: <PrivateRoute><Shipping /></PrivateRoute>
        }

      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
