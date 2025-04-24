import { toPng } from "html-to-image";
import { getNodesBounds, getViewportForBounds, useReactFlow } from "reactflow";

const downloadImage = (dataUrl: string) => {
  const a = document.createElement("a");
  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
};

const useActionDiagram = () => {
  const { getNodes } = useReactFlow();
  const onDownload = () => {
    const imageWidth = 1024 as number;
    const imageHeight = 768 as number;
    const nodesBounds = getNodesBounds(getNodes());
    const viewport = getViewportForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );
    const viewportElement = document.querySelector(
      ".react-flow__viewport"
    ) as HTMLElement;
    toPng(viewportElement, {
      backgroundColor: "#ffff",
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth.toString(),
        height: imageHeight.toString(),
        transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
      },
    }).then((res) => {
      downloadImage(res);
    });
  };

  return { onDownload };
};

export default useActionDiagram;
