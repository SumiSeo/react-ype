import "../scss/main.scss";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ErrorPage/ErroprPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
]);

const App = (): JSX.Element => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
