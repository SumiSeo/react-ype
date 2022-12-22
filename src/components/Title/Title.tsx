import "./Title.scss";
import { useState } from "react";
interface titleProps {
  arr: string;
  page: string;
  name: string;
}

const Title = ({ arr, page, name }: titleProps): JSX.Element => {
  const [animation, setAnimation] = useState<boolean>(false);
  const addAnimation = () => {
    setAnimation(true);
  };
  return (
    <div>
      <h1 className="title">
        {name !== "mobile" ? (
          <a rel="noreferrer" target="_blank" href={page}>
            {arr}
          </a>
        ) : (
          <div onClick={addAnimation}>
            <a>{arr}</a>
          </div>
        )}
      </h1>
      {name === "mobile" ? (
        <div
          onClick={() => setAnimation(false)}
          className={animation ? "title__div" : "title__disappear"}
        >
          <h1>+33 7 67 23 49 82</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Title;
