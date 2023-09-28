import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
        ]
    },
]);