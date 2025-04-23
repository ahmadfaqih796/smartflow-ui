import React from "react";
import { Handle, NodeProps, Position, useStore } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const SquareNode = ({ data }: NodeProps) => {
  const edges = useStore((state) => state.edges);
  const [isEditing, setIsEditing] = React.useState(false);
  const [label, setLabel] = React.useState(data.label);
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
          maxLength={20}
          onBlur={() => setIsEditing(false)}
          onChange={(e) => setLabel(e.target.value)}
          className="border rounded px-2 py-1 text-sm w-full"
        />
      ) : (
        <div className="text-sm text-center break-all">{label}</div>
      )}
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{
          top: "-8px",
          width: "10px",
          height: "10px",
        }}
        isValidConnection={() => edges.filter((x) => x.id.includes("start")).length === 0}
      />

      <Handle
        id="left"
        type="target"
        position={Position.Left}
        style={{
          left: "-8px",
          width: "10px",
          height: "10px",
        }}
        isValidConnection={() => edges.filter((x) => x.id.includes("start")).length === 0}

      />

      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{
          right: "-8px",
          width: "10px",
          height: "10px",
        }}
      />

      <Handle
        id="bottom"
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
