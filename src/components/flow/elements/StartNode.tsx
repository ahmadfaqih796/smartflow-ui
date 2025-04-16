import { Handle, NodeProps, Position } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const StartNode = ({ data }: NodeProps) => {
  return (
    <div className={`w-[180px] h-[88px] ${COLOR_SHAPE_FLOW_DIAGRAM.start}`}>
      <div className="text-sm">{data.label}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        //   isValidConnection={({ target }) : any => {
        //     return target?.startsWith('rectangle');
        //   }}
      />
    </div>
  );
};

export default StartNode;
