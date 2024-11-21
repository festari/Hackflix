import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Movie from "./components/MovieDetails";
import ErrorPage from "./components/ErrorPage";
import Info from "./components/Info";
import AboutUs from "./components/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stars from "./components/stars";

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
