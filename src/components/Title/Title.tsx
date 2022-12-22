import "./Title.scss";
interface titleProps {
  arr: string;
  page: string;
}

const Title = ({ arr, page }: titleProps): JSX.Element => {
  return (
    <div>
      <h1 className="title">
        <a rel="noreferrer" target="_blank" href={page}>
          {arr}
        </a>
      </h1>
    </div>
  );
};

export default Title;
