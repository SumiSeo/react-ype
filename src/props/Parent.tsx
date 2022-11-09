import { Child } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child
        color="red"
        onClick={() => {
          return "hi";
        }}
      >
        dfsf
      </Child>
    </div>
  );
};
export default Parent;
