import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path: '/', 
            element: <Home></Home>
        }
      ]
    },
  ]);