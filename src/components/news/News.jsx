import React, { useEffect, useState } from "react";
import Link from "next/link";
import GroceryLayout from "../layout/GroceryLayout";
import WhiteLayout from "../layout/WhiteLayout";
import { Badge, Box, Grid } from "@mui/material";
import { H1, H6, H3 } from "components/Typography";
import data from "../../data/newsData";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

const Wrapper = styled(Grid)(() => ({
  textAlign: "center",
  boxShadow: "0 0 9px gray",
  background: "white",
  borderRadius: "6px",
  position: "relative",
  minHeight: "370px",
  "& figure": {
    position: "relative",
    width: "100%",
    height: "140px",
    margin: "auto",
    borderRadius: "5px",
  },
  "& figure img": {
    borderRadius: "5px 5px 0 0",
  },
  "& H6": {
    transition: "all .2s ease",
    "&:hover": {
      color: "#f68e1f",
    },
  },
  "& .optionNews": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    bottom: "0",
    right: "0",
    padding: "1.3rem",
  },

  "& .data": {
    display: "none",
    position: "absolute",
    top: "0",
    right: "0",
    background: "white",
    padding: "10px",
    borderRadius: "0 4px 0 4px",
    color: "#f68e1f",
    fontWeight: "bold",
  },
}));

const News = ({ item }) => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Link href={`/news/${item.title}`}>
            <a>
              <div class="hover01 column">
                <div>
                  <figure>
                    <img className="imageinner" src={item.image} />
                  </figure>
                </div>
              </div>
            </a>
          </Link>
        </Grid>
        <Grid alignItems={"center"} item md={12} sm={12} xs={12} p={3}>
          <H3 maxWidth="100%" mb={1} lineHeight="1.27" color="primary">
            {item.title}
          </H3>
          <H6 maxWidth="470px" color="inherit" fontWeight="400" mb={1}>
            <Link href={`/news/${item.title}`}>
              <a>{item.description}</a>
            </Link>
          </H6>
          {/* <div className="hr"></div> */}
          <div className="optionNews" style={{ marginTop: "3rem" }}>
            <div>
              <span>ارسال توسط :</span>
              <span>{item.sender}</span>
              <div className="data">
                <span>{item.date}</span>
              </div>
            </div>

            <div>
              <span>
                {item.commentCount > 0 && (
                  <Badge
                    className={"cart-counter"}
                    badgeContent={item.commentCount}
                    color={"primary"}
                  >
                    <Box className="commentBox">
                      <EmailIcon />
                    </Box>
                  </Badge>
                )}
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
export default News;
