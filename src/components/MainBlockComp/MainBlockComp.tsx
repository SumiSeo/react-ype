import "./MainBlockComp.scss";
import space from "../../img/space.jpg";

const MainBlockComp = (): JSX.Element => {
  return (
    <div className="mainBlock__img">
      <img src={space} alt="space" />
    </div>
  );
};

export default MainBlockComp;
