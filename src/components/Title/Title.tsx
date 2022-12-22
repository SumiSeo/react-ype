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
    setAnimation(!animation);
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
            <a href="#">{arr}</a>
          </div>
        )}
      </h1>
      {name === "mobile" ? (
        <div className={animation ? "title__div" : ""}></div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Title;
