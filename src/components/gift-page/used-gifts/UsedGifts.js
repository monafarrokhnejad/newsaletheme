import React from "react";
import { Box, color } from "@mui/system";
import {
  CircularProgress,
  Divider,
  Grid,
  styled,
  useMediaQuery,
} from "@mui/material";
import { H3 } from "components/Typography";

const StyledGiftPage = styled(Box)(({ theme }) => ({
  "@media only screen and (max-width: 599px)": {
    img: {
      height: "50px",
    },
  },
  ".mainBox": {
    overflowX: "auto",
    display: "ruby",
    "@media only screen and (max-width: 599px)": {
      overflowX: "hidden",
      overflowY: "auto",
      display: "flex",
      height: "400px",
      flexDirection: "column",
      fontSize: "9px",
    },
  },
  // padding: "1rem",
  fontSize: "12px",
  color: "#a6a6a6",
  ".sumBox": {
    margin: "5px 0",
    fontSize: "10px",
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
  ".title": {
    color: "#f68e1f",
    fontSize: "14px",
    fontWeight: "bold",
    margin: " 0",
  },
}));

const UsedGifts = () => {
  return (
    <StyledGiftPage>
      <Grid container>
        <H3 marginBottom={3}>جوایز استفاده شده</H3>
        <Divider />
        <div className="mainBox">
          {usedgifts.map((gift) => {
            return (
              <>
                <Grid
                  item
                  sm={4}
                  xs={12}
                  display={"inline-block"}
                  position={"relaltive"}
                  marginBottom={5}
                  sx={{
                    marginLeft: {
                      xs: "0",
                      sm: "3rem",
                    },
                  }}
                >
                  <Grid container alignItems={"start"} spacing={2}>
                    <Grid item xs={3} sm={8}>
                      <img
                        src={gift.img}
                        alt={"img"}
                        width={"100%"}
                        style={{ borderRadius: "10px" }}
                      />
                    </Grid>

                    <Grid
                      sx={{
                        display: {
                          xs: "block",
                          sm: "none",
                        },
                      }}
                      item
                      xs={6}
                      sm={12}
                    >
                      <span className="title">{gift.title}</span>
                      <div>{gift.description}</div>
                    </Grid>

                    <Grid item xs={3} sm={4} textAlign={"center"}>
                      <div className="sumBox">
                        <span>
                          <a style={{ marginLeft: "3px" }}>{gift.score}</a>
                          امتیاز
                        </span>
                      </div>
                      <span style={{ fontSize: "10px" }}>{gift.date}</span>
                    </Grid>

                    <Grid
                      sx={{
                        display: {
                          xs: "none",
                          sm: "block",
                        },
                      }}
                      item
                      xs={6}
                      sm={12}
                    >
                      <span className="title">{gift.title}</span>
                      <div>{gift.description}</div>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </div>
      </Grid>
    </StyledGiftPage>
  );
};

const usedgifts = [
  {
    title: "تور قبرس",
    img: "/assets/images/promotion/offer-2.png",
    description: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم .",
    score: "4600",
    date: "1400/06/28",
  },
  {
    title: "تور قبرس",
    img: "/assets/images/promotion/offer-2.png",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "4600",
    date: "1400/06/28",
  },
  {
    title: "تور قبرس",
    img: "/assets/images/promotion/offer-2.png",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "4600",
    date: "1400/06/28",
  },
  {
    title: "تور قبرس",
    img: "/assets/images/promotion/offer-2.png",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "4600",
    date: "1400/06/28",
  },
  {
    title: "تور قبرس",
    img: "/assets/images/promotion/offer-2.png",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    score: "4600",
    date: "1400/06/28",
  },
];

export default UsedGifts;
