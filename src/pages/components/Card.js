import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

const ButtonClick = styled(Button)({
    variant: 'outlined',
    borderColor: 'Black',
    borderRadius: "25px",
    color: '#222222',
    "&hover, &:active":{
        borderColor: 'Black !important',
        color: '#222222',
    },
    "&focus":{
        borderColor: 'Black',
        color: '#222222',
    }
})

export default function ResponsiveGrid() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid xs={6} sm={4} md={4} >
            <Item elevation={0}>
              <Card sx={{ maxWidth: 345 }} elevation={0}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="300"
                  image="https://res.cloudinary.com/dwg17vn35/image/upload/v1663497273/1de17b40-c750-40ed-a618-ca2c5ee79da0_3_fmbe3m.png"
                  sx={{borderRadius: "5px"}}
                />
                <CardActions elevation={0} sx={{border: 'none'}}>
                  <Stack direction="row" spacing={1} elevation={0}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://res.cloudinary.com/dwg17vn35/image/upload/v1663497276/5f9d591f-54e0-4f48-99c8-33e5ab47c871_2_cyglwk.png"
                      variant="rounded"
                      sx={{ width: 60, height: 56 }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://res.cloudinary.com/dwg17vn35/image/upload/v1663497273/4bcf6332-eea3-4278-8c75-9be1f59cbfa3_2_ifvle1.png"
                      variant="rounded"
                      sx={{ width: 60, height: 56 }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://res.cloudinary.com/dwg17vn35/image/upload/v1663497273/ef0755f4-97be-42d3-a1e9-e3c892b52706_2_ybgu2u.png"
                      variant="rounded"
                      sx={{ width: 60, height: 56 }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://res.cloudinary.com/dwg17vn35/image/upload/v1663497273/f2c747c5-1f63-4476-b1b9-d8aa8ace2ac2_2_hi1shz.png"
                      variant="rounded"
                      sx={{ width: 60, height: 56 }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://res.cloudinary.com/dwg17vn35/image/upload/v1663497273/1de17b40-c750-40ed-a618-ca2c5ee79da0_3_fmbe3m.png"
                      variant="rounded"
                      sx={{ width: 56, height: 56 }}
                    />
                  </Stack>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid xs={6} sm={4} md={5}>
            <Item sx={{ textAlign: "start" }} elevation={0}>
              <Typography variant="h4">Baju muslim pira</Typography>
              <Typography variant="caption">Zalora Cloth</Typography>
              <Box sx={{ display: "flex" }}>
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                <StarIcon fontSize="small" color="warning" />
                (10)
              </Box>
              <Box sx={{ marginTop: "2vh" }}>
                <Typography variant="body1">Price</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  $ 20.0
                </Typography>
              </Box>
              <Box sx={{ marginTop: "2vh" }}>
                <Typography variant="body1">Color</Typography>
                <Stack direction="row">
                  <IconButton aria-label="delete">
                    <CircleIcon sx={{ color: "#1A1A1A" }} fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <CircleIcon sx={{ color: "#D84242" }} fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <CircleIcon sx={{ color: "#4290D8" }} fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <CircleIcon sx={{ color: "#42D86C" }} fontSize="large" />
                  </IconButton>
                </Stack>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Stack direction="column">
                      <Typography variant="body1" sx={{ color: '#222222'}}>Size</Typography>
                      <Box sx={{ display: "flex", marginTop: "2vh" }}>
                        <RemoveCircleIcon
                          sx={{ marginRight: "1vw", color: "#D4D4D4" }}
                          fontSize="large"
                        />
                        <Typography variant="body2" sx={{ marginTop: "1vh", color : '#222222' }}>
                          28
                        </Typography>
                        <AddCircleOutlineIcon
                          sx={{ marginLeft: "1vw", color: "#D4D4D4" }}
                          fontSize="large"
                        />
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={4}>
                    <Stack direction="column">
                      <Typography sx={{ color: '#222222'}}>Jumlah</Typography>
                      <Box sx={{ display: "flex", marginTop: "2vh" }}>
                        <RemoveCircleIcon
                          sx={{ marginRight: "1vw", color: "#D4D4D4" }}
                          fontSize="large"
                        />
                        <Typography variant="body2" sx={{ marginTop: "1vh", color : '#222222' }}>
                          1
                        </Typography>
                        <AddCircleOutlineIcon
                          sx={{ marginLeft: "1vw", color: "#D4D4D4" }}
                          fontSize="large"
                        />
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
              <Box >
              <Stack spacing={2} direction="row">
                  <ButtonClick variant="outlined">Chat</ButtonClick>
                <ButtonClick variant="outlined">
                Add bag
                </ButtonClick>
                <Button variant="contained" sx={{ borderRadius: '25px', bgcolor: '#DB3022'}}>
                Buy Now
                </Button>
              </Stack>
              
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
