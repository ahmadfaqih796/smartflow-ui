export const SHAPE_LIST_FLOW_DIAGRAM = [
  "start",
  "end",
  "square",
  "rectangle",
  "diamond",
  "sla",
  'time'
  // "circle",
  // "plus",
];

export const COLOR_SHAPE_FLOW_DIAGRAM : Record<string, string> = {
  start: "bg-green-500 text-white flex items-center justify-center cursor-move rounded-4xl border-4 border-green-700",
  end: "bg-red-500 text-white flex items-center justify-center cursor-move rounded-4xl border-4 border-red-700",
  square: "bg-pink-500 rounded-sm text-white flex items-center justify-center cursor-move border-4 border-pink-700",
  rectangle: "bg-blue-500 rounded-sm text-white flex items-center justify-center cursor-move border-4 border-blue-700",
  // diamond: "rotate-45 bg-[#FF9F43] rounded-sm text-white flex items-center justify-center cursor-move border-4 border-orange-700",
  diamond: "bg-[url(/images/flow/diamond.svg)] bg-cover text-white flex items-center justify-center cursor-move",
  sla: "bg-fuchsia-500 rounded-full text-white flex items-center justify-center cursor-move border-4 border-fuchsia-700",
  time: "bg-orange-500 rounded-full text-white flex items-center justify-center cursor-move border-4 border-orange-700",
  circle: "w-20 h-20 bg-yellow-400 rounded-full text-white flex items-center justify-center cursor-move",
  plus: "relative w-12 h-12 cursor-move",
  default: "p-2 mb-2 border bg-gray-100 cursor-move rounded text-center",
}
