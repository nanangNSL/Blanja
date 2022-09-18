import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import Container from "@mui/material/Container";

const images = [
  {
    url: "https://res.cloudinary.com/dwg17vn35/image/upload/v1663326211/hiclipart_15_mfz1il.png",
    title: "Clothes",
    width: "40%"
  },
  {
    url: "https://res.cloudinary.com/dwg17vn35/image/upload/v1663326212/hiclipart_26_kuzanm.png",
    title: "Jeans",
    width: "30%"
  },
  {
    url: "https://res.cloudinary.com/dwg17vn35/image/upload/v1663326211/hiclipart_22_s4umkg.png",
    title: "jeans jacket",
    width: "30%"
  },
  {
    url: "https://res.cloudinary.com/dwg17vn35/image/upload/v1663326212/hiclipart_21_rgdmtn.png",
    title: "Shorts",
    width: "30%"
  },
  {
    url: "https://res.cloudinary.com/dwg17vn35/image/upload/v1663326212/hiclipart_34_a4oja7.png",
    title: "Shoes",
    width: "30%"
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  margin: "1%",
  borderRadius: "15px",
  minWidth: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15
    },
    "& .MuiImageMarked-root": {
      opacity: 0
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor"
    }
  },
    ":nth-of-type(1)": {
        backgroundColor: '#CC0B04'
    },
    ":nth-of-type(2)": {
        backgroundColor: '#1C3391'
    },
    ":nth-of-type(3)": {
        backgroundColor: '#F67B02'
    },
    ":nth-of-type(4)": {
        backgroundColor: '#E31F51'
    },
    ":nth-of-type(5)": {
        backgroundColor: '#57CD9E'
    }
  
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  borderRadius: "7px"
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  borderRadius: "15px"
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
  borderRadius: "7px"
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
  borderRadius: "7px"
}));

export default function ButtonBases() {
  return (
    <Container sx={{ marginTop: "4vh", overflow: "auto" }}>
      <Carousel>
        <Box
          sx={{
            display: "flex",
            flexWrap: "row",
            minWidth: 300,
            width: "100%"
          }}
        >
          {images.map((image) => (
            <ImageButton
              focusRipple
              key={image.title}
              style={{
                width: image.width
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
                  }}
                >
                  {image.title}
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
              </Image>
            </ImageButton>
          ))}
        </Box>
      </Carousel>
    </Container>
  );
}
