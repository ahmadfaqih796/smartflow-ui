import React from "react";
import {
  COLOR_SHAPE_FLOW_DIAGRAM,
  SHAPE_LIST_FLOW_DIAGRAM,
} from "../constants/digram.constant";
import { SCROLLBAR } from "@/constants/theme";

type MenuPanelProps = {
  item: string;
  onDragStart: (event: React.DragEvent, nodeType: string) => void;
};

const MenuPanel: React.FC<MenuPanelProps> = ({ item, onDragStart }) => {
  switch (item) {
    case "start":
      return (
        <div
          key={item}
          className={`w-25 h-[40px] ${COLOR_SHAPE_FLOW_DIAGRAM[item]}`}
          onDragStart={(e) => onDragStart(e, item)}
          draggable
        >
          Start
        </div>
      );
    case "square":
      return (
        <div
          key={item}
          className={`w-20 h-20 ${COLOR_SHAPE_FLOW_DIAGRAM[item]}`}
          onDragStart={(e) => onDragStart(e, item)}
          draggable
        >
          Square
        </div>
      );
    case "rectangle":
      return (
        <div
          key={item}
          className={`w-32 h-[40px] ${COLOR_SHAPE_FLOW_DIAGRAM[item]}`}
          onDragStart={(e) => onDragStart(e, item)}
          draggable
        >
          Rectangle
        </div>
      );
    case "diamond":
      return (
        <div
          key={item}
          // className={`w-16 h-16 my-3 ${COLOR_SHAPE_FLOW_DIAGRAM[item]}`}
          className={`w-25 h-25 flex items-center justify-center ${COLOR_SHAPE_FLOW_DIAGRAM[item]}`}
          onDragStart={(e) => onDragStart(e, item)}
          draggable
        >
          Diamond
        </div>
      );
    case "sla":
      return (
        <div
          key={item}
          className={`w-16 h-16 ${COLOR_SHAPE_FLOW_DIAGRAM[item]}`}
          onDragStart={(e) => onDragStart(e, item)}
          draggable
        >
          SLA
        </div>
      );
    case "time":
      return (
        <div
          key={item}
          className={`w-16 h-16 ${COLOR_SHAPE_FLOW_DIAGRAM[item]}`}
          onDragStart={(e) => onDragStart(e, item)}
          draggable
        >
          Time
        </div>
      );
    case "end":
      return (
        <div
          key={item}
          className={`w-25 h-[40px] ${COLOR_SHAPE_FLOW_DIAGRAM[item]}`}
          onDragStart={(e) => onDragStart(e, item)}
          draggable
        >
          End
        </div>
      );
    default:
      return (
        <div
          key={item}
          className="p-2 mb-2 border bg-gray-100 cursor-move rounded text-center"
          onDragStart={(e) => onDragStart(e, item)}
          draggable
        >
          {item.toUpperCase()}
        </div>
      );
  }
};

const Panel = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="border-r h-full flex flex-col">
      <h4 className="font-bold text-center my-4">Faqih Panel</h4>
      <div
        className={`flex-1 gap-2 px-4 overflow-y-auto flex flex-col items-center ${SCROLLBAR}`}
      >
        {SHAPE_LIST_FLOW_DIAGRAM.map((shape) => (
          <MenuPanel key={shape} item={shape} onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  );
};

export default Panel;
