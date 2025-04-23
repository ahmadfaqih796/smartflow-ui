export const diagramData = {
  edges: [
    {
      source: "1",
      sourceHandle: "Bottom",
      target: "2",
      targetHandle: "Top",
      id: "b1-t2",
      data: {
        label: "",
        source: {
          id: "1",
          shapeId: "start",
          label: "Start",
        },
        target: {
          id: "2",
          shapeId: "rectangle",
          label: "Rectangle",
        },
        type: "next",
      },
      type: "smoothstep",
      markerEnd: {
        type: "arrow",
        strokeWidth: 2,
      },
    },
    {
      source: "2",
      sourceHandle: "Left",
      target: "4",
      targetHandle: "Top",
      id: "l2-t4",
      data: {
        label: "",
        source: {
          id: "2",
          shapeId: "rectangle",
          label: "UNIT KERja",
        },
        target: {
          id: "4",
          shapeId: "square",
          label: "IT USR",
        },
        type: "next",
      },
      type: "smoothstep",
      markerEnd: {
        type: "arrow",
        strokeWidth: 2,
      },
    },
    {
      source: "4",
      sourceHandle: "Bottom",
      target: "3",
      targetHandle: "Top",
      id: "b4-t3",
      data: {
        label: "",
        source: {
          id: "4",
          shapeId: "square",
          label: "IT USR",
        },
        target: {
          id: "3",
          shapeId: "end",
          label: "End",
        },
        type: "next",
      },
      type: "smoothstep",
      markerEnd: {
        type: "arrow",
        strokeWidth: 2,
      },
    },
  ],
  nodes: [
    {
      id: "1",
      type: "rounded",
      position: {
        x: 277,
        y: 143,
      },
      data: {
        shapeId: "start",
        label: "Start",
        edgesPosition: ["bottom"],
      },
      style: {
        width: 180,
        height: 90,
      },
      width: 180,
      height: 90,
      positionAbsolute: {
        x: 277,
        y: 143,
      },
    },
    {
      id: "2",
      type: "rectangle",
      position: {
        x: 409,
        y: 279,
      },
      data: {
        shapeId: "rectangle",
        label: "UNIT KERja",
      },
      style: {
        width: 180,
        height: 90,
      },
      width: 180,
      height: 90,
      selected: false,
      positionAbsolute: {
        x: 409,
        y: 279,
      },
      dragging: false,
    },
    {
      id: "3",
      type: "rounded",
      position: {
        x: 477,
        y: 457,
      },
      data: {
        shapeId: "end",
        label: "End",
        edgesPosition: ["top"],
      },
      style: {
        width: 180,
        height: 90,
      },
      width: 180,
      height: 90,
      selected: false,
      positionAbsolute: {
        x: 477,
        y: 457,
      },
      dragging: false,
    },
    {
      id: "4",
      type: "square",
      position: {
        x: 245,
        y: 335,
      },
      data: {
        shapeId: "square",
        label: "IT USR",
      },
      style: {
        width: 100,
        height: 100,
      },
      width: 100,
      height: 100,
      selected: true,
      positionAbsolute: {
        x: 245,
        y: 335,
      },
      dragging: false,
    },
  ],
 
};
