import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'sign-in',
            element: <SignIn></SignIn>
        },
        {
            path: 'sign-up',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
  ]);

  

  export default router;