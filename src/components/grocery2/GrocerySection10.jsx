import BazarAvatar from "components/BazarAvatar";
import BazarCard from "components/BazarCard";
import FlexBox from "components/FlexBox";
import Quote from "components/icons/Quote";
import { Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system"; // styled components
import bg from "../../../public/assets/images/section10bg.jpg";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(/assets/images/section10bg.jpg) `,
  padding: "1rem 2rem",
  borderRadius: "5px",
  margin: " 1rem 0",
  color: "white",
  minHeight: "250px",
  "& .title": {
    fontSize: "3rem",
    lineHeight: "1",
    fontWeight: "bold",
  },
  "& .description": {
    minHeight: "50px",
    padding: "0 1rem",
    marginTop: "10px",
    minWidth: "50px",
    fontSize: "1rem",
  },
}));

const GrocerySection10 = () => {
  return (
    <Box>
      <StyledGridContainer container alignItems={"center"}>
        {Amar.map((item) => {
          return (
            <Grid item md={3} textAlign={"center"}>
              <div className="title">
                <span>{item.number}</span>
              </div>
              <div className="description">{item.desc}</div>
            </Grid>
          );
        })}
      </StyledGridContainer>
    </Box>
  );
};

const Amar = [
  {
    id: "001",
    number: "200",
    desc: "نماینده رسمی و فعال در سراسر ایران",
    duration: "2",
  },
  {
    id: "002",
    number: "10",
    desc: "بیش از 10کارشناس فنی در کل ایران",
    duration: "2",
  },
  {
    id: "003",
    number: "300",
    desc: "مزرعه و گلخانه آزمایشی در ایران",
    duration: "2",
  },
  {
    id: "004",
    number: "24",
    desc: "سال تجربه مفید درصنعت کشاورزی ایران     ",
    duration: "2",
  },
];

export default GrocerySection10;
