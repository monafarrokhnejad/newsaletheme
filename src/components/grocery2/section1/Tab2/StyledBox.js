import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(() => ({
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 0px 5px rgba(3, 0, 71, 0.09)",
  border: "1px solid #f1f1f1",
  "& .carousel-dot": {
    position: "absolute",
    bottom: "10px",
    left: "20px",
  },
  "& H1": {
    color: "#f68e1f",
  },
  "& H6": {
    "&:hover": {
      color: "#f68e1f",
    },
  },
  "& .optionNews": {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    padding: "1rem 0",
    "@media(max-width:600px)": {
      flexDirection: "row",
    },
    "& .data": {
      fontSize: "13px",
      color: "#b3b3b3",
      direction: "rtl",
    },
  },
  "@media(max-width:600px)": {
    "& .optionNews": {
      padding: "1rem 0 3rem",
    },
    "& H1": {
      paddingTop: "2rem",
    },
  },
  "& .hr": {
    backgroundColor: "#f2f2f2",
    height: "1px",
    // margin: "2rem 0 1rem ",
  },
}));

export default StyledBox;
