import "./LinkedInComp.scss";
import Title from "../Title/Title";
import video from "../video/listening.mp4";

const LinkedInComp = () => {
  return (
    <>
      <Title
        arr="&#8593;"
        page="https://www.linkedin.com/in/sumiseo/"
        name="linkedin"
      />
      <div className="mainBlock__img">
        <video className="mainBlock__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default LinkedInComp;
