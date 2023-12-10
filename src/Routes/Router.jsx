import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Nav from "../Components/Nav";
import RootPage from "./RootPage";
import Create from "../Pages/Create";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
]);
