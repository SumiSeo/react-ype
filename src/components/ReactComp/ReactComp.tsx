import { useEffect, useState } from "react";
// import "./JavascriptCompnent.scss";
import world1 from "../../img/world1.jpg";
import world2 from "../../img/world2.jpg";
import world3 from "../../img/world3.jpg";

const ReactComp = () => {
  const images = [world1, world2, world3];
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
          href="https://cosmic-sopapillas-83b536.netlify.app/"
        >
          Cadre du Monde
        </a>
      </h1>
      <div className="block__img">
        <img src={images[imageIndex]} alt="space" />
      </div>
    </>
  );
};

export default ReactComp;
