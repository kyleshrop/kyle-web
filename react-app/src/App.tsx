import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import IndexRoute from './routes/indexRoute/IndexRoute'
import BioRoute from './routes/bioRoute/BioRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexRoute />,
  },
  {
    path: "/bio",
    element: <BioRoute />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
