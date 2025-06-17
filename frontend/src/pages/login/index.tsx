import { Box, Grid, Typography, useTheme } from "@mui/material";
import LoginForm from "./LoginForm";
import { useState } from "react";
import RegisterationForm from "./RegisterationForm";

const LoginPage = () => {
    const theme = useTheme();
    const [loginTrue,setLoginTrue] = useState<boolean>(true);

    const handleModeChange = () => {
        setLoginTrue((prev) => !prev);
    }

    return <>
     <Box
      sx={{
        position: 'fixed',
        alignItems : "center"
      }}
    >
    <img src='https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg' style={{position : "relative",width: '100%', height: 'auto'}}/>
        {
            loginTrue ? <LoginForm onChange={handleModeChange}/> : <RegisterationForm onChange= {handleModeChange}/> 
        }
    </Box>
    </>
}

export default LoginPage;
