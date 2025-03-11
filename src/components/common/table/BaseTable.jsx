import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { styled } from "@mui/material";
import { COLOR } from "../../../constants/color";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLOR.primary,
    color: theme.palette.common.white,
    textOverflow: "ellipsis",
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

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer
      component={Paper}
      ref={ref}
      sx={{
        border: "none",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px transparent",
        "&::-webkit-scrollbar": {
          borderRadius: "0 20px 20px 0",
          height: "0",
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
      {...props}
    />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow,
  TableBody,
};

const ReactVirtualizedTable = ({ columns, rows }) => {
  const renderHeader = () => (
    <StyledTableRow>
      {columns.map((column) => (
        <StyledTableCell
          key={column.dataKey}
          style={{
            width: column.width,
          }}
          align={column.numeric ? "right" : "left"}
        >
          {column.label}
        </StyledTableCell>
      ))}
    </StyledTableRow>
  );

  const renderRowContent = (_index, row) => (
    <>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric ? "right" : "left"}
          style={{
            overflowWrap: "break-word",
          }}
        >
          {}
          {row[column.dataKey]}
        </TableCell>
      ))}
    </>
  );

  return (
    <Paper style={{ height: 340, width: "100%", borderRadius: "20px" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={renderHeader}
        itemContent={renderRowContent}
      />
    </Paper>
  );
};

export default ReactVirtualizedTable;
