import { Grid, styled } from "@mui/material";

const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: "white",
  color: "gray",
  position: "relative",
  padding: "0",
  alignItems: "center",
  "@media(max-width:600px)": {
    direction: "rtl",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
  "& .slideImage": {
    position: "relative",
    width: "auto",
    height: "240px",
  },
  "& figure": {
    width: "auto",
    height: "230px",
    margin: 0,
    padding: 0,
    background: "#fff",
    overflow: "hidden",
  },
  "& .hover01 figure img": {
    // -webkit-transform: scale(1);
    transform: "scale(1)",
    // -webkit-transition: .3s ease-in-out;
    transition: ".3s ease-in-out",
  },
  "& .hover01 figure:hover img": {
    // -webkit-transform: scale(1.3);
    transform: "scale(1.3)",
  },
  "& .commentBox svg": {
    "&:hover": {
      fill: "black",
      cursor: "pointer",
    },
  },
}));

export default StyledGrid;
