import "../scss/main.scss";
import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../ErrorPage/ErroprPage";
import BlockComp from "../BlockComp/BlockComp";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
       <Route index element={<BlockComp/>}/>
    </Route>
  )
);

const App = (): JSX.Element => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
