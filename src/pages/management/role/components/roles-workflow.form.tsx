import { Button } from "@/components/button/Button";
import { InputField } from "@/components/forms/InputField";
import Modal from "@/components/modal/Modal";
import { SCROLLBAR } from "@/constants/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {
  open: boolean;
  togleModal: () => void;
  data?: any;
};

const schema = yup.object().shape({
  position: yup.string().required("Position wajib diisi"),
});

const RolesWorkflowForm: React.FC<Props> = ({ open, togleModal, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    try {
      const payload = {
        ...values,
      };
      console.log("rrrr", payload);
    } catch (error) {
      console.log("xxxxxx", error);
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
