import type { WrapperProps } from "../types/wrapper";
import { Box, Button, Typography, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";
import householdLogo from "../assets/earlier_household_logo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const PageWrapper = ({ children }: WrapperProps) => {
  const theme = useTheme();
  const [navbarOpen, setNavBarOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100vh",
        borderTopRightRadius : "50%",
      }}
    >
      <>
        <Box
          width={navbarOpen ? "12%" : "0%"}
          sx={{
            boxShadow: theme.shadows[10],
            height: "100%",
            alignItems: "center",
            display: navbarOpen ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mt: theme.spacing(4),
              alignItems: "center",
              height: "10%",
            }}
          >
            <Box
              component="img"
              src={householdLogo}
              alt="Household Logo"
              sx={{ width: "150px", height: "150px" }}
            />
          </Box>

          <Box
            width={"100%"}
            sx={{
              height: "70%",
              mt: theme.spacing(3),
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "50px",
                padding: theme.spacing(2),
                alignItems: "center",
                gap: "10px",
                "&:hover": {
                  backgroundColor: theme.palette.grey[100],
                  borderRadius: "10%",
                  textDecoration: "underline",
                },
              }}
              onClick={() => navigate("/")}
            >
              <HomeOutlinedIcon />
              <Typography variant="h6">Home</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "50px",
                padding: theme.spacing(2),
                alignItems: "center",
                gap: "10px",
                "&:hover": {
                  backgroundColor: theme.palette.grey[100],
                  borderRadius: "10%",
                  textDecoration: "underline",
                },
              }}
              onClick={() => navigate("/timeline")}
            >
              <TimelineOutlinedIcon />
              <Typography variant="h6">Timeline</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "50px",
                padding: theme.spacing(2),
                alignItems: "center",
                gap: "10px",
                "&:hover": {
                  backgroundColor: theme.palette.grey[100],
                  borderRadius: "10%",
                  textDecoration: "underline",
                },
              }}
              onClick={() => navigate("/stats")}
            >
              <AnalyticsOutlinedIcon />
              <Typography variant="h6">Analytics</Typography>
            </Box>
          </Box>
          <Box sx={{ mb: theme.spacing(3) }}>
            {
            
            navbarOpen && <Button
              sx={{
                width: 50,
                height: 50,
                minWidth: 0,
                borderRadius: "60%",
                boxShadow: theme.shadows[10]
              }}
              onClick={() => setNavBarOpen(false)}
            >
              {" "}
              <ArrowBackOutlinedIcon />{" "}
            </Button>
}
          </Box>
        </Box>
      </>
      <Box
        width={navbarOpen ? "88%" : "100%"}
        sx={{backgroundColor : "rgba(255, 99, 71, 0.1)"}}
      >
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
          backgroundColor: theme.palette.background.default,
        }}
      >
        {" "}
        <SettingsIcon />{" "}
      </Button>
      {!navbarOpen && (
        <Button
          sx={{
            width: 50,
            height: 50,
            minWidth: 0,
            position: "absolute",
            borderRadius: "60%",
            boxShadow: theme.shadows[10],
            bottom: theme.spacing(3),
            left: theme.spacing(5),

            backgroundColor: theme.palette.background.default,
          }}
          onClick={() => setNavBarOpen(true)}
        >
          {" "}
          <ArrowForwardIosOutlinedIcon />{" "}
        </Button>
      )}
    </Box>
  );
};

export default PageWrapper;
