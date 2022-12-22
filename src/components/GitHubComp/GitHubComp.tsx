import Title from "../Title/Title";
import video from "../video/raining.mp4";

const BlockComp = () => {
  return (
    <>
      <Title arr="&#8599;" page="https://github.com/SumiSeo" name="github" />
      <video className="mainBlock__video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default BlockComp;
