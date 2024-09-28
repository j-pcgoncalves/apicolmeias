import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
