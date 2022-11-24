import "./Layout.scss";

const Layout = (): JSX.Element => {
  return (
    <div className="layout">
      <div className="layout__column">
        <div className="layout__row">SUMI SEO</div>
        <div className="layout__row layout__row--content">#10</div>
        <div className="layout__row layout__row--content">#9</div>
        <div className="layout__row layout__row--content">#8</div>
        <div className="layout__row layout__row--content">#7</div>
        <div className="layout__row layout__row--content">#6</div>
        <div className="layout__row "></div>
      </div>
      <div className="layout__column">
        <div className="layout__row"></div>
        <div className="layout__row layout__row--content"></div>
        <div className="layout__row layout__row--footer">
          <span>
            • sumi seo • software engineer • frontend developer • react •
            typescript • graphql • scss • javascript(es6+) • flutter • aws •
            sumi seo • dedicated software engineer • frontend developer • react
            • typescript • graphql • scss • javascript(es6+) • flutter • aws •
            sumi seo • dedicated software engineer • frontend developer • react
            • typescript • graphql • scss • javascript(es6+) • flutter • aws
          </span>
        </div>
      </div>
      <div className="layout__column">
        <div className="layout__row">MENU</div>
        <div className="layout__row layout__row--content">#5</div>
        <div className="layout__row layout__row--content">#4</div>
        <div className="layout__row layout__row--content">#3</div>
        <div className="layout__row layout__row--content">#2</div>
        <div className="layout__row layout__row--content">#1</div>
        <div className="layout__row "></div>
      </div>
    </div>
  );
};

export default Layout;
