import React from "react";
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Controls,
  Edge,
  MarkerType,
  MiniMap,
  Node,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";
import Action from "./containers/Action";
import Panel from "./containers/Panel";
import {
  DiamondNode,
  EndNode,
  RectangleNode,
  SquareNode,
  StartNode,
} from "./elements";
import useDiagramValidation from "./validations/diagram.validation";

type FlowProps = {
  data?: any;
};

const nodeTypes = {
  start: StartNode,
  rectangle: RectangleNode,
  diamond: DiamondNode,
  end: EndNode,
  square: SquareNode,
};

const FlowDiagram: React.FC<FlowProps> = ({ data }) => {
  // const { normalizeEdges } = useDiagram();
  const { edgesPosition } = useDiagramValidation();
  const { project } = useReactFlow();
  const [nodes, setNodes] = React.useState<Node[]>([]);
  const [edges, setEdges] = React.useState<Edge[]>([]);
  const [selectedEdgeId, setSelectedEdgeId] = React.useState<string | null>(null);

  const onNodesChange = React.useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = React.useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  // const onConnect = React.useCallback((connection: Connection) => {
  //   setEdges((eds) => addEdge(connection, eds));
  // }, []);
  const onConnect = React.useCallback(
    (connection: Connection) => {
      setEdges((eds) => {
        const sourceNode = nodes.find((n) => n.id === connection.source);
        const targetNode = nodes.find((n) => n.id === connection.target);

        if (!sourceNode || !targetNode) return eds;

        const newEdge: any = {
          ...connection,
          id: `${connection.sourceHandle || "null"}_${connection.source}__${connection.targetHandle || "null"}_${
            connection.target
          }`,
          type: "smoothstep",
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 10,
            height: 10,
          },
          data: {
            label: targetNode.data.label,
            source: {
              id: sourceNode.id,
              shapeId: sourceNode.data?.shapeId,
              label: sourceNode.data?.label,
            },
            target: {
              id: targetNode.id,
              shapeId: targetNode.data?.shapeId,
              label: targetNode.data?.label,
            },
            // type: "next",
          },
        };

        console.log("wwwwwww", sourceNode, targetNode, connection, newEdge);

        return [...eds, newEdge];
      });
    },
    [nodes]
  );

  const onDrop = React.useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData(
        "application/reactflow"
      ) as string;
      const position = project({
        x: event.clientX - 250,
        y: event.clientY - 150,
      });

      setNodes((nds: Node[]) => {
        const count = (nds.length || 0) + 1;
        const newNode: Node = {
          id: `${type}-${count}`,
          type: type,
          position,
          positionAbsolute: position,
          data: {
            edgesPosition: edgesPosition(type),
            label: type,
            shapeId: type,
          },
        };
        // console.log("vvvv", nds, count);
        return nds.concat(newNode);
      });
    },
    [project]
  );

  const onDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onLoadData = () => {
    if (data?.data_json) {
      const parsed = JSON.parse(data.data_json);
      const mappedNodes = parsed.nodes.map((node: any) => ({
        ...node,
        type: node.data?.shapeId || node.type,
      }));
      if (parsed.nodes && parsed.edges) {
        setNodes(mappedNodes);
        setEdges(parsed.edges);
      }
    }
  };

  React.useEffect(() => {
    setEdges([]);
    setNodes([]);
    if (data?.data_json) {
      setTimeout(() => onLoadData(), 300);
    }
  }, [data]);

  const onEdgeClick = (_: any, edge: Edge) => {
    setSelectedEdgeId(edge.id);
  };

  // const edgeTypes = {
  //   step: StepEdge,
  //   sine: SineEdge,
  // };

  return (
    <div className="flex h-[83.5vh] justify-between">
      <Panel />
      <div className="flex-1 relative" onDrop={onDrop} onDragOver={onDragOver}>
        <ReactFlow
          // defaultNodes={initialNodes}
          // defaultEdges={initialEdges}
          // edgeTypes={edgeTypes}
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges.map((edge) => ({
            ...edge,
            style: {
              stroke: edge.id === selectedEdgeId ? "#3b82f6" : "black",
            },
            markerEnd: {
              width: 30,
              height: 30,
              type: MarkerType.ArrowClosed,
              color: edge.id === selectedEdgeId ? "#3b82f6" : "black",
            }
          }))}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgeClick={onEdgeClick}
          onNodeClick={() => setSelectedEdgeId(null)}
          onPaneClick={() => setSelectedEdgeId(null)}
          fitView
          // defaultEdgeOptions={{
          //   type: "smoothstep",
          //   animated: true,
          //   style: {
          //     // stroke: 'black',
          //     strokeWidth: 2,
          //   },
          //   markerEnd: {
          //     type: MarkerType.ArrowClosed,
          //     width: 20,
          //     height: 20,
          //     // color: '#4f46e5',
          //   },
          // }}
        >
          {/* <Background gap={20} variant={BackgroundVariant.Cross}/> */}
          <Controls />
          <MiniMap nodeStrokeWidth={3} />
        </ReactFlow>
      </div>
      <Action
        action={{
          onLoad: onLoadData,
          onReset: () => {
            setNodes([]);
            setEdges([]);
          },
        }}
        data={{
          id: data?.id,
          nodes,
          edges,
        }}
      />
    </div>
  );
};

const DiagramWrapper: React.FC<FlowProps> = ({ data }) => (
  <ReactFlowProvider>
    <FlowDiagram data={data} />
  </ReactFlowProvider>
);

export default DiagramWrapper;
