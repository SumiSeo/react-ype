import "./Layout.scss";

const Layout = (): JSX.Element => {
  return (
    // <div className="layout">
    //   <div className="layout__column">
    //     <div className="layout__row">1</div>
    //     <div className="layout__row">2</div>
    //     <div className="layout__row">3</div>
    //     <div className="layout__row">4</div>
    //     <div className="layout__row">5</div>
    //     <div className="layout__row">6</div>
    //   </div>
    //   <div className="layout__column">
    //     <div className="layout__row">1</div>
    //     <div className="layout__row"></div>
    //     <div className="layout__row">3</div>
    //   </div>
    //   <div className="layout__column">
    //     <div className="layout__row">1</div>
    //     <div className="layout__row">2</div>
    //     <div className="layout__row">3</div>
    //     <div className="layout__row">4</div>
    //     <div className="layout__row">5</div>
    //     <div className="layout__row">6</div>
    //   </div>
    // </div>
    <div className="layout">
      <div className="layout__column"></div>
      <div className="layout__column"></div>
      <div className="layout__column"></div>
      <div className="layout__column"></div>
      <div className="layout__column"></div>
    </div>
  );
};

export default Layout;
