import "../scss/main.scss";
import Layout from "../Layout/Layout";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

const App = (): JSX.Element => {
  return <div></div>;
};

export default App;
