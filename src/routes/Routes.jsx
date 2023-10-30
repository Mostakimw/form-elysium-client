import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "build-form",
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Home />,
      },
    ],
  },
]);

export default router;
