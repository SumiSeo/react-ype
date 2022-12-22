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
import DefaultComp from "../DefaultComp/DefaultComp";
import MobileComp from "../MobileComp/MobileComp";
import EmailComp from "../EmailComp/EmailComp";
import FlutterComp from "../FlutterComp/FlutterComp";
import TypescriptComp from "../TypescriptComp/TypescriptComp";
import SCSSComp from "../SCSSComp/SCSSComp";
import PHPComp from "../PHPComp/PHPComp";
import ReactComp from "../ReactComp/ReactComp";
import RestAPIComp from "../RestAPIComp/RestAPIComp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<DefaultComp />} />
      <Route path="/LinkedIn" element={<LinkedInComp />} />
      <Route path="/GitHub" element={<GitHubComp />} />
      <Route path="/Mobile" element={<MobileComp />} />
      <Route path="/Email" element={<EmailComp />} />
      <Route path="/Php" element={<PHPComp />} />
      <Route path="/Scss" element={<SCSSComp />} />
      <Route path="/React" element={<ReactComp />} />
      <Route path="/JavaScript&RestAPI" element={<RestAPIComp />} />
      <Route path="/Typescript" element={<TypescriptComp />} />
      <Route path="/Flutter" element={<FlutterComp />} />
    </Route>
  )
);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
