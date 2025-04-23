import { Handle, NodeProps, Position, useStore } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const StartNode = ({ id }: NodeProps) => {
  const edges = useStore((state) => state.edges);
  const outgoing = edges.filter((edge) => edge.source === id);
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
