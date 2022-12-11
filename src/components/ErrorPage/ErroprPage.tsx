import { useRouteError } from "react-router-dom";
import video from "../video/passing.mp4";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div id="error-page">
        <video className="error-page__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ErrorPage;
