import { Handle, NodeProps, Position } from "reactflow";
import { COLOR_SHAPE_FLOW_DIAGRAM } from "../constants/digram.constant";

const DiamondNode = ({ data }: NodeProps) => {
  return (
    <div
      className={`w-[150px] h-[150px] ${COLOR_SHAPE_FLOW_DIAGRAM.diamond}`}
      style={
        {
          // width: 100,
          // height: 100,
          // background: '#FF9F43',
          // transform: 'rotate(45deg)',
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          // color: 'white',
          // fontWeight: 'bold'
        }
      }
    >
      <div>{data.label}</div>
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{
          width: "10px",
          height: "10px",
        }}
      />

      <Handle
        id="left"
        type="target"
        position={Position.Left}
        style={{
          width: "10px",
          height: "10px",
        }}
      />

      <Handle
        id="right"
        type="source"
        position={Position.Right}
        style={{
          width: "10px",
          height: "10px",
        }}
      />

      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{
          width: "10px",
          height: "10px",
        }}
      />
    </div>
  );
};

export default DiamondNode;
