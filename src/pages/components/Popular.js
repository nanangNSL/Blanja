import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
// import { styled } from '@mui/material/styles';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import StarIcon from '@mui/icons-material/Star';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "-0.5rem !important"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem"
  }
};

export default function MediaCard() {
  return (
    <Container sx={{ marginTop: "4vh" }}>
      <ImageList sx={{ width: '100%', height: '100%' }} cols={5} rowHeight={330}>
        {[...new Array(10)].map((item, index) => (
          <ImageListItem key={index}>
            <Card sx={{ MaxWidth: 345, minWidth: 200, margin : '1.5%' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://res.cloudinary.com/dwg17vn35/image/upload/v1663327582/gez-xavier-mansfield-b34E1vh1tYU-unsplash_1_lqpb3v.png"
                alt="green iguana"
              />
              <CardContent>
              <ThemeProvider theme={theme}>
                  <Typography gutterBottom variant="h5" component="div">
                    Men's formal suit - Black & White
                  </Typography>
                </ThemeProvider>
                <Typography variant="body1">$ 40.0</Typography>
                <Typography variant="caption" color="text.secondary">
                  Zalora Cloth
                </Typography>
                <Box sx={{ display: 'flex' }}>
                 <StarIcon fontSize="small" color="warning"/>
                 <StarIcon fontSize="small" color="warning"/>
                 <StarIcon fontSize="small" color="warning"/>
                 <StarIcon fontSize="small" color="warning"/>
                 <StarIcon fontSize="small" color="warning"/>
                 <Box>
                 (10)
                 </Box>
                
                 
                </Box>
              </CardContent>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
