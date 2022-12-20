import "./LinkedInComp.scss";
import Title from "../Title/Title";
import video from "../video/listening.mp4";

const BlockComp = () => {
  return (
    <>
      <Title />
      <div className="mainBlock__img">
        <video className="mainBlock__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default BlockComp;
