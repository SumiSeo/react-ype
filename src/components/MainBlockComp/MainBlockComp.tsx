import "./MainBlockComp.scss";
import video from "../video/passing.mp4";

const MainBlockComp = (): JSX.Element => {
  return (
    <div>
      <div className="mainBlock__img">
        <video className="mainBlock__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MainBlockComp;
