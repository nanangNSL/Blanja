import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Title6 from "./Title6";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary
}));

export default function BasicGrid() {
  const [value, setValue] = React.useState(dayjs());
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={2} sx={{ border: "1px solid gray" }}>
        <Grid xs={12}>
          <Title6 />
          <Divider variant="middle" />
        </Grid>
        <Grid xs={12}>
          <Item elevation={0}>
            <Grid container spacing={2}>
              <Grid xs={8}>
                <Item elevation={0}>
                  <Box component="form">
                    <nav aria-label="main mailbox folders">
                      <List>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon sx={{ width: "120px" }}>
                              <FormLabel>Name</FormLabel>
                            </ListItemIcon>
                            <ListItemText>
                              <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{ width: "435px" }}
                              />
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon sx={{ width: "120px" }}>
                              <FormLabel>Email</FormLabel>
                            </ListItemIcon>
                            <ListItemText>
                              <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{ width: "435px" }}
                              />
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon sx={{ width: "120px" }}>
                              <FormLabel>Phone number</FormLabel>
                            </ListItemIcon>
                            <ListItemText>
                              <TextField
                                id="outlined-basic"
                                variant="outlined"
                                sx={{ width: "435px" }}
                              />
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon sx={{ width: "120px" }}>
                              <FormLabel>Gender</FormLabel>
                            </ListItemIcon>
                            <ListItemText>
                              <FormControl>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="row-radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                  />
                                  <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon sx={{ width: "120px" }}>
                              <FormLabel>Date of birth</FormLabel>
                            </ListItemIcon>
                            <ListItemText>
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                  <DatePicker
                                    views={["year", "month", "day"]}
                                    label="Year only"
                                    value={value}
                                    onChange={(newValue) => {
                                      setValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                      <TextField
                                        {...params}
                                        helperText={null}
                                      />
                                    )}
                                  />
                                </Stack>
                              </LocalizationProvider>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                        <ListItem>
                          <ListItemButton>
                            <ListItemIcon
                              sx={{ width: "120px" }}
                            ></ListItemIcon>
                            <ListItemText>
                              <Button
                                variant="contained"
                                sx={{
                                  borderRadius: "25px",
                                  bgcolor: "#DB3022",
                                  width: "10vw"
                                }}
                              >
                                Save
                              </Button>
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Box>
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item elevation={0}>
                  <Stack
                    direction="column"
                    spacing={2}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://res.cloudinary.com/dwg17vn35/image/upload/v1662024205/Profile/nilmtfjc3qfs58gkaufo.jpg"
                      sx={{ width: 150, height: 150 }}
                    />
                  </Stack>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: "2vh"
                    }}
                  >
                    <Button
                      variant="outlined"
                      component="label"
                      sx={{
                        borderRadius: "25px",
                        borderColor: "#9B9B9B",
                        color: "#9B9B9B",
                        width: "10vw"
                      }}
                    >
                      Select image
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
