import { Handle, NodeProps, Position, useStore } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";
import React from "react";

const SquareNode = ({ id, data }: NodeProps) => {
  const edges = useStore((state) => state.edges);
  const [isEditing, setIsEditing] = React.useState(false);
  const [label, setLabel] = React.useState(data.label);
  console.log("edges", edges, id)
  return (
    <div
      className={`w-[130px] h-[138px] ${COLOR_SHAPE_FLOW_DIAGRAM.square} relative`}
      onDoubleClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <input
          type="text"
          value={label}
          autoFocus
          onBlur={() => setIsEditing(false)}
          onChange={(e) => setLabel(e.target.value)}
          className="border rounded px-2 py-1 text-sm w-full"
        />
      ) : (
        <div className="text-sm">{label}</div>
      )}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          top: "-8px",
          width: "10px",
          height: "10px",
        }}
      />

      <Handle
        type="target"
        position={Position.Left}
        style={{
          left: "-8px",
          width: "10px",
          height: "10px",
        }}
      />

      <Handle
        type="target"
        position={Position.Right}
        style={{
          right: "-8px",
          width: "10px",
          height: "10px",
        }}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          bottom: "-8px",
          width: "10px",
          height: "10px",
        }}
      />
    </div>
  );
};

export default SquareNode;
