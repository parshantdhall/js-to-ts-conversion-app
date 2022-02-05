import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6">JS to TS</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
