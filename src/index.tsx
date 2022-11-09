import ReactDOM from "react-dom/client";
import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <h1>Hi thereeee!</h1>
      <EventComponent />
      <UserSearch />
    </div>
  );
};

root.render(<App />);
