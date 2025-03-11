import { CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import BaseCard from "../../components/common/card/BaseCard";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import * as yup from "yup";
import { useAlert } from "../../context/AlertContext";
import { InputText } from "../../components/common/input";

// const schema = yup.object().shape({
//   barcode: yup.string().required("Barcode wajib diisi"),
// });

const TrackingCard = () => {
  const { showAlert } = useAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      showAlert("Berhasil Scan Barcode", "success");
    } catch (error) {
      console.error("Login gagal:", error);
      showAlert(error?.response?.data?.message, "error");
    }
  };

  return (
    <BaseCard>
      <Typography variant="h6" textAlign="center" p={2}>
        Please enter the barcode here for real-time and accurate document
        tracking
      </Typography>
      <Divider />
      <CardContent>
        <form style={{ marginTop: "20px" }} onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label="Barcode"
            name="barcode"
            register={register}
            error={errors.barcode}
          />
        </form>
      </CardContent>
    </BaseCard>
  );
};

export default TrackingCard;
