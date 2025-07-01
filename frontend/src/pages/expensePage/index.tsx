import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { type ReactNode } from 'react'
import ExpenseTable from './ExpenseTable';

const ExpensePage = () : ReactNode => {
  const theme = useTheme();
  
  return (
    <>
      <Box sx={{boxShadow : theme.shadows[10], margin : theme.spacing(2), marginTop : theme.spacing(13), padding : theme.spacing(4), backgroundColor : theme.palette.background.default,borderRadius : "20px"}}>
        <Box sx={{display : "flex",justifyContent : "space-between"}}>
          <Box id="filters" sx={{display : "flex", gap : theme.spacing(2)}}>
            <Button variant='contained'>Filter1</Button>
            <Button variant='contained'>Filter2</Button>
            <Button variant='contained'>Filter3</Button>
          </Box>
          <Box id = "add button">
              <Button variant='contained'>Add Expense</Button>
          </Box>
        </Box>
        <Box id ="table" sx={{padding : theme.spacing(4), marginTop : theme.spacing(2)}}>
          <ExpenseTable />
        </Box>
        <Box id="pagination">

        </Box>
      </Box>
    </>
  )
}

export default ExpensePage;
