import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Movie from "./components/MovieDetails";
import ErrorPage from "./components/pages/ErrorPage";
import Info from "./components/pages/Info";
import AboutUs from "./components/pages/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About-Us",
      element: <AboutUs />,
    },
    {
      path: "/Movies/:id",
      element: <Movie />,
    },
    {
      path: "/Info",
      element: <Info />,
    },
    {
      path: "/ErrorPage",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
