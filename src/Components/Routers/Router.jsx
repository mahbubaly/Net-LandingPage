import { createBrowserRouter } from "react-router-dom";
import HomeLandPage from "../Home/HomeLandpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLandPage />,
    },
]);

export default router;