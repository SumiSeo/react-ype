import "./Layout.scss";

const Layout = (): JSX.Element => {
  return (
    <div className="layout">
      <div className="layout__column">
        <div className="layout__row">SUMI SEO</div>
        <div className="layout__row layout__row--content">1</div>
        <div className="layout__row layout__row--content">2</div>
        <div className="layout__row layout__row--content">3</div>
        <div className="layout__row layout__row--content">4</div>
        <div className="layout__row layout__row--content">5</div>
        <div className="layout__row "></div>
      </div>
      <div className="layout__column">
        <div className="layout__row"></div>
        <div className="layout__row layout__row--content"></div>
        <div className="layout__row">Hello@ </div>
      </div>
      <div className="layout__column">
        <div className="layout__row">MENU</div>
        <div className="layout__row layout__row--content">1</div>
        <div className="layout__row layout__row--content">2</div>
        <div className="layout__row layout__row--content">3</div>
        <div className="layout__row layout__row--content">4</div>
        <div className="layout__row layout__row--content">5</div>
        <div className="layout__row "></div>
      </div>
    </div>
  );
};

export default Layout;
