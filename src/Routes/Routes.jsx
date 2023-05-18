import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/Toys/AllToys/AllToys";
import MyToys from "../pages/Toys/MyToys/MyToys";
import AddAToy from "../pages/Toys/AddAToys/AddAToy";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

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
        },
        {
            path: 'all-toys',
            element: <AllToys></AllToys>,
            loader: () => fetch('https://toy-crate-x-server.vercel.app/allToys')
        },
        {
            path: 'my-toys',
            element: <MyToys></MyToys>
        },
        {
            path: 'add-a-toy',
            element: <AddAToy></AddAToy>
        },
        {
            path: 'details/:id',
            element:  <PrivateRoute>
                <ToyDetails></ToyDetails>
            </PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-crate-x-server.vercel.app/details/${params.id}`)
        }
      ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
  ]);

  

  export default router;