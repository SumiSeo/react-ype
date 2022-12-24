import video from "../video/xmas.mp4";

const JavascriptComp = () => {
  return (
    <>
      <h1 className="block__link">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://sumiseo.github.io/mfm/"
        >
          Harry Potter
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

export default JavascriptComp;
