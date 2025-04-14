import { Button } from "@/components/button/Button";
import { InputField } from "@/components/forms/InputField";
import Modal from "@/components/modal/Modal";
import { SCROLLBAR } from "@/constants/theme";
import { useAlert } from "@/context/AlertContext";
import BaseService from "@/lib/services/BaseService";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {
  open: boolean;
  togleModal: () => void;
  data?: any;
  refetch?: () => void;
};

const service = new BaseService();

const schema = yup.object().shape({
  position: yup.string().required("Position wajib diisi"),
});

const RolesWorkflowForm: React.FC<Props> = ({
  open,
  togleModal,
  data,
  refetch,
}) => {
  const { showAlert } = useAlert();
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
      reset({
        position: data.position,
      });
    } else {
      reset({
        position: "",
      });
    }
  }, [data, reset]);

  const onSubmit = async (values: any) => {
    try {
      if (data) {
        await service.post("/department", {
          id: data.id,
          ...values,
        });
        showAlert("Berhasil mengubah data", "success");
      } else {
        await service.post("/department", values);
        showAlert("Berhasil menambahkan data", "success");
      }

      togleModal();
    } catch (error) {
      showAlert(
        (error as any).response?.data?.message || "Gagal mengubah data",
        "error"
      );
    } finally {
      refetch && refetch();
    }
  };

  return (
    <div>
      <Modal title="Form Roles Workflow" open={open} onClose={togleModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className={`px-4 pt-6 overflow-y-auto max-h-[70vh] ${SCROLLBAR}`}
          >
            <InputField
              label="Position"
              name="position"
              register={register("position")}
              error={errors.position}
            />
            <div className="pb-4 flex flex-row justify-end gap-4">
              <Button onClick={togleModal} variant="danger">
                close
              </Button>
              <Button type="submit" variant="success">
                Simpan
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default RolesWorkflowForm;
