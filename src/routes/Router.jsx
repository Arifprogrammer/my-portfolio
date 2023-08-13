import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Errorpage/Errorpage";
import SpecificProject from "../pages/Home/ProjectsContainer/SpecificProject";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:sectionId",
        element: <Home />,
      },
      {
        path: "projects/:id",
        element: <SpecificProject />,
      },
    ],
  },
]);

export default Router;
