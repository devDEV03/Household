import {
  alpha,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import type { LoginFormType } from "../../types/loginForm";

const LoginForm = ({onChange} : LoginFormType) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        top: "-10%",
        right: "40%",
        position: "absolute",
        display: "flex",
        gap: theme.spacing(3),
        flexDirection: "column",
        mx: "auto",
        mt: theme.spacing(30),
        boxShadow: theme.shadows[10],
        padding: theme.spacing(5),
        backgroundColor: alpha(theme.palette.background.default, 0.8),
        borderRadius: theme.shape.borderRadius,
        textAlign: "center",
      }}
    >
      <Stack>
        <Typography
          sx={{
            mx: "auto",
            color: theme.palette.success.main,
            fontWeight: "bold",
            zIndex: "1",
          }}
          variant="h4"
        >
          H O U S E H O L D
        </Typography>
        <Typography
          sx={{
            mx: theme.spacing(1),
            color: theme.palette.success.main,
            zIndex: "1",
          }}
        >
          Track your household expenses
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: theme.spacing(2),
        }}
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
      </Stack>
      <Button
        sx={{
          width: "50%",
          mx: "auto",
          backgroundColor: theme.palette.success.main,
          color: theme.palette.background.default,
        }}
      >
        Login
      </Button>
      <Button
        sx={{
          color: theme.palette.grey[700],
          fontWeight: "500",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
            color: theme.palette.success.main,
          },
        }} 
          onClick={onChange}
      >
        Create an Account
      </Button>
    </Box>
  );
};

export default LoginForm;
