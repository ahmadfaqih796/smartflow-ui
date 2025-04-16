import React from "react";
import {
   COLOR_SHAPE_FLOW_DIAGRAM,
   SHAPE_LIST_FLOW_DIAGRAM,
} from "../constants/digram.constant";

const Panel = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="border-r h-full flex flex-col">
      <h4 className="font-bold text-center my-4">Faqih Panel</h4>
      <div className="flex-1 gap-2 px-4 overflow-y-auto">
        {SHAPE_LIST_FLOW_DIAGRAM.map((shape) => (
          <div
            key={shape}
            className={
              COLOR_SHAPE_FLOW_DIAGRAM[shape] ||
              COLOR_SHAPE_FLOW_DIAGRAM.default
            }
            onDragStart={(e) => onDragStart(e, shape)}
            draggable
          >
            {shape.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panel;
