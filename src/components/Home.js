import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import compileCode from "../compileCode";

const Home = () => {
  const [jsCode, setJsCode] = useState("");
  const [tsCode, setTsCode] = useState("");

  const handleClick = () => {
    if (jsCode === "" || jsCode === " ") return;
    setTsCode(compileCode(jsCode));
  };
  return (
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
  );
};

export default Home;
