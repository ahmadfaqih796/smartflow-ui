import SearchIcon from "@mui/icons-material/Search";
import {
   Button,
   InputBase,
   Paper,
   styled
} from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { COLOR } from "../../../constants/color";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: COLOR.primary,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export const InputSearch = () => {
   const onSubmit = (e) => {
      e.preventDefault()
      console.log(e.target.search.value)
   };
  return (
    <div>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: "20px",
         boxShadow: "0px 4px 10px transparent",
        }}
        onSubmit={onSubmit}
      >
        <InputBase
          sx={{
            pl: 2,
            pr: 1,
            flex: 1,
          }}
          placeholder="Cari..."
          name="search"
          inputProps={{ "aria-label": "search" }}
        />
        <ColorButton
          type="submit"
          sx={{ p: "10px", borderRadius: "0 20px 20px 0" }}
          aria-label="search"
        >
          <SearchIcon />
        </ColorButton>
      </Paper>
      
    </div>
  );
};
