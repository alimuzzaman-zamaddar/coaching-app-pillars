import AuthLayout from "@/Layout/AuthLayout";
import MainLayout from "@/Layout/MainLayout";
import Login from "@/Pages/AuthPages/Login";
import SignUp from "@/Pages/AuthPages/SignUp";
import BlogDetails from "@/Pages/Blog/BlogDetails";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import { About } from "@/Pages/MainPages/About";
import Coach from "@/Pages/MainPages/Coach";
import Home from "@/Pages/MainPages/Home";
import LandingPage from "@/Pages/MainPages/LandingPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // Main Layout
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/coach",
        element: <Coach/>,
      },

    ],
  },

  // Auth Layout
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
