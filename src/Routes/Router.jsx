import { createBrowserRouter, } from "react-router-dom";
import { ErrorPage, Home, MainLayout } from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <h1>About</h1>
            },
            {}
        ]
    },
]);

export default router;
