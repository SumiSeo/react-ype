import React, { lazy, Suspense } from "react";
import "../scss/main.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "../Layout/Layout";
// import LoadingComp from "../LoadingComp/LoadingComp";
// import LinkedInComp from "../LinkedInComp/LinkedInComp";
// import GitHubComp from "../GitHubComp/GitHubComp";
// import DefaultComp from "../DefaultComp/DefaultComp";
// import MobileComp from "../MobileComp/MobileComp";
// import EmailComp from "../EmailComp/EmailComp";
// import FlutterComp from "../FlutterComp/FlutterComp";
// import TypescriptComp from "../TypescriptComp/TypescriptComp";
// import SCSSComp from "../SCSSComp/SCSSComp";
// import JavascriptComp from "../JavascriptComp/JavascriptComp";
// import ReactComp from "../ReactComp/ReactComp";
// import RestAPIComp from "../RestAPIComp/RestAPIComp";

const LinkedInComp = lazy(() => import("../LinkedInComp/LinkedInComp"));
const GitHubComp = lazy(() => import("../GitHubComp/GitHubComp"));
const DefaultComp = lazy(() => import("../DefaultComp/DefaultComp"));
const LoadingComp = lazy(() => import("../LoadingComp/LoadingComp"));
const MobileComp = lazy(() => import("../MobileComp/MobileComp"));
const EmailComp = lazy(() => import("../EmailComp/EmailComp"));
const FlutterComp = lazy(() => import("../FlutterComp/FlutterComp"));
const TypescriptComp = lazy(() => import("../TypescriptComp/TypescriptComp"));
const SCSSComp = lazy(() => import("../SCSSComp/SCSSComp"));
const JavascriptComp = lazy(() => import("../JavascriptComp/JavascriptComp"));
const ReactComp = lazy(() => import("../ReactComp/ReactComp"));
const RestAPIComp = lazy(() => import("../RestAPIComp/RestAPIComp"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<DefaultComp />} />
      <Route path="/LinkedIn" element={<LinkedInComp />} />
      <Route path="/GitHub" element={<GitHubComp />} />
      <Route path="/Mobile" element={<MobileComp />} />
      <Route path="/Email" element={<EmailComp />} />
      <Route path="/Javascript" element={<JavascriptComp />} />
      <Route path="/Scss" element={<SCSSComp />} />
      <Route path="/React" element={<ReactComp />} />
      <Route path="/JavaScript&RestAPI" element={<RestAPIComp />} />
      <Route path="/Typescript" element={<TypescriptComp />} />
      <Route path="/Flutter" element={<FlutterComp />} />
    </Route>
  )
);

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingComp />}>
      <RouterProvider router={router} />{" "}
    </Suspense>
  );
};

export default App;
