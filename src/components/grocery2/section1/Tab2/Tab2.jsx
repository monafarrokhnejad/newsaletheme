import React from "react";
import Link from "next/link";

import Carousel from "components/carousel/Carousel";
import { H1, H6 } from "components/Typography";
import data from "../../../../data/newsData";

import { Badge, Box, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import StyledBox from "./StyledBox";
import StyledGrid from "./StyledGrid";

const Tab2 = () => {
  const newsData = data;
  return (
    <StyledBox>
      <Carousel
        totalSlides={newsData.length}
        visibleSlides={1}
        showDots={true}
        showArrow={false}
        autoPlay={false}
        dotClass="carousel-dot"
        dotColor="#f68e1f"
        spacing="0px"
      >
        {newsData.map((_item, ind) => (
          <StyledGrid container key={ind}>
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
                {_item.title}
              </H1>
              <H6 maxWidth="470px" color="inherit" fontWeight="400" mb={1}>
                <Link href={`/news/${_item.title}`}>
                  <a>{_item.description}</a>
                </Link>
              </H6>
              <div className="hr"></div>
              <div className="optionNews">
                <div>
                  <span>ارسال توسط :</span>
                  <span>{_item.sender}</span>
                  <div className="data">
                    <span>{_item.date}</span>
                  </div>
                </div>

                <div>
                  <span>
                    {_item.commentCount > 0 && (
                      <Badge
                        className={"cart-counter"}
                        badgeContent={_item.commentCount}
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
                        <img className="imageinner" src={_item.image} />
                      </figure>
                    </div>
                  </div>
                </a>
              </Link>
            </Grid>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default Tab2;
