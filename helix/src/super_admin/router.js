import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AddTenant from "./AddTenant";
import EditTenant from "./EditTenant";
import LandingPage from "./landingPage";
import Tenants from "./Tenants";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/tenants",
        element: <Tenants />,
    },
    {
        path: "/tenants/add",
        element: <AddTenant />,
    },
    {
        path: "/tenants/:id",
        element: <EditTenant />,
    },
]);

export default router;