import React from "react";
import MainBlockComp from "../MainBlockComp/MainBlockComp";
import "./Layout.scss";

const Layout = (): JSX.Element => {
  const left = ["#10", "#9", "#8", "#7", "#6"];
  const right = ["#5", "#4", "#3", "#2", "#1"];
  const profile =
    " • sumi seo • software engineer • frontend developer • react •typescript • graphql • scss • javascript(es6+) • flutter • aws • sumi seo • dedicated software engineer • frontend developer • react • typescript • graphql • scss • javascript(es6+) • flutter • aws • sumi seo • dedicated software engineer • frontend developer • react• typescript • graphql • scss • javascript(es6+) • flutter • aws";
  const onMouseOver = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log(e);
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
        4
      </div>
      <div className="layout__column">
        <div className="layout__row layout__row--content">MENU</div>
        {right.map((name) => {
          return (
            <li
              onMouseOver={onMouseOver}
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
