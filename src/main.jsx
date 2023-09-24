import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Foods from './components/Foods/Foods.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
import MealDetails from './components/MealDetails/MealDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'foods',
        element: <Foods></Foods>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'),
      },
      {
        path: 'mealDetails/:mealId',
        element: <MealDetails></MealDetails>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
      },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      },

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
