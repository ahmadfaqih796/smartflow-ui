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
          className={`overflow-y-hidden max-h-[80vh] rounded-xl shadow-lg 
        ${SCROLLBAR}
        ${ANIMATION}
        ${open ? "w-full" : "w-[0px]"}
        `}
        >
          {/* {JSON.stringify(data)} */}
          <FlowDiagram data={data} />
        </div>
      </Modal>
    </div>
  );
};

export default WorkflowDiagram;
