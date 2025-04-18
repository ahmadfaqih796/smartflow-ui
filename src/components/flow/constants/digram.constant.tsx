export const SHAPE_LIST_FLOW_DIAGRAM = [
  "start",
  "rectangle",
  "circle",
  "diamond",
  "plus",
  "end",
];

export const COLOR_SHAPE_FLOW_DIAGRAM : Record<string, string> = {
  start: "bg-green-500 text-white flex items-center justify-center cursor-move rounded-4xl border-4 border-green-700",
  end: "bg-red-500 text-white flex items-center justify-center cursor-move rounded-4xl border-4 border-red-700",
  rectangle: "bg-blue-500 rounded-sm text-white flex items-center justify-center cursor-move border-4 border-blue-700",
  circle: "w-20 h-20 bg-yellow-400 rounded-full text-white flex items-center justify-center cursor-move",
  diamond: "w-20 h-20 bg-green-500 rotate-45 text-white flex items-center justify-center cursor-move",
  plus: "relative w-12 h-12 cursor-move",
  default: "p-2 mb-2 border bg-gray-100 cursor-move rounded text-center",
}
