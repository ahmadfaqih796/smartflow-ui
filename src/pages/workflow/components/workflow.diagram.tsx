import Modal from "@/components/modal/Modal";
import { SCROLLBAR } from "@/constants/theme";
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
  console.log("xsxsxsxsxc", data);
  return (
    <div>
      <Modal title="Diagram Workflow" open={open} onClose={togleModal} fullwidth>
        <div className={`overflow-y-auto max-h-[70vh] ${SCROLLBAR}`}>
          {JSON.stringify(data)}
        </div>
      </Modal>
    </div>
  );
};

export default WorkflowDiagram;
