import { ButtonIcon } from "@/components/button/Button";
import { SCROLLBAR } from "@/constants/theme";
import { useAlert } from "@/context/AlertContext";
import BaseService from "@/lib/services/BaseService";
import { Check, Download, GitPullRequest, Save, X } from "lucide-react";
import React from "react";
import useDiagram from "../hooks/diagram.hook";

type Props = {
  data: any;
};

const service = new BaseService();

const Action: React.FC<Props> = ({ data }) => {
  const { serialize } = useDiagram();
  const { showAlert } = useAlert();
  const [isPending, startTransition] = React.useTransition();

  const handleSave = async () => {
    const dataJson = serialize(data);
    const payload = {
      id: data.id,
      data_json: dataJson,
    };
    try {
      startTransition(async () => {
        await service.put("/workflow/draf_diagram", null, payload);
        showAlert("Data berhasil disimpan", "success");
      });
    } catch (error) {
      showAlert("Data gagal disimpan", "error");
      console.log("eeeeeeee", error);
    }
  };
  return (
    <div className="border-l h-full flex flex-col">
      <h4 className="font-bold text-center my-4">Action</h4>
      <div
        className={`flex-1 gap-2 px-4 overflow-y-auto flex flex-col items-center ${SCROLLBAR}`}
      >
        <ButtonIcon
          loading={isPending}
          onClick={() => handleSave()}
          tooltip="Simpan"
          position="bottom"
          color="success"
        >
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
