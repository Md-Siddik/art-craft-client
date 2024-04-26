import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Error from './Pages/Error/Error.jsx';
import Login from './Pages/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
        {
            path: '/',
            element: <Home></Home>
            // loader: () => fetch('')
        },
        {
          path: '/login',
          element: <Login></Login>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
