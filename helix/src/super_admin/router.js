import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LandingPage from "./landingPage";

const router = createBrowserRouter([
    {
        path: "/*",
        element: <LandingPage />,
    },
]);

export default router;