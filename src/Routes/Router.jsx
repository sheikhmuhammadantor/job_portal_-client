import { createBrowserRouter, } from "react-router-dom";
import { ErrorPage, Home, Login, MainLayout, Register } from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {}
        ]
    },
]);

export default router;
