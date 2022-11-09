import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);
  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h1>GuestList</h1>
      {guests.map((g) => {
        return <li key={g}>{g}</li>;
      })}
      <input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Add guest</button>
    </div>
  );
};
export default GuestList;
