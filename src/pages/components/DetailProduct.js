import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem"
  }
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width: "40%",
  margin: "1%",
  marginLeft: "4%",
  backgroundColor: "#9B9B9B !important",
  [`&.${linearProgressClasses.dashedColorSecondary}`]: {
    backgroundColor: "#9B9B9B !important"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#DB3022"
  }
}));

export default function DetailProduct() {
  return (
    <Container sx={{ marginTop: "2vh" }}>
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Informasi Produk</Typography>
      </ThemeProvider>
      <Box sx={{ marginTop: "2vh" }}>
        <Typography variant="h6">Condition</Typography>
        <Typography variant="body1" sx={{ color: "#DB3022" }}>
          New
        </Typography>
      </Box>
      <Box sx={{ marginTop: "2vh" }}>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body1" sx={{ color: "#9B9B9B" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis
          laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit
          imperdiet ac ac felis. Etiam tincidunt tristique placerat.
          Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris
          vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at,
          ornare suscipit magna. Donec non magna rutrum, pellentesque augue eu,
          sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
          sed enim vel turpis blandit imperdiet ac ac felis. In ultricies rutrum
          tempus. Mauris vel molestie orci.
        </Typography>
      </Box>
      <Box sx={{ marginTop: "2vh" }}>
        <Typography variant="h6">Product review</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "2vh", overflow: 'hidden' }}>
        <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
          <Grid item xs={2} >
            <Stack spacing={2} elevation={3}>
              <Item
                sx={{
                  display: "flex"
                }}
                elevation={0}
                textAlign="center"
              >
                <Typography variant="h2">5.0</Typography>
                <Typography variant="caption" sx={{ marginTop: "4vh" }}>
                  /10
                </Typography>
              </Item>
              <Box sx={{ display: "flex" }}>
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                (10)
              </Box>
            </Stack>
          </Grid>
          <Grid xs={3} sx={{ paddingTop: '3%', paddingLeft : '2%' }}>
            <Stack spacing={0} >
              <Item sx={{ display: "flex", padding: '1px' }}  elevation={0}>
                <StarIcon fontSize="small" color="warning" />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  5
                </Typography>
                <BorderLinearProgress variant="determinate" value={100} />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  4
                </Typography>
              </Item>
              <Item sx={{ display: "flex", padding: '1px'}}  elevation={0}>
                <StarIcon fontSize="small" color="warning" />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  4
                </Typography>
                <BorderLinearProgress variant="determinate" value={0} />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  0
                </Typography>
              </Item>
              <Item sx={{ display: "flex", padding: '1px' }} elevation={0}>
                <StarIcon fontSize="small" color="warning" />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  3
                </Typography>
                <BorderLinearProgress variant="determinate" value={0} />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  0
                </Typography>
              </Item>
              <Item sx={{ display: "flex", padding: '1px' }}  elevation={0}>
                <StarIcon fontSize="small" color="warning" />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  2
                </Typography>
                <BorderLinearProgress variant="determinate" value={0} />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  0
                </Typography>
              </Item>
              <Item sx={{ display: "flex", padding: '1px' }}  elevation={0}>
                <StarIcon fontSize="small" color="warning" />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  1
                </Typography>
                <BorderLinearProgress variant="determinate" value={0} />
                <Typography
                  variant="body2"
                  sx={{ marginLeft: "1vw", color: "#9B9B9B" }}
                >
                  0
                </Typography>
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
