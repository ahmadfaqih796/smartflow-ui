import React from "react";
import {
  Handle,
  Node,
  NodeProps,
  Position,
  useReactFlow,
  useStore,
} from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const SlaNode = ({ id, data }: NodeProps) => {
  const edges = useStore((state) => state.edges);
  const { setNodes } = useReactFlow();
  const [isEditing, setIsEditing] = React.useState(false);
  const [label, setLabel] = React.useState(data.label);

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = e.target.value;
    setLabel(newLabel);
    setNodes((prevNodes: Node[]) =>
      prevNodes.map((node: Node) =>
        node.id === id
          ? {
              ...node,
              data: {
                ...node.data,
                label: newLabel,
                comment:
                  "lorem ipsum dolor sit amet kdokodkoe kdoekdoed kodkeod kokocn cdini oko kokokods",
              },
            }
          : node
      )
    );
  };

  return (
    <div
      className={`group w-[130px] h-[138px] ${COLOR_SHAPE_FLOW_DIAGRAM.square} relative`}
      onDoubleClick={() => setIsEditing(true)}
    >
      {/* Tooltip */}
      {data.comment && (
        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 hidden group-hover:block 
 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-normal w-40 max-w-40 break-words z-10 shadow-lg"
        >
          {data.comment}
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
    border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"
          />
        </div>
      )}

      {isEditing ? (
        <input
          type="text"
          value={label}
          autoFocus
          maxLength={20}
          onBlur={() => setIsEditing(false)}
          onChange={(e) => handleLabelChange(e)}
          className="border rounded px-2 py-1 text-sm w-full"
        />
      ) : (
        <div className="text-sm text-center break-all">{data.label}</div>
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
        isValidConnection={() =>
          edges.filter((x) => x.id.includes("start")).length === 0
        }
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
        isValidConnection={() =>
          edges.filter((x) => x.id.includes("start")).length === 0
        }
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

export default SlaNode;
