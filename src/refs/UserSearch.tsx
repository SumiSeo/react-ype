import { useState, useRef, useEffect } from "react";

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<undefined | User>();

  useEffect(() => {
    console.log("hi");
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const selected = users.find((u) => {
      return name === u.name;
    });
    setUser(selected);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      {user?.name}
      {user?.age}
    </div>
  );
};

export default UserSearch;
