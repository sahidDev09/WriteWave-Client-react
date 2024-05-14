import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Authentication/Register";
import ErrorPage from "../Components/ErrorPage";
import BlogDetails from "../Pages/BlogDetails";
import AllBlogs from "../Pages/Blogs/AllBlogs";
import AddBlogs from "../Pages/Blogs/AddBlogs";
import FeaturedBlogs from "../Pages/Blogs/FeaturedBlogs";
import Wishlish from "../Pages/Blogs/Wishlish";
import PrivateRoutes from "../Private/PrivateRoutes";
import UpdateBlogs from "../Pages/Blogs/UpdateBlogs";

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
        element: (
          <PrivateRoutes>
            <BlogDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateBlogs />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.id}`),
      },

      {
        path: "/allblogs",
        element: <AllBlogs />,
      },
      {
        path: "/addBlogs",
        element: <AddBlogs />,
      },
      {
        path: "/featuredblogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoutes>
            <Wishlish />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
