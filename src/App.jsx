import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Movie from "./components/pages/MovieDetails";
import ErrorPage from "./components/pages/ErrorPage";
import Info from "./components/pages/Info";
import AboutUs from "./components/pages/AboutUs";
import OurSelection from "./components/pages/OurSelection";
import SelectionMovie from "./components/pages/SelectionMovie";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
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
      path: "/ourselection",
      element: <OurSelection />,
    },

    {
      path: "/ourselection/:id",
      element: <SelectionMovie />,
    },
    {
      path: "/ErrorPage",
      element: <ErrorPage />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
