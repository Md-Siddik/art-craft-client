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
import AllArt from './Pages/AllArt/AllArt.jsx';
import Details from './Pages/Details/Details.jsx';
import MyList from './Pages/MyList/MyList.jsx';
import Update from './Pages/Update/Update.jsx';
import AllCategory from './Pages/AllCategory/AllCategory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/artCraft')
      },
      {
        path: 'addCraft',
        element: <PrivetRoute><AddCraftItem></AddCraftItem></PrivetRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'allArt',
        element: <AllArt></AllArt>,
        loader: () => fetch('http://localhost:5000/artCraft')
      },
      {
        path: 'artCraft/:id',
        element: <PrivetRoute><Details></Details></PrivetRoute>,
        loader: () => fetch('http://localhost:5000/artCraft')
      },
      {
        path: 'myList',
        element: <PrivetRoute><MyList></MyList></PrivetRoute>
      },
      {
        path: 'update/:id',
        element: <PrivetRoute><Update></Update></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/artCraft/update/${params.id}`)
      },
      {
        path: 'allCategory/:subcategory_Name',
        element: <AllCategory></AllCategory>,
        loader: () => fetch(`http://localhost:5000/artCraft`)
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
