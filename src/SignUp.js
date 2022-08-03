import React from "react";
import "./App.css";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignUp() {
  return (
    //  entire bg

    <>
      {/* white strip */}
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          padding: "5px 0px",
          height: "50%",
        }}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
          }}
          fixed
        >
          {/* left part */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%",
              margin: "auto",
              width: "100%",
            }}
          >
            <img
              className="logo"
              src="https://account.ycombinator.com/packs/media/images/yc-logo-e731d4cd66838cebc1d5599da04392ff.svg"
              alt="logo"
            ></img>

            <Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 40,
                  //fontFamily: "Avenir Light,Avenir,Helvetica,Arial,sans-serif",
                }}
                variant="h5"
                component="body1"
                align="center"
                gutterBottom
              >
                Sign up to access the YC Application
              </Typography>
            </Box>
          </Box>

          {/* right part */}
          <Box
            component="form"
            sx={{
              margin: "auto",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              //         sx={{
              //   '& > :not(style)': { m: 1, width: '31ch' },
              // }}
              sx={{
                width: "48%",
                marginTop: 3,
              }}
              // id="standard-basic"
              label="First Name"
              variant="standard"
            />
            <TextField
              //         sx={{
              //   '& > :not(style)': { m: 1, width: '31ch' },
              // }}
              sx={{
                width: "45%",
                marginTop: 3,
                marginLeft: 3,
              }}
              // id="standard-basic"
              label="Last Name"
              variant="standard"
            />
            <TextField
              sx={{
                width: "100%",
                marginTop: 3,
                // margin: 3
              }}
              // id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              sx={{
                width: "100%",
                marginTop: 3,
                // margin: 3
              }}
              // id="standard-basic"
              label="Username"
              variant="standard"
            />
            <TextField
              sx={{
                width: "100%",
                marginTop: 3,
                // marginLeft: 2,
              }}
              // id="standard-basic"
              label="Password"
              variant="standard"
            />

            <Button
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#f06827",
                marginTop: 2,
                height: 45,
                fontWeight: 800,
                fontSize: 16,
              }}
              variant="contained"
            >
              SIGN UP
            </Button>
            <Typography
              sx={{
                marginTop: 2,
                display: "flex",
                justifyContent: "center",
                color: "#7e7e7e",
                fontFamily: "Avenir Light,Avenir,Helvetica,Arial,sans-serif",
                // fontFamily: Avenir Light,Avenir,Helvetica,Arial,sans-serif;
              }}
              variant="body2"
              gutterBottom
            >
              Forgot your username or password ?
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* bottom text */}
      <Box sx={{
       
      }} >
        <Typography variant="caption" gutterBottom>
          Already have an account? Log in
        </Typography>
      </Box>


    </>
  );
}
