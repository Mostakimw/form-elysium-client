import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";
import FormBuild from "../pages/FormBuild/FormBuild";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
// import Preview from "../pages/Preview/Preview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "build-form",
        element: (
          <PrivateRoute>
            <FormBuild />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  // {
  //   path: "preview-form/:formId",
  //   element: <Preview />,
  // },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
