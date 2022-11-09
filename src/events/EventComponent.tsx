import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("I am being dragged");
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        drag me!
      </div>
    </div>
  );
};

export default EventComponent;
