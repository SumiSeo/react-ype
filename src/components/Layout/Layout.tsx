import React, { useState, useEffect } from "react";
import MainBlockComp from "../MainBlockComp/MainBlockComp";
import "./Layout.scss";

const Layout = (): JSX.Element => {
  const [right, setRight] = useState<string[]>(["#5", "#4", "#3", "#2", "#1"]);
  const left = ["#10", "#9", "#8", "#7", "#6"];

  const profile =
    " • sumi seo • software engineer • frontend developer • react •typescript • graphql • scss • javascript(es6+) • flutter • aws • sumi seo • dedicated software engineer • frontend developer • react • typescript • graphql • scss • javascript(es6+) • flutter • aws • sumi seo • dedicated software engineer • frontend developer • react• typescript • graphql • scss • javascript(es6+) • flutter • aws";

  const onMouseOver = (name: string, i: number) => {
    switch (i) {
      case 0:
        setRight(["React", "#4", "#3", "#2", "#1"]);
        break;
      case 1:
        setRight(["#5", "JavaScript/RestAPI", "#3", "#2", "#1"]);
        break;
      case 2:
        setRight(["#5", "#4", "PHP", "#2", "#1"]);
        break;
      case 3:
        setRight(["#5", "#4", "#3", "TypeScript", "#1"]);
        break;
      case 4:
        setRight(["#5", "#4", "#3", "#2", "SCSS"]);
        break;
      default:
        setRight([...right]);
    }
  };

  const onMouseOut = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e);
    console.log("mouse out");
    //select correct event of list and change it when it is hover
    setRight(["#5", "#4", "#3", "#2", "#1"]);
  };

  return (
    <div className="layout">
      <div className="layout__column">
        <div className="layout__row">SUMI SEO</div>
        {left.map((name) => {
          return (
            <li key={name} className="layout__row layout__row--content">
              {name}
            </li>
          );
        })}
        <div className="layout__row "></div>
      </div>
      <div className="layout__column">
        <div className="layout__row"></div>
        <div className="layout__row layout__row--content layout__main">
          <MainBlockComp />
        </div>
        <div className="layout__row layout__row--footer">
          <span>{profile}</span>
        </div>
      </div>
      <div className="layout__column">
        <div className="layout__row layout__row--content">MENU</div>
        {right.map((name, i) => {
          return (
            <li
              onMouseOut={onMouseOut}
              onMouseOver={() => onMouseOver(name, i)}
              key={name}
              className="layout__row layout__row--content"
            >
              {name}
            </li>
          );
        })}
        <div className="layout__row "></div>
      </div>
    </div>
  );
};

export default Layout;
