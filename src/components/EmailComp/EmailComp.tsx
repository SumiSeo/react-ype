import Title from "../Title/Title";
import video from "../video/coffee.mp4";

const EmailComp = () => {
  return (
    <>
      <Title arr="&#8595;" page="https://github.com/SumiSeo" name="email" />
      <div className="mainBlock__img">
        <video className="mainBlock__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default EmailComp;
