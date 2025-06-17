import type { WrapperProps } from "../types/wrapper";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const PageWrapper = ({ children }: WrapperProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
       
          <Box
          width={"10%"}
            sx={{
              backgroundColor: theme.palette.grey[500],
              boxShadow : theme.shadows[10],
              height: "100%",
              "&:hover": {
                backgroundColor: theme.palette.success.main,
              },
            }}
          >
            <Typography>Dev</Typography>
          </Box>
          <Box width={"90%"}>
          {children}
          </Box>
     
    
      <Button
        sx={{
          width: 50,
          height: 50,
          minWidth: 0,
          position: "absolute",
          borderRadius: "60%",
          boxShadow: theme.shadows[10],
          top: theme.spacing(3),
          right: theme.spacing(5),
        }}
      >
        {" "}
        <SettingsIcon />{" "}
      </Button>
    </Box>
  );
};

export default PageWrapper;
