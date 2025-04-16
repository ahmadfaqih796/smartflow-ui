import { Handle, NodeProps, Position } from 'reactflow';

const StartNode = ({ data }: NodeProps) => {
  return (
    <div className='w-[100px] h-[30px] bg-green-500 text-white flex items-center justify-center cursor-move rounded-4xl border-2 border-green-700'>
      <div className='text-sm'>{data.label}</div>
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default StartNode;
