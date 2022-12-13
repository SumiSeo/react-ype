import "./Title.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Title = (): JSX.Element => {
  return (
    <div>
      <h1 className="title">
        <a target="_blank" href="https://www.linkedin.com/in/sumiseo/">
          <FontAwesomeIcon
            className="title__icon"
            icon={faArrowRight}
            fa-thin
          />
        </a>
      </h1>
    </div>
  );
};

export default Title;
