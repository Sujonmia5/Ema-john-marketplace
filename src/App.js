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

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />,
      children: [
        {
          path: '/',
          loader: dataLoader,
          element: <Shop />
        },
        {
          path: '/home', element: <Home />
        },
        {
          path: '/shop',
          loader: dataLoader,
          element: <Shop />
        },
        {
          path: '/orders',
          loader: dataLoader,
          element: <Orders />
        },
        {
          path: '/inventory', element: <Inventory />
        },
        {
          path: '/about', element: <About />
        },
        {
          path: '/login', element: <Login />
        },
        {
          path: '/register', element: <Register />
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
