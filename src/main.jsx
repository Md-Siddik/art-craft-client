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
import Register from './Register/Register.jsx';
import AuthProvider from './AuthProviders/AuthProvider.jsx';
import AddCraftItem from './Pages/AddCraftItem/AddCraftItem.jsx';
import PrivetRoute from './PrivetRouter/PrivetRouter.jsx';

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
        path: '/addCraft',
        element: <PrivetRoute><AddCraftItem></AddCraftItem></PrivetRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
