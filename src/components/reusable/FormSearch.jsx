import React from "react";
import { InputSearch } from "../common/input";
import Grid from "@mui/material/Grid2";
import { Button, styled } from "@mui/material";
import { COLOR } from "../../constants/color";

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
  backgroundColor: COLOR.primary,
  borderRadius: "20px",
  height: "45px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const FormSearch = ({ extraButton = [] }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 8 }}>
        <InputSearch />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Grid container spacing={2} justifyContent="flex-end">
          {extraButton.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <CustomButton variant="contained" fullWidth>
                {item.label}
              </CustomButton>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormSearch;
