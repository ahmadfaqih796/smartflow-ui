import { Handle, NodeProps, Position, useStore } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const PlusNode = ({ data }: NodeProps) => {
   const edges = useStore((state) => state.edges);
  return (
    <div className={`w-[130px] h-[130px] ${COLOR_SHAPE_FLOW_DIAGRAM.plus}`}>
      <div className="text-sm">{data.label}</div>
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{
          bottom: "-8px",
          width: "10px",
          height: "10px",
        }}
        // isValidConnection={({ source }): any =>
        //   source?.startsWith("start") || source?.startsWith("rectangle")
        // }
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
        // isValidConnection={({ target }): any =>
        //   target?.startsWith("rectangle") || target?.startsWith("end")
        // }
      />
    </div>
  );
};

export default PlusNode;
