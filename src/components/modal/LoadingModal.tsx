import { SCROLLBAR } from "@/constants/theme";
import React from "react";
import Modal from "./Modal";

type Props = {
  open: boolean;
};

const LoadingModal: React.FC<Props> = ({ open }) => {
  return (
    <div>
      <Modal title={"Loading"} open={open}>
        <div className={`px-4 pt-6 overflow-y-auto max-h-[70vh] ${SCROLLBAR}`}>
          <div className="flex flex-col items-center justify-center h-[100px] gap-4 mb-4">
            <div className="h-12 w-12 border-4 border-t-blue-500 border-blue-300 rounded-full animate-spin"></div>
            <h1 className="text-2xl text-gray-700 dark:text-gray-300">
              Mohon menunggu ya •ᴗ•
            </h1>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoadingModal;
