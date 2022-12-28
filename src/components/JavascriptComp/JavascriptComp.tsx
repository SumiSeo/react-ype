import { useEffect, useState } from "react";
// import "./JavascriptCompnent.scss";
import harrypotter1 from "../../img/harrypotter1.jpg";
import harrypotter2 from "../../img/harrypotter2.jpg";
import harrypotter3 from "../../img/harrypotter3.jpg";

const JavascriptComp = () => {
  const images = [harrypotter1, harrypotter2, harrypotter3];
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 600);
  }, [images.length]);
  return (
    <>
      <h1 className="block__link">
        <a
          className="block__title"
          rel="noreferrer"
          target="_blank"
          href="https://sumiseo.github.io/mfm/"
        >
          Harry potter
        </a>
      </h1>
      <div className="block__img">
        <img src={images[imageIndex]} alt="space" />
      </div>
    </>
  );
};

export default JavascriptComp;
