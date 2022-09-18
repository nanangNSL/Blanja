import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function Navtabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually"
        >
          <Tab label="Home >" />
          <Tab label="Category >" />
          <Tab label="T-Shirt" />
        </Tabs>
      </Box>
    </Container>
  );
}
