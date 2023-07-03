import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home/Home";
import SpecificProject from "../pages/Projects/SpecificProject/SpecificProject";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
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
