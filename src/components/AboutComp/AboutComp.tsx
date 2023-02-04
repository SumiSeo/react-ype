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
          <div className="about__column">
            <div className="about__box about__title">About</div>
            <div className="about__box about__description">
              Dedicated software engineer with professional experiences
              designing, developing and solving real-world problems. I am
              proficient in both web and mobile application language using
              Typescript, React, Apollo-GraphQL, Flutter, Python, AWS, and
              third-party APIs.
            </div>
          </div>
          <div className="about__column">
            <div className="about__box about__title">
              Fluuent, 2023.02 ~ Present
            </div>
            <div className="about__box about__description">
              <p>1. Frontend Developer</p>
            </div>
          </div>
          <div className="about__column">
            <div className="about__box about__title">
              Favorite Medium, 2021.10 ~ 2022.11
            </div>
            <div className="about__box about__description">
              <p>1. Software Engineer</p>
              <p>
                2. Develop real-time dashboard with React, TypesScript,
                GraphQL-Hasura, and AWS
              </p>
              <p>
                3. Contribute to develop the application from R&D phase to
                production phase
              </p>
            </div>
          </div>
          <div className="about__column">
            <div className="about__box about__title">
              Mazars in Korea, 2020.12 ~ 2021.04
            </div>
            <div className="about__box about__description">
              <p>1. Marketing & Communication Intern</p>
            </div>
          </div>
          <div className="about__column">
            <div className="about__box about__title">
              Korea National University of Arts, 2013.03 ~ 2018.02
            </div>
          </div>
          {/* <div className="about__column">
            <div className="about__box about__title">Contact</div>
            <div className="about__box about__description">
              <p>equepem@gmail.com</p>
            </div>
          </div> */}
        </div>
      </div>
    ) : (
      <div onClick={onClick}>ABOUT</div>
    );
  };
  return <div className="presentation">{createAboutComp()}</div>;
};

export default AboutComp;
