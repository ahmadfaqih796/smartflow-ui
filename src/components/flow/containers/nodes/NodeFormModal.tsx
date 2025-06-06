import { Button } from "@/components/button/Button";
import { InputField } from "@/components/forms/InputField";
import Modal from "@/components/modal/Modal";
import { SCROLLBAR } from "@/constants/theme";
import { useAlert } from "@/context/AlertContext";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Node, useReactFlow } from "reactflow";
import * as yup from "yup";

type Props = {
  open: boolean;
  togleModal: () => void;
  data?: any;
};

const schema = yup.object().shape({
  label: yup.string().required("Label wajib diisi").max(50, "Maksimal 50 karakter"),
  index: yup.string().nullable().max(10, "Maksimal 10 karakter"),
  comment: yup.string().nullable(),
});

const NodeFormModal: React.FC<Props> = ({ open, togleModal, data }) => {
  const { showAlert } = useAlert();
  const { setNodes } = useReactFlow();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    if (data) {
      const fullLabel = data?.data?.label || "";
      const labelMatch = fullLabel.match(/^(.*?)\((.*?)\)$/);

      const label = labelMatch ? labelMatch[1].trim() : fullLabel;
      const index = labelMatch ? labelMatch[2].trim() : "";

      reset({
        label: label,
        index: index,
        comment: data?.data?.comment || "",
      });
    } else {
      reset({
        label: "",
        index: "",
        comment: "",
      });
    }
  }, [data, reset]);

  const onSubmit = async (values: any) => {
    try {
      setNodes((prevNodes: Node[]) =>
        prevNodes.map((node: Node) =>
          node.id === data.id
            ? {
                ...node,
                data: {
                  ...node.data,
                  label: values.index
                    ? `${values.label}(${values.index})`
                    : values.label,
                  comment: values.comment,
                },
              }
            : node
        )
      );
      showAlert("Berhasil update data", "success");
      togleModal();
    } catch (error) {
      showAlert(
        (error as any).response?.data?.message || "Gagal mengubah data",
        "error"
      );
    }
  };

  return (
    <div>
      <Modal title="Edit Node" open={open} onClose={togleModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={`px-4 pt-6 overflow-y-auto max-h-[70vh] ${SCROLLBAR}`}
          >
            <InputField
              label="Label"
              name="label"
              register={register("label")}
              error={errors.label}
            />
            <InputField
              label="Index"
              name="index"
              register={register("index")}
              error={errors.index}
            />
            <InputField
              label="Comment"
              name="comment"
              register={register("comment")}
              error={errors.comment}
            />
            <div className="pb-4 flex flex-row justify-end gap-4">
              <Button type="reset" onClick={togleModal} color="danger">
                close
              </Button>
              <Button type="submit" color="success">
                Simpan
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NodeFormModal;
