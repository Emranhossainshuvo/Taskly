import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import AboutPage from "../Pages/About/About";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import ProfileComponent from "../Pages/ProfileComponent/ProfileComponent";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>, 
      children: [
        {
            path: '/', 
            element: <Home></Home>
        }, 
        {
            path: '/login', 
            element: <Login></Login>
        }, 
        {
          path: '/register', 
          element: <Register></Register>
        }, 
        {
          path: '/dashboard', 
          element: <Dashboard></Dashboard>
        }, 
        {
          path: '/about', 
          element: <AboutPage></AboutPage>
        }, 
        {
          path: '/services', 
          element: <ServicesPage></ServicesPage>
        }, 
        {
          path: '/profile', 
          element: <ProfileComponent></ProfileComponent>
        }
      ]
    },
  ]);