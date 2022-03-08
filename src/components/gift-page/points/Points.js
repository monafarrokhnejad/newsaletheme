import React from "react";

import { Box, Grid, styled } from "@mui/material";

const StyledBoxMain = styled(Box)(({ theme }) => ({
  "@media only screen and (min-width: 960px) ": {
    position: "absolute",
    top: "10px",
    left: "13px",
  },
  boxShadow: "2px 4px 7px gray",
  background: "#f68e1f",
  padding: " 2rem 1rem",
  borderRadius: "10px",
  color: "white",
  fontSize: "13px",
  position: "relative",
  border: "1px solid #b7b7b7",
  ".offers": {
    position: "absolute",
    left: "50px",
    top: "90%",
    background: "#eaeaea",
    padding: "6px 20px",
    borderRadius: "5px",
    color: "#888",
    fontSize: " 11px",
    display: "flex",
    alignItems: "center",
    border: "1px solid #cacaca",
    // lineHeight:"0",
    ".countOffers": {
      position: "absolute",
      background: "white",
      fontSize: "1.2rem",
      borderRadius: "50%",
      border: "1px solid #cacaca",
      color: "#f68e1f",
      top: "-3px",
      left: "-20px",
      fontWeight: "bold",
      minWidth: "35px",
      minHeight: "35px",
      textAlign: "center",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      span: {
        position: "relative",
        top: "1px",
      },
    },
  },
}));
const StyledBox = styled(Box)(({ theme }) => ({
  "@media only screen and (max-width: 959px) and (min-width:599px)": {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "start",
  },
  color: "#888",
  fontSize: "12px",
  ".sumBox": {
    margin: "5px 0",
    fontSize: "10px",
    textAlign: "right",
    "@media only screen and (max-width: 599px)": {
      fontSize: "8px",
    },
  },
  ".sumBox span": {
    background: "#ececec",
    color: "#f68e1f",
    padding: "5px 11px 3px",
    borderRadius: "20px",
    fontWeight: "bold",
  },
  ul: {
    textAlign: "right",
  },
}));

const Points = () => {
  return (
    <div>
      <StyledBoxMain>
        <Grid container>
          <Grid item xs={7}>
            <span style={{ fontSize: "3rem", fontWeight: "bold" }}>820</span>
            <span>امتیــــاز</span>
          </Grid>
          <Grid item xs={5} textAlign={"right"}>
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>
              امتیازات شما
            </span>
            <br />
            <div
              style={{
                fontSize: "11px",
                lineHeight: "1.3",
              }}
            >
              <span>مجموع امتیاز کسب شده شما تا این لحظه</span>
            </div>
          </Grid>
        </Grid>
        <div className={"offers"}>
          <span>پیشنهادات فعال</span>
          <div className={"countOffers"}>
            <span>12</span>
          </div>
        </div>
      </StyledBoxMain>
      <div style={{ paddingTop: "3rem" }}></div>
      <StyledBox>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginBottom: "2rem",
          }}
        >
          <div style={{ marginLeft: "2rem" }}>
            <div className="sumBox">
              <span>2300</span>
            </div>
            <span style={{ fontSize: "10px" }}>مجموع امتیازات مصرف شده</span>
          </div>

          <div>
            <div className="sumBox">
              <span>12</span>
            </div>
            <span style={{ fontSize: "10px" }}>تعداد جوایز استفاده شده</span>
          </div>
        </div>
        <ul>
          <li>
            <span style={{ color: "#f68e1f", fontWeight: "bold" }}> . </span>
            لورم ایپسوم متن ساختگی با تولید سادگی
          </li>
          <li>
            <span style={{ color: "#f68e1f", fontWeight: "bold" }}> . </span>
            لورم ایپسوم متن ساختگی با تولید سادگی
          </li>
          <li>
            <span style={{ color: "#f68e1f", fontWeight: "bold" }}> . </span>
            لورم ایپسوم متن ساختگی با تولید سادگی
          </li>
        </ul>
      </StyledBox>
    </div>
  );
};

export default Points;
