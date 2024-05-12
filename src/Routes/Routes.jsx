import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Authentication/Register";
import ErrorPage from "../Components/ErrorPage";

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
    ],
  },
]);

export default router;
