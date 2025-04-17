import { SCROLLBAR } from "@/constants/theme";
import React from "react";
import { Button } from "../button/Button";
import Modal from "./Modal";

type Props = {
  open: boolean;
  togleModal: () => void;
  title: string;
  desc: string;
  onSubmit?: () => void;
};

const ActionModal: React.FC<Props> = ({
  title,
  desc,
  open,
  togleModal,
  onSubmit,
}) => {
  return (
    <div>
      <Modal title={title} open={open} onClose={togleModal}>
        <div className={`px-4 pt-6 overflow-y-auto max-h-[70vh] ${SCROLLBAR}`}>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{desc}</p>
          <div className="pb-4 flex flex-row justify-end gap-4">
            <Button onClick={togleModal} color="danger">
              close
            </Button>
            <Button onClick={onSubmit} color="success">
              yes
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ActionModal;
