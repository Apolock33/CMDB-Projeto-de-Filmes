import App from "../App";
import MovieDetails from "../components/movieDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/movie/:id",
        element: <MovieDetails />
    }
]);

export default router;