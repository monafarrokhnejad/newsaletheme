import AppStore from "components/AppStore";
import LazyImage from "components/LazyImage";
import Carousel from "components/carousel/Carousel";
import { H1, H5, H6 } from "components/Typography";
import { Box, Grid, styled } from "@mui/material";
import React from "react"; // styled components

const StyledBox = styled(Box)(() => ({
  borderRadius: "8px",
  overflow: "hidden",
  "& .carousel-dot": {
    position: "absolute",
    bottom: "30px",
    left: "40px"
  }
}));
const StyledGrid = styled(Grid)(({
  theme
}) => ({
  backgroundColor: theme.palette.primary.main,
  position: "relative",
  padding: "2rem 1rem 5rem 40px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse"
  }
}));
const GridItemOne = styled(Grid)(({
  theme
}) => ({
  color: "white",
  [theme.breakpoints.down("sm")]: {
    "& .css-q4ts9v, & .css-pkvvvs": {
      maxWidth: "100%",
      // paddingRight: "1rem"
    }
  }
}));
const GridItemTwo = styled(Grid)(({
  theme
}) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "1.8rem"
  }
}));

const GrocerySectionThirdTab = () => {
  return <Box>
     سوم
  </Box>
};

export default GrocerySectionThirdTab;