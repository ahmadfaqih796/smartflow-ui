import { ButtonIcon } from "@/components/button/Button";
import { SCROLLBAR } from "@/constants/theme";
import { Check, Download, GitPullRequest, Save, X } from "lucide-react";
import React from "react";

const Action: React.FC = () => {
  return (
    <div className="border-l h-full flex flex-col">
      <h4 className="font-bold text-center my-4">Action</h4>
      <div
        className={`flex-1 gap-2 px-4 overflow-y-auto flex flex-col items-center ${SCROLLBAR}`}
      >
        <ButtonIcon tooltip="Simpan" position="bottom" color="success">
          <Save />
        </ButtonIcon>
        <ButtonIcon tooltip="Request" position="bottom" color="info">
          <GitPullRequest />
        </ButtonIcon>
        <ButtonIcon tooltip="Download" position="bottom" color="warning">
          <Download />
        </ButtonIcon>
        <ButtonIcon tooltip="Approve" position="bottom" color="success">
          <Check />
        </ButtonIcon>
        <ButtonIcon tooltip="Reject" position="bottom" color="danger">
          <X />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Action;
