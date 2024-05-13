import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Authentication/Register";
import ErrorPage from "../Components/ErrorPage";
import BlogDetails from "../Pages/BlogDetails";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`),
      },
    ],
  },
]);

export default router;
