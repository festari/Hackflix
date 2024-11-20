import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Info from "./components/Info";
import AboutUs from "./components/AboutUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Info",
      element: <Info />,
    },
    {
      path: "/About-Us",
      element: <AboutUs />,
    },
    {
      path: "/Movies/:id",
      element: <Movie />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
