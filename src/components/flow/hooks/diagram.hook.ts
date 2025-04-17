const useDiagram = () => {
  const serialize = (data: any) => {
    const { nodes, edges } = data;
    const nilai = {
      nodes: nodes,
      edges: edges,
      roleDetail : []
    }
    console.log("nilai", nilai);
    const dataJson = JSON.stringify(nilai);
    return dataJson
  };

  return {
    serialize,
  };
};

export default useDiagram;
