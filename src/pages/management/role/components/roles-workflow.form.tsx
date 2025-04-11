import Modal from "@/components/modal/Modal";
import React from "react";

type Props = {
  open: boolean;
  togleModal: () => void;
};

const RolesWorkflowForm: React.FC<Props> = ({ open, togleModal }) => {
  return (
    <div>
      <Modal title="Open Modal 1" open={open} onClose={togleModal}>
        <button onClick={togleModal} className="btn btn-primary">
          close
        </button>
      </Modal>
    </div>
  );
};

export default RolesWorkflowForm;
