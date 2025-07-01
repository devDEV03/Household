import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const ExpenseTable = () => {
  const theme = useTheme();
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#7851A9" }}>
            <TableRow>
                
              <TableCell>
                <Typography
                  color={theme.palette.background.default}
                  variant="h6"
                >
                  Name
                </Typography>
              </TableCell>
              
              <TableCell>
                <Typography
                  color={theme.palette.background.default}
                  variant="h6"
                >
                  Date
                </Typography>
              </TableCell>
              
              <TableCell>
                <Typography
                  color={theme.palette.background.default}
                  variant="h6"
                >
                 Price
                </Typography>
              </TableCell>
              
              <TableCell>
                <Typography
                  color={theme.palette.background.default}
                  variant="h6"
                >
                  Options
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ExpenseTable;
