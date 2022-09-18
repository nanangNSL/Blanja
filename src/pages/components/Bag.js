import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Avatar from "@mui/material/Avatar";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary
}));

const ButtonBuy = styled(Button)({
  width: "100vw",
  backgroundColor: "#DB3022",
  borderRadius: "10px"
});

export default function Bag() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked[0]}
            onChange={handleChange2}
            sx={{
              color: "#DB3022",
              "&.Mui-checked": {
                color: "#DB3022"
              }
            }}
          />
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked[1]}
            onChange={handleChange3}
            sx={{
              color: "#DB3022",
              "&.Mui-checked": {
                color: "#DB3022"
              }
            }}
          />
        }
      />
    </Box>
  );

  return (
    <Container sx={{ marginTop: "4vh" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={7}>
            <Item>
              <Grid container spacing={3}>
                <Grid xs={12}>
                  <FormControlLabel
                    label="Select all items (2 items selected)"
                    control={
                      <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                        sx={{
                          color: "#DB3022",
                          "&.Mui-checked": {
                            color: "#DB3022"
                          }
                        }}
                      />
                    }
                  />
                  <Button sx={{ float: "right" }} color="error">
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Item>
            {children.props.children.map((child, index) => (
              <Item key={index} sx={{ marginTop: "2vh" }} direction="row">
                <Card sx={{ display: "flex" }} elevation={0}>
                  <Box sx={{ display: "contents" }}>{child}</Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "1vh"
                    }}
                  >
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      src="https://res.cloudinary.com/dwg17vn35/image/upload/v1663327582/gez-xavier-mansfield-b34E1vh1tYU-unsplash_1_lqpb3v.png"
                      variant="rounded"
                    />
                  </Box>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography variant="body1">
                      Men's formal suit - Black
                    </Typography>
                    <Typography variant="caption">Zalora Cloth</Typography>
                  </CardContent>
                  <Box sx={{ display: "flex", marginTop: "2vh" }}>
                    <RemoveCircleIcon
                      sx={{ marginRight: "1vw", color: "#D4D4D4" }}
                      fontSize="large"
                    />
                    <Typography variant="body2" sx={{ marginTop: "1vh" }}>
                      2
                    </Typography>
                    <AddCircleOutlineIcon
                      sx={{ marginLeft: "1vw", color: "#D4D4D4" }}
                      fontSize="large"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        marginLeft: "17vh",
                        marginTop: "3vh",
                        fontWeight: "bold"
                      }}
                    >
                      $ 20.0
                    </Typography>
                  </Box>
                </Card>
              </Item>
            ))}
          </Grid>
          <Grid xs={2} sm={4} md={4}>
            <Item>
              <Card sx={{ maxWidth: 345 }} elevation={0}>
                <CardActionArea>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Shopping summary
                    </Typography>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                      <Item
                        sx={{
                          width: "100vw",
                          display: "flex",
                          borderColor: "none !important"
                        }}
                        elevation={0}
                      >
                        <Typography variant="body2" color="text.secondary">
                          Total price
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ marginLeft: "17vh", fontWeight: "bold" }}
                        >
                          $ 40.0
                        </Typography>
                      </Item>
                    </Stack>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <ButtonBuy variant="contained" color="success" size="medium">
                    Buy
                  </ButtonBuy>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
