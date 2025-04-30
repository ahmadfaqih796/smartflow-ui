import { Handle, NodeProps, Position, useStore } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const CrossNode = ({ data }: NodeProps) => {
   const edges = useStore((state) => state.edges);
  return (
    <div className={`w-[100px] h-[100px] ${COLOR_SHAPE_FLOW_DIAGRAM.cross}`}>
      <div className="text-sm">{data.label}</div>
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{
          top: "11px",
          width: "10px",
          height: "10px",
        }}
        isValidConnection={({ source }): any =>
          source?.startsWith("start") || source?.startsWith("rectangle")
        }
      />
      <Handle
        id="left"
        type="target"
        position={Position.Left}
        style={{
          left: "11px",
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
          right: "11px",
          width: "10px",
          height: "10px",
        }}
      />

      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{
          bottom: "11px",
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

export default CrossNode;
