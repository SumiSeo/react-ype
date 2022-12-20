import Title from "../Title/Title";
import video from "../video/home.mp4";

const MobileComp = () => {
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

export default MobileComp;
