import type { WrapperProps } from "../types/wrapper";
import { Box, Button, Grid, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const PageWrapper = ({ children }: WrapperProps) => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", padding: theme.spacing(5) }}>
      <Grid size={2}></Grid>
      <Grid size={8} sx={{ p: theme.spacing(0.5) }}>
        {children}
      </Grid>
      <Button
        sx={{
          position: "absolute",
          borderRadius: "100px",
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
