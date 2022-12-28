import video from "../video/book.mp4";

const TypescriptComp = () => {
  return (
    <>
      <h1 className="block__link">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://tourmaline-naiad-b80cfa.netlify.app/"
        >
          Ninjas
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

export default TypescriptComp;
