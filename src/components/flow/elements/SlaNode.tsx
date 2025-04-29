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
  const [label, setLabel] = React.useState("");

  const outgoing = edges.filter((edge) => edge.source === id);
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
              },
            }
          : node
      )
    );
  };

  return (
    <div
      className={`group w-[100px] h-[100px] ${COLOR_SHAPE_FLOW_DIAGRAM.sla} relative`}
      onDoubleClick={() => setIsEditing(true)}
    >
      <div className="flex items-center justify-center flex-col">
        <div className="text-sm text-center break-all">SLA</div>
        {isEditing ? (
          <input
            type="text"
            value={label}
            autoFocus
            maxLength={20}
            onBlur={() => setIsEditing(false)}
            onChange={(e) => handleLabelChange(e)}
            className="border rounded px-2 py-1 text-sm w-[90%]"
          />
        ) : (
          <div className="text-sm text-center break-all">
            {data.label === "sla" ? "0" : data.label}
          </div>
        )}
      </div>

      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{
          bottom: "-8px",
          width: "10px",
          height: "10px",
        }}
        isValidConnection={() => outgoing.length === 0}
      />
    </div>
  );
};

export default SlaNode;
