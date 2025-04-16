import { Handle, NodeProps, Position } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const EndNode = ({ data }: NodeProps) => {
  return (
    <div className={`w-[180px] h-[88px] ${COLOR_SHAPE_FLOW_DIAGRAM.end}`}>
      <div className="text-sm">{data.label}</div>
      <Handle
        type="target"
        position={Position.Top}
        isValidConnection={({ source })  : any => source?.startsWith("rectangle")}
      />
    </div>
  );
};

export default EndNode;
