const useDiagram = () => {
  const serialize = (data: any) => {
    const { nodes, edges } = data;
    const nilai = {
      nodes: nodes,
      edges: edges,
      roleDetail: [],
    };
    console.log("nilai", nilai);
    const dataJson = JSON.stringify(nilai);
    return dataJson;
  };

  const normalizeNode = (item : any) => {
    console.log("item", item);
    return
  }

  const normalizeEdges = (edges: any) => {
    return edges.map((item: any) => ({
      id: item.id,
      source: item.source,
      target: item.target,
      sourceHandle: item.sourceHandle,
      targetHandle: item.targetHandle,
      data: item.data,
      type: item.data?.source?.shapeId === "diamond" ? "line" : "smoothstep",
      animated: true,
      style: { strokeWidth: 2 },
      markerEnd: {
        type: "arrowclosed",
        width: 10,
        height: 10,
      },
    }));
  };

  return {
    serialize,
    normalizeEdges,
    normalizeNode
  };
};

export default useDiagram;
