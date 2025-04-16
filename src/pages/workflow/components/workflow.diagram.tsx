import FlowDiagram from "@/components/flow/Diagram";
import Modal from "@/components/modal/Modal";
import { ANIMATION, SCROLLBAR } from "@/constants/theme";
import React from "react";

type Props = {
  open: boolean;
  togleModal: () => void;
  data?: any;
  refetch?: () => void;
};

const WorkflowDiagram: React.FC<Props> = ({
  open,
  togleModal,
  data,
  refetch,
}) => {
  return (
    <div>
      <Modal
        title="Diagram Workflow"
        open={open}
        onClose={togleModal}
        fullwidth
      >
        <div
          className={`overflow-y-auto max-h-[69.5vh] rounded-xl shadow-lg 
        ${SCROLLBAR}
        ${ANIMATION}
        ${open ? "w-full" : "w-[0px]"}
        `}
        >
          {/* {JSON.stringify(data)} */}
          <FlowDiagram />
        </div>
      </Modal>
    </div>
  );
};

export default WorkflowDiagram;
