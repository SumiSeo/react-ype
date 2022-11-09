import { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

interface User {
  name: string;
  age: number;
}

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<undefined | User>();
  const onClick = () => {
    const selected = users.find((u) => {
      return name === u.name;
    });
    setUser(selected);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      {user && user.name}
      {user && user.age}
    </div>
  );
};

export default UserSearch;
