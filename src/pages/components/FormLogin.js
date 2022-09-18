import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../../styles/image/logo.png";
import ButtonGroup from "@mui/material/ButtonGroup";

function LinkRegister(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Don't have a Tokopedia account ? "}
      <Link color="inherit" href="/register" sx={{color :'#DB3022', textDecoration : 'none'}}>
      Register
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={Logo}
            sx={{ width: 200, height: 75 }}
            variant="square"
          />
          <Typography component="h1" variant="h6" sx={{marginTop: '2vh'}}>
            Please login with your account
          </Typography>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{marginTop: '2vh'}}
          >
            <Button variant="outlined" color="error" sx={{ borderColor: '#DB3022 !important'}}>Custommer</Button>
            <Button color="error">Seller</Button>
          </ButtonGroup>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              color="error"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              color="error"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: 2, borderRadius: "25px", bgcolor: '#DB3022' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                 
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{color :'#DB3022', textDecoration : 'none'}}>
                Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <LinkRegister sx={{ mt: 1, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
