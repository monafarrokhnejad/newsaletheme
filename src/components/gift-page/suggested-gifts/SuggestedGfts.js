import React from "react";
import { Box, CircularProgress, Divider, Grid, styled } from "@mui/material";
import Stack from "@mui/material/Stack";

const StyledBox = styled(Box)(({ theme }) => ({
  background: "transparent",
  display: "flex",
  alignItems: "start",
  justifyContent: "inherit",
  fontSize: "12px",
  padding: "0",
  color: "#a6a6a6",
  marginBottom: "2rem",
  "@media only screen and (max-width: 599px) ": {
    padding: "0",
    marginBottom: "3rem",
    fontSize: "13px",
    borderBottom: "none",
  },

  ".description": {
    marginBottom: "1rem",
    "@media only screen and (max-width: 599px) ": {
      borderBottom: "1px solid #cecece",
      margin: "0",
      paddingBottom: "1rem",
    },

    ".btn": {
      margin: "0",
      fontSize: "10px",
      background: "#eaeaea",
      borderRadius: "5px",
      padding: "3px 10px",
      color: "#888",
      cursor: "pointer",
      border: "1px solid #cacaca",
    },
  },
}));
const SuggestedGifts = () => {
  return (
    <div
      style={{
        maxHeight: "500px",
        overflowY: "auto",
        direction: "ltr",
        marginTop: "2rem",
      }}
    >
      {gifts.map((gift) => {
        return (
          <StyledBox>
            <Grid
              flexDirection={"row-reverse"}
              container
              justifyContent={"end"}
              spacing={1}
              padding={0}
            >
              <Grid
                item
                sm={2}
                xs={3}
                justifyContent={"center"}
                display={"flex"}
                textAlign={"center"}
              >
                <Stack spacing={3} direction="row" position={"relative"}>
                  <CircularProgress
                    variant="determinate"
                    value={gift.Percentage}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "13px",
                      right: "5px",
                      color: "#888",
                      fontWeight: "bold",
                    }}
                  >
                    {gift.Percentage}%
                  </span>
                </Stack>
              </Grid>
              <Grid item sm={4} xs={9}>
                <img
                  width={"100%"}
                  style={{ borderRadius: "10px" }}
                  src={gift.img}
                  alt={"img"}
                />
              </Grid>
              <Grid
                item
                sm={6}
                xs={12}
                textAlign={"right"}
                sx={{
                  paddingRight: {
                    xs: "2rem",
                    sm: "1rem",
                  },
                }}
                style={{ paddingTop: "0" }}
              >
                <Box className={"description"}>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#a6a6a6",
                    }}
                  >
                    {gift.name}
                  </span>
                  <div>{gift.description}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <button className={"btn"}>اینو میخوام</button>

                    <span>
                      امتیاز لازم{" "}
                      <spnn style={{ color: "#f68e1f" }}>{gift.score}</spnn>
                    </span>
                  </div>
                </Box>
              </Grid>
            </Grid>
            <Divider />
          </StyledBox>
        );
      })}
    </div>
  );
};
const gifts = [
  {
    Percentage: 72,
    img: "/assets/images/promotion/offer-2.png",
    name: "وانت بار",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "4600",
  },
  {
    Percentage: 100,
    img: "/assets/images/promotion/offer-2.png",
    name: "تور کوش آداسی",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "720",
  },
  {
    Percentage: 57,
    img: "/assets/images/promotion/offer-2.png",
    name: "اسپرسو ساز دلونگی",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "420",
  },
  {
    Percentage: 72,
    img: "/assets/images/promotion/offer-2.png",
    name: "وانت بار",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "4600",
  },
  {
    Percentage: 100,
    img: "/assets/images/promotion/offer-2.png",
    name: "تور کوش آداسی",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "720",
  },
  {
    Percentage: 57,
    img: "/assets/images/promotion/offer-2.png",
    name: "اسپرسو ساز دلونگی",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "420",
  },
];

export default SuggestedGifts;
