import { useEffect, useState } from "react";
import "./SCSSCompnent.scss";
import scss1 from "../../img/scss1.png";
import scss2 from "../../img/scss2.png";
import scss3 from "../../img/scss3.png";

const SCSSComp = () => {
  const images = [scss1, scss2, scss3];
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
          rel="noreferrer"
          target="_blank"
          href="https://sumiseo.github.io/wonhundred-clonecoding/"
        >
          Won Hundred
        </a>
      </h1>
      <div className="block__img">
        <img src={images[imageIndex]} alt="space" />
      </div>
    </>
  );
};

export default SCSSComp;
