import { Handle, Position } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const EndNode = () => {
  return (
    <div className={`w-[180px] h-[88px] ${COLOR_SHAPE_FLOW_DIAGRAM.end}`}>
      <div className="text-sm">End</div>
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{
          bottom: "-8px",
          width: "10px",
          height: "10px",
        }}
        isValidConnection={({ source })  : any => source?.startsWith("rectangle")}
      />
    </div>
  );
};

export default EndNode;
