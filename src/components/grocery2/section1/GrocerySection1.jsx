import React, { useState } from "react"; // styled components
import { Box, styled, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import PropTypes from "prop-types";

import Tab1 from "./Tab1/Tab1";
import Tab2 from "./Tab2/Tab2";

const StyledBox = styled(Box)(() => ({
  flexGrow: 1,
  bgcolor: "background.paper",
  display: "flex",
  "@media only screen and (max-width: 850px)": {
    flexDirection: "column",
  },
}));
const StyledBoxTabs = styled(Box)(() => ({
  borderRight: 1,
  borderColor: "divider",
  width: "20%",
  "@media only screen and (max-width: 850px)": {
    width: "100%",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: "0" }}>
          <Typography style={{ padding: "0" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const GrocerySection1 = () => {
  const [value, setValue] = useState(0);
  const [orientation, setOrientation] = useState("vertical");
  const mobileSize = useMediaQuery("(max-width:850px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledBox>
      <StyledBoxTabs>
        <Tabs
          orientation={mobileSize ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab label="رسانه حاصل نوین" {...a11yProps(0)} />
          <Tab label="اخبار و وبلاگ" {...a11yProps(1)} />
        </Tabs>
      </StyledBoxTabs>
      <TabPanel style={{ width: "100%" }} value={value} index={0}>
        <Tab1 />
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={1}>
        <Tab2 />
      </TabPanel>
    </StyledBox>
  );
};

export default GrocerySection1;
