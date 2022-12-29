import { useState } from "react";
import "./AboutComp.scss";

const AboutComp = (): JSX.Element => {
  const [clickedAbout, setClickedAbout] = useState<boolean>(false);

  const onClick = () => {
    setClickedAbout(!clickedAbout);
    console.log(clickedAbout);
  };

  const createAboutComp = (): JSX.Element => {
    return clickedAbout ? (
      <div onClick={onClick}>
        <div className="about">
          <div className="about__column">SUMI SEO</div>
          <div className="about__column"></div>
        </div>
      </div>
    ) : (
      <div onClick={onClick}>ABOUT</div>
    );
  };
  return <div className="presentation">{createAboutComp()}</div>;
};

export default AboutComp;
