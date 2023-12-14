import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout';
import App from '../App';
import Legal from './Legal/Legal';
import Minting from './Minting/Minting';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App/>,
        index: true,
      },
      {
        path: "/minting",
        element: <Minting/>,
        index: true,
      },
      {
        path: "/legal",
        element: <Legal/>,
        index: true,
      },
    ]
  },
]);
