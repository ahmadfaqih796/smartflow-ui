import { Handle, NodeProps, Position } from 'reactflow';

const DiamondNode = ({ data }: NodeProps) => {
  return (
    <div style={{
      width: 100,
      height: 100,
      background: '#FF9F43',
      transform: 'rotate(45deg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold'
    }}>
      <div style={{ transform: 'rotate(-45deg)' }}>{data.label}</div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default DiamondNode;
