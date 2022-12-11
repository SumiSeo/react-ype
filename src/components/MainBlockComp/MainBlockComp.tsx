import "./MainBlockComp.scss";
import space from "../../img/space.jpg";
import video from "../video/passing.mp4";

const MainBlockComp = (): JSX.Element => {
  return (
    <div className="mainBlock__img">
      {/* <img src={space} alt="space" /> */}
      <video className="mainBlock__video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainBlockComp;
