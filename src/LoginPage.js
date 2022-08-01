import * as React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function BoxComponent() {
  return (
    // main box

    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f6f6ef",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* white strip */}
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          padding: "5px 0px"
          // height: "38%",
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
                  fontWeight: 800,
                  fontSize: 30,
                  //fontFamily: "Avenir Light,Avenir,Helvetica,Arial,sans-serif",
                }}
                variant="h5"
                component="body1"
                align="center"
                gutterBottom
              >
                Log in to access the YC Application

              </Typography>
            </Box>
          </Box>

          {/* right part */}

          <Box
            component="form"
            // sx={{
            //   margin: "auto",
            // }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{
                width: "100%",
                // marginTop: 5,
                // margin: 3
              }}
              // id="standard-basic"
              label="Username or Email"
              variant="standard"
            />
            <TextField
              sx={{
                width: "100%",
                marginTop: 5,
                // marginLeft: 2,
              }}
              // id="standard-basic"
              label="Password"
              variant="standard"
            />

            <Typography
              sx={{
                marginTop: 2,
                fontFamily: "Avenir Light,Avenir,Helvetica,Arial,sans-serif",
              }}
              variant="subtitle1"
              component="div"
            >
              Tip: if you already have a username and password for{" "}
             <span sx={{ fontWeight: 800, m: 1 }} > Hacker News</span>, you can use them here.
            </Typography>

            <Button
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#f06827",
                marginTop: 2,
              }}
              variant="contained"
            >
              LOG IN
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
    </Box>
  );

  // return (
  //     //enclosing in the parent element
  //     <div className='login-page' >
  //         <Box  //using self closing tags because no content to display
  //             sx={{
  //                 width: "100%",
  //                 height: "100vh",
  //                 backgroundColor: "#f6f6ef",
  //                 position: "relative"
  //             }} />

  //         <div className='center' >
  //             {/* left part */}
  //             <Box
  //             //horizontal center part
  //                 sx={{
  //                     width: "100vw",
  //                     height: "47vh",
  //                     backgroundColor: "white",
  //                     position: "absolute",
  //                     top: 196
  //                 }}>

  //                 <Box sx={{
  //                     width: '17%',
  //                     height: "50%",
  //                     marginLeft: "20%",
  //                     marginTop: 10,
  //                     // backgroundColor: "yellow"
  //                 }} >
  //                     <Box
  //                         component="img"
  //                         sx={{
  //                             height: 233,
  //                             width: 400,
  //                             maxHeight: { xs: 233, md: 167 },
  //                             maxWidth: { xs: 350, md: 250 },

  //                         }}
  //                         alt="logo"
  //                         src="https://account.ycombinator.com/packs/media/images/yc-logo-e731d4cd66838cebc1d5599da04392ff.svg"
  //                     />
  //                     <Box>
  //                         <Typography style={{ fontWeight: 600, fontSize: 30, }} variant="h5" component="body1" align="center" gutterBottom>
  //                             Log in to access the YC Application
  //                         </Typography>
  //                     </Box>

  //                 </Box>

  //             </Box>

  //             {/* right part */}

  //             <Box
  //             // sx={{
  //             //     display:"flex",
  //             //     alignItems:"right",
  //             //     justifyContent:"right"
  //             // }}
  //             >
  //                 <Box
  //                     component="form"
  //                 // sx={{
  //                 //     '& > :not(style)': { m: 1, width: '25ch' },
  //                 // }}
  //                 // noValidate
  //                 // autoComplete="off"
  //                 >
  //                     <TextField id="standard-basic" label="Username or Email" variant="standard" />
  //                     {/* <TextField id="standard-basic" label="Password" variant="standard" /> */}
  //                 </Box>
  //             </Box>

  //         </div>

  //     </div>

  // );
}
