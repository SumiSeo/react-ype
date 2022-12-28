import video from "../video/cook.mp4";

const FlutterComp = () => {
  return (
    <>
      <h1 className="block__link">Work in Progres...</h1>
      <div className="mainBlock__img">
        <video className="mainBlock__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default FlutterComp;
