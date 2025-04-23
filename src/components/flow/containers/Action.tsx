import { ButtonIcon } from "@/components/button/Button";
import { SCROLLBAR } from "@/constants/theme";
import { useAlert } from "@/context/AlertContext";
import BaseService from "@/lib/services/BaseService";
import {
  Check,
  Download,
  GitPullRequest,
  RotateCcw,
  Save,
  Trash2,
  X,
} from "lucide-react";
import React from "react";
import useDiagram from "../hooks/diagram.hook";
import useDiagramValidation from "../validations/diagram.validation";
import { capitalizeFirstLetter } from "@/utils/fontCase";

type Props = {
  action?: {
    onLoad?: () => void;
    onReset?: () => void;
  };
  data: any;
};

const service = new BaseService();

const Action: React.FC<Props> = ({ data, action }) => {
  const { serialize } = useDiagram();
  const { showAlert } = useAlert();
  const [isPending, startTransition] = React.useTransition();

  const handleSave = async () => {
    const { id, nodes, edges } = data;
    const { typeDiagram } = useDiagramValidation();

    const nodesMapping = nodes.map((item: any) => {
      return {
        ...item,
        type: typeDiagram(item.type),
      };
    });

    const roleDetail = edges.map((item: any) => {
      const sourceNode = item.data.source.label.split("-")[0];
      const targetNode = item.data.target.label.split("-")[0];
      return {
        curr_role: capitalizeFirstLetter(sourceNode),
        role_next: capitalizeFirstLetter(targetNode),
        role_reject: null,
        role_type: capitalizeFirstLetter(item.data.target.shapeId),
        role_sla: null,
        role_sla2: null,
        comment: null,
      };
    });

    console.log("roleDetail", edges, roleDetail);

    const dataJson = serialize({
      nodes: nodesMapping,
      edges,
      roleDetail,
    });

    const payload = {
      id: id,
      data_json: dataJson,
    };
    console.log("rerererrrr", payload);
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
      <h4 className="font-bold text-center px-1 border-b py-4">Faqih Toggle</h4>
      {/* <main className={`bg-gray-100 h-[calc(100%-60px)]`}></main> */}
      <div
        className={`flex-1 gap-2 px-4 pb-4 overflow-y-auto flex flex-col items-center ${SCROLLBAR}`}
      >
        <h4 className="font-bold text-center my-1">Action</h4>
        <ButtonIcon
          loading={isPending}
          onClick={() => handleSave()}
          tooltip="Simpan"
          position="bottom"
          color="success"
        >
          <Save />
        </ButtonIcon>
        <ButtonIcon
          onClick={() => action?.onLoad?.()}
          tooltip="Restart"
          position="bottom"
          color="warning"
        >
          <RotateCcw />
        </ButtonIcon>
        <ButtonIcon
          onClick={() => action?.onReset?.()}
          tooltip="Reset"
          position="bottom"
          color="danger"
        >
          <Trash2 />
        </ButtonIcon>
        <ButtonIcon tooltip="Download" position="bottom" color="warning">
          <Download />
        </ButtonIcon>
        <h4 className="font-bold text-center my-1">Validasi</h4>
        <ButtonIcon tooltip="Request" position="bottom" color="info">
          <GitPullRequest />
        </ButtonIcon>
        <ButtonIcon tooltip="Approve" position="bottom" color="success">
          <Check />
        </ButtonIcon>
        <ButtonIcon tooltip="Reject" position="top" color="danger">
          <X />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Action;
