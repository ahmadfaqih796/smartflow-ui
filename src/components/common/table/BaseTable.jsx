import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import Chance from "chance";
import { styled } from "@mui/material";
import { COLOR } from "../../../design/color";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   //  backgroundColor: theme.palette.common.black,
    backgroundColor: COLOR.primary,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const chance = new Chance(42);

const createData = (id) => {
  return {
    id,
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    phone: chance.phone(),
    state: chance.state({ full: true }),
  };
};

const columns = [
  {
    width: 100,
    label: "First Name",
    dataKey: "firstName",
  },
  {
    width: 100,
    label: "Last Name",
    dataKey: "lastName",
  },
  {
    width: 50,
    label: "Age",
    dataKey: "age",
    numeric: true,
  },
  {
    width: 110,
    label: "State",
    dataKey: "state",
  },
  {
    width: 130,
    label: "Phone Number",
    dataKey: "phone",
  },
];

const rows = Array.from({ length: 50 }, (_, index) => createData(index));

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer
      component={Paper}
      {...props}
      ref={ref}
      sx={{
        border: "none",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px transparent",
        "&::-webkit-scrollbar": {
          //  width: "0",
          borderRadius: "0 20px 20px 0",
          height: "8px",
         //  backgroundColor: "rgba(0, 0, 0, 0.1)",
          backgroundColor: COLOR.gray,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "0 20px 20px 0",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

const fixedHeaderContent = () => {
  return (
    <StyledTableRow>
      {columns.map((column) => (
        <StyledTableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{ backgroundColor: "background.paper" }}
        >
          {column.label}
        </StyledTableCell>
      ))}
    </StyledTableRow>
  );
};

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

const ReactVirtualizedTable = () => {
  return (
    <Paper style={{ height: 340, width: "100%", borderRadius: "20px" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
};

export default ReactVirtualizedTable;
