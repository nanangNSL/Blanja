import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel'
import Container from '@mui/material/Container';

const images = [
  {
    url: 'https://res.cloudinary.com/dwg17vn35/image/upload/v1663321002/brooke-cagle-z1B9f48F5dc-unsplash_l5yayb.jpg',
    title: 'Trends in 2020',
    width: '40%',
  },
  {
    url: 'https://res.cloudinary.com/dwg17vn35/image/upload/v1663321007/dom-hill-nimElTcTNyY-unsplash_yzidg9.jpg',
    title: 'Clothes',
    width: '30%',
  },
  {
    url: 'https://res.cloudinary.com/dwg17vn35/image/upload/v1663321008/c_dnjqzd.jpg',
    title: 'Couple Edition',
    width: '30%',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  margin: '1%',
  borderRadius: '15px',
  minWidth: 300,
  minHeight: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: '7px'
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  borderRadius: '15px'
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
  borderRadius: '7px'
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
  borderRadius: '7px'
}));

export default function ButtonBases() {
  return (
    <Container sx={{ marginTop : '4vh', overflow: 'auto'}}>
        <Carousel>
                <Box sx={{ display: 'flex', flexWrap: 'row', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
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
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
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
