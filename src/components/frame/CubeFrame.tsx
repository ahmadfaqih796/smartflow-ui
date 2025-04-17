import "@/assets/styles/tailwindcss/animations/frames/cube.css";
import React from "react";

type Props = {
  children: React.ReactNode;
  color? : "red" | "blue";
  cube? : Number,
};

const CubeFrame: React.FC<Props> = ({ children, color, cube = 10 }) => {
   const getColor = (value?: string) => {
     switch (value) {
       case "red":
         return "bg-red-400 dark:bg-red-800";
       case "blue":
         return "bg-blue-400 dark:bg-blue-800";
       default:
         return "bg-gray-400 dark:bg-gray-500";
     }
   }

   const getBackgroundColor = (value?: string) => {
     switch (value) {
       case "red":
         return "bg-red-200 dark:bg-red-950";
       case "blue":
         return "bg-blue-200 dark:bg-blue-950";
       default:
         return "bg-gray-200 dark:bg-gray-800";
     }
   }
  return (
    <main className={`area w-full h-screen flex items-center justify-center ${getBackgroundColor(color)}`}>
      <ul className="cubes">
        {Array.from({ length: Number(cube) }).map((_, i) => (
          <li key={i} className={`${getColor(color)}`} />
        ))}
      </ul>
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default CubeFrame;
