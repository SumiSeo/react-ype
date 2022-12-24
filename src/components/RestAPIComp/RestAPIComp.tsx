import video from "../video/weather2.mp4";

const RestAPIComp = () => {
  return (
    <>
      <h1 className="block__link">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://sumiseo.github.io/weather-up/"
        >
          Weather Up!
        </a>
      </h1>
      <div className="mainBlock__img">
        <video className="mainBlock__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default RestAPIComp;
