import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Pages/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/news/:id",
                element: <PrivateRoute>
                    <NewsDetails></NewsDetails>
                </PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;