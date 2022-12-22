import Title from "../Title/Title";
import video from "../video/water.mp4";

const MobileComp = () => {
  return (
    <>
      <Title arr="&#8594;" page="https://github.com/SumiSeo" name="mobile" />
      <div className="mainBlock__img">
        <video className="mainBlock__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default MobileComp;
