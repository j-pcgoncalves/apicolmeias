import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import App from './App.tsx'
import './index.css'
import Contactos from './components/contactos/Contactos.tsx';
import Home from './components/home/Home.tsx';
import Produtos from './components/produtos/Produtos.tsx';
import NotFound from './components/notFound/NotFound.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contactos",
        element: <Contactos />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
    ],
  }
])

const theme = extendTheme({
  colors: {
    primary: {
      500: "#B83806",
      600: "#B81806"
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
