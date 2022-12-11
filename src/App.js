import './App.css';
import Index from './Paginas/Index'
import Error from './Componentes/Error/Error';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />
  },
  {
    path: "/buscador",
    element: <Index />,
    errorElement: <Error />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;