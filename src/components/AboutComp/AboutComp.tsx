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
              Dedicated software engineer more than 1 year of professional
              experiences designing, developing and solving real-world problems.
              I am proficient in both web and mobile application language using
              Typescript, React, Apollo-GraphQL, Flutter, Python, AWS, and
              third-party APIs.
            </div>
          </div>
          <div className="about__column">
            <div className="about__box about__title">
              Favorite Medium, 2021. 10 ~ 2022.11
            </div>
            <div className="about__box about__description">
              <p>
                • Develop real-time dashboard with React, TypesScript,
                GraphQL-Hasura, and AWS
              </p>
              <p>
                • Contribute to develop the application from R&D phase to
                production phase
              </p>
              <p>• Optimization of code quality, bug tracking and correction</p>
              <br />
              <p>
                • Build mobile application with OOP programming patterns using
                Flutter-GetX Pattern
              </p>
              <p>
                • Using diverse collaboration tool with geologically distributed
                team : GitHub, Swagger and Jira
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div onClick={onClick}>ABOUT</div>
    );
  };
  return <div className="presentation">{createAboutComp()}</div>;
};

export default AboutComp;
