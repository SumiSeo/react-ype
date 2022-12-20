import Title from "../Title/Title";
import video from "../video/raining.mp4";

const BlockComp = () => {
  return (
    <>
      <Title />
      <video className="mainBlock__video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default BlockComp;
