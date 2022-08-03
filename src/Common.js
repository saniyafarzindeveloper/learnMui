import React from "react";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import "./App.css";
import { Box } from "@mui/system";


export default function Common({formChange}) {
  return <>
  <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f6f6ef",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        flexDirection:"column",
        fontFamily:"Avenir Light,Avenir,Helvetica,Arial,sans-serif",
      }}
    >
        {formChange ? <LoginPage /> : <SignUp />}

    </Box>
  
  </>;
}
