import "../scss/main.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ErrorPage/ErroprPage";
import LinkedInComp from "../LinkedInComp/LinkedInComp";
import GitHubComp from "../GitHubComp/GitHubComp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LinkedInComp />} />
      <Route path="/GitHub" element={<GitHubComp />} />
    </Route>
  )
);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
