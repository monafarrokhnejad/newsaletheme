import React from "react";
import Link from "next/link";
import GroceryLayout from "../layout/GroceryLayout";
import WhiteLayout from "../layout/WhiteLayout";
import { Badge, Box, Grid } from "@mui/material";
import { H1, H6 } from "components/Typography";
import data from "../../data/newsData";
import EmailIcon from "@mui/icons-material/Email";

const News = ({ item }) => {
  return (
    <>
      <div>
        <Grid
          paddingRight={3}
          paddingLeft={3}
          item
          md={6}
          sm={6}
          xs={12}
          width={"100%"}
        >
          <H1 maxWidth="100%" mb={1} lineHeight="1.27" color="primary">
            {item.title}
          </H1>
          <H6 maxWidth="470px" color="inherit" fontWeight="400" mb={1}>
            <Link href={`/news/${item.title}`}>
              <a>{item.description}</a>
            </Link>
          </H6>
          <div className="hr"></div>
          <div className="optionNews">
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
        <Grid alignItems={"center"} item md={6} sm={6} xs={12}>
          <Link href="/news">
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
      </div>
      <div style={{ height: "5rem", width: "100%" }}></div>
    </>
  );
};
export default News;
