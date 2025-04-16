import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Controls,
  Edge,
  MarkerType,
  MiniMap,
  Node,
  ReactFlowProvider,
  useReactFlow
} from "reactflow";
import "reactflow/dist/style.css";
import Panel from "./containers/Panel";
import { DiamondNode, EndNode, RectangleNode, StartNode } from "./elements";

type FlowProps = {
  data? : any
}

const nodeTypes = {
  start: StartNode,
  rectangle: RectangleNode,
  diamond: DiamondNode,
  end: EndNode,
};



const FlowDiagram :React.FC<FlowProps> = ({data}) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  const { project } = useReactFlow();

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      const position = project({
        x: event.clientX - 250,
        y: event.clientY - 150,
      });
      const newNode: Node = {
        id: `${+new Date()}`,
        type,
        position,
        data: { label: `${type}` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [project]
  );

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  React.useEffect(() => {
    if (data?.data_json) {
      const parsed = JSON.parse(data.data_json);
      console.log("paredededed", parsed)
      const mappedNodes = parsed.nodes.map((node: any) => ({
        ...node,
        type: node.data?.shapeId || node.type
      }));
      if (parsed.nodes && parsed.edges) {
        
        setNodes(mappedNodes);
        setEdges(parsed.edges);
      }
    }
  }, [data]);

  return (
    <div className="flex h-[69.5vh]">
      <Panel />
      <div className="flex-1 relative" onDrop={onDrop} onDragOver={onDragOver}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          defaultEdgeOptions={{
            type: 'smoothstep',
            animated: true,
            style: {
              // stroke: 'blue',
              strokeWidth: 5,
            },
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 10,
              height: 10,
              // color: '#4f46e5',
            },
          }}
        >
          {/* <Background gap={20} variant={BackgroundVariant.Cross}/> */}
          <Controls />
          <MiniMap nodeStrokeWidth={3} />
        </ReactFlow>
      </div>
    </div>
  );
};

const DiagramWrapper : React.FC<FlowProps> = ({data}) => (
  <ReactFlowProvider>
    <FlowDiagram data={data}  />
  </ReactFlowProvider>
);

export default DiagramWrapper;
