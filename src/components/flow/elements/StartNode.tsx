import { Handle, NodeProps, Position, useStore } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const StartNode = ({ id, data }: NodeProps) => {
  const nodes = useStore((state) => state.nodeInternals);
  const edges = useStore((state) => state.edges);
  const nodesArray = Array.from(nodes.values());
  const startNodes = nodesArray.filter((node) => node.type === "start");
  console.log("eddd", startNodes);
  const outgoing = edges.filter((edge) => edge.source === id);
  // if (startNodes.length >= 1) {
  //   alert("Hanya boleh 1 Start Node!");
  //   return;
  // }
  return (
    <div
      className={`w-[140px] h-[88px] ${COLOR_SHAPE_FLOW_DIAGRAM.start} relative`}
    >
      <div className="text-sm">{data.label}</div>
      <Handle
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
