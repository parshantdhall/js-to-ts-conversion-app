import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import compileCode from "../compileCode";

const Home = () => {
  const [jsCode, setJsCode] = useState("");
  const [tsCode, setTsCode] = useState("");
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClick = () => {
    if (jsCode === "" || jsCode === " ") return;
    try {
      setTsCode(compileCode(jsCode));
    } catch (e) {
      console.dir(e);
      setOpenAlert(true);
    }
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          my: 3,
          height: "100%",
        }}
      >
        <Grid
          container
          spacing={5}
          columns={16}
          sx={{ width: "100%", height: "100%" }}
        >
          {/* Javascript container */}
          <Grid item xs={16} sm={8}>
            <TextField
              id="js-container"
              label="JS Container"
              multiline
              rows={8}
              placeholder="Please put your javascript code here"
              sx={{
                height: "100%",
                width: "100%",
              }}
              value={jsCode}
              onChange={(e) => setJsCode(e.target.value)}
            />
          </Grid>
          {/* Type script container */}
          <Grid item xs={16} sm={8}>
            <TextField
              id="ts-container"
              label="TS Container"
              multiline
              rows={8}
              value={tsCode}
              sx={{
                height: "100%",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: 5,
          }}
        >
          <Button variant="contained" onClick={handleClick}>
            Convert
          </Button>
        </Box>
      </Container>
      {/* ---------Alert--------- */}
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please check your javascript code for errors before the conversion
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
