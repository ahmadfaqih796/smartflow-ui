import { useAlert } from "@/context/AlertContext";
import React from "react";
import { Handle, NodeProps, Position, useReactFlow, useStore } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const StartNode = ({ id }: NodeProps) => {
  const { showAlert } = useAlert();
  const { setNodes } = useReactFlow();

  const nodes = useStore((state) => state.nodeInternals);
  const edges = useStore((state) => state.edges);

  const outgoing = edges.filter((edge) => edge.source === id);
  const totalStartNodes = React.useMemo(() => {
    return Array.from(nodes.values()).filter((node) => node.type === "start")
      .length;
  }, [nodes]);
  React.useEffect(() => {
    if (totalStartNodes > 1) {
      setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
      showAlert("Maaf, 'Start' tidak boleh lebih dari satu!", "error");
    }
  }, [totalStartNodes]);
  return (
    <div
      className={`w-[180px] h-[88px] ${COLOR_SHAPE_FLOW_DIAGRAM.start} relative`}
    >
      <div className="text-sm">Start</div>
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{
          // left: "41%",
          bottom: "-8px",
          width: "10px",
          height: "10px",
          // transform: "none"
        }}
        isValidConnection={() => outgoing.length === 0}
      />
    </div>
  );
};

export default StartNode;
