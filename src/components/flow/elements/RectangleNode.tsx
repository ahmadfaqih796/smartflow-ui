import { Handle, NodeProps, Position } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const RectangleNode = ({ data }: NodeProps) => {
  return (
    <div className={`w-[180px] h-[90px] ${COLOR_SHAPE_FLOW_DIAGRAM.rectangle}`}>
      <div className="text-sm">{data.label}</div>
      <Handle
        type="target"
        position={Position.Top}
        // isValidConnection={({ source }): any =>
        //   source?.startsWith("start") || source?.startsWith("rectangle")
        // }
      />
      <Handle
        type="source"
        position={Position.Bottom}
        // isValidConnection={({ target }): any =>
        //   target?.startsWith("rectangle") || target?.startsWith("end")
        // }
      />
    </div>
  );
};

export default RectangleNode;
