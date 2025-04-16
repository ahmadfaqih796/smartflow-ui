import React, { useCallback, useMemo } from 'react';
import ReactFlow, { Background, Controls, addEdge, useEdgesState, useNodesState, Connection } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 50 }, data: { label: 'Start' }, type: 'input' },
  { id: '2', position: { x: 200, y: 150 }, data: { label: 'Process' } },
  { id: '3', position: { x: 400, y: 50 }, data: { label: 'End' }, type: 'output' }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' }
];

const FlowDiagramV2: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  const flowStyle = useMemo(() => ({
    width: '100%',
    height: '100%',
    background: '#ffff',
  }), []);

  return (
    <div style={flowStyle}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background gap={16}/>
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagramV2;
