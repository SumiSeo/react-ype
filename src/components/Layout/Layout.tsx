import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = (): JSX.Element => {
  const [right, setRight] = useState<string[]>(["#5", "#4", "#3", "#2", "#1"]);
  const [left, setLeft] = useState<string[]>(["#10", "#9", "#8", "#7", "#6"]);

  const profile =
    " • sumi seo • software engineer • frontend developer • react •typescript • graphql • scss • javascript(es6+) • flutter • aws • sumi seo • dedicated software engineer • frontend developer • react • typescript • graphql • scss • javascript(es6+) • flutter • aws • sumi seo • dedicated software engineer • frontend developer • react• typescript • graphql • scss • javascript(es6+) • flutter • aws";

  const onMouseOut = () => {
    setLeft(["#10", "#9", "#8", "#7", "#6"]);
    setRight(["#5", "#4", "#3", "#2", "#1"]);
  };

  const onMouseOverLeft = (i: number) => {
    switch (i) {
      case 0:
        setLeft(["LinkedIn", "#9", "#8", "#7", "#6"]);
        break;
      case 1:
        setLeft(["#10", "GitHub", "#8", "#7", "#6"]);
        break;
      case 2:
        setLeft(["#10", "#9", "Mobile", "#7", "#6"]);
        break;
      case 3:
        setLeft(["#10", "#9", "#8", "Email", "#6"]);
        break;
      case 4:
        setLeft(["#10", "#9", "#8", "#7", "Flutter"]);
        break;
      default:
        setLeft([...left]);
    }
  };
  const onMouseOverRight = (i: number) => {
    switch (i) {
      case 0:
        setRight(["SCSS", "#4", "#3", "#2", "#1"]);
        break;
      case 1:
        setRight(["#5", "JavaScript&RestAPI", "#3", "#2", "#1"]);
        break;
      case 2:
        setRight(["#5", "#4", "Javascript", "#2", "#1"]);
        break;
      case 3:
        setRight(["#5", "#4", "#3", "TypeScript", "#1"]);
        break;
      case 4:
        setRight(["#5", "#4", "#3", "#2", "React"]);
        break;
      default:
        setRight([...right]);
    }
  };

  return (
    <>
      {/* <div className="cursor"></div> */}
      <div className="layout">
        <div className="layout__column">
          <div className="layout__row">
            <NavLink to="/" end className="layout__name">
              SUMI SEO
            </NavLink>
          </div>
          {left.map((name, i) => {
            return (
              <NavLink
                to={name}
                onMouseOut={onMouseOut}
                onMouseOver={() => onMouseOverLeft(i)}
                key={name}
                end
                className="layout__row layout__row--content"
              >
                {name}
              </NavLink>
            );
          })}
          <div className="layout__row "></div>
        </div>
        <div className="layout__column">
          <div className="layout__row"></div>
          <div className="layout__row layout__row--content layout__main">
            <Outlet />
          </div>
          <div className="layout__row layout__row--footer">
            <span>{profile}</span>
          </div>
        </div>
        <div className="layout__column">
          <div className="layout__row layout__row--content">ABOUT</div>
          {right.map((name, i) => {
            return (
              <NavLink
                to={name}
                end
                onMouseOut={onMouseOut}
                onMouseOver={() => onMouseOverRight(i)}
                key={name}
                className="layout__row layout__row--content"
              >
                {name}
              </NavLink>
            );
          })}
          <div className="layout__row "></div>
        </div>
      </div>
    </>
  );
};

export default Layout;
