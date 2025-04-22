const useDiagramValidation = () => {

  const edgesPosition = (values: any) => {
    switch (values) {
      case "start": {
        return ["bottom"];
      }
      case "end": {
        return ["top"];
      }
      default: {
        return null;
      }
    }
  };

  const typeDiagram = (values: any) => {
    if (values === "start" || values === "end") {
      return "rounded";
    } else {
      return values;
    }
  };

  return { typeDiagram, edgesPosition };
};

export default useDiagramValidation;
