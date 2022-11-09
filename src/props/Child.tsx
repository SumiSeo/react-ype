import React from "react";

interface ChildProps {
  color: string;
  onClick: () => string;
  children: React.ReactNode;
}

export const Child = ({
  color,
  onClick,
  children,
}: ChildProps): JSX.Element => {
  return (
    <div>
      Hi there!!!!{color}
      <button onClick={onClick}>Click me !</button>
    </div>
  );
};

export const ChildAsFc: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color} <button onClick={onClick}>Click me !</button>
    </div>
  );
};
