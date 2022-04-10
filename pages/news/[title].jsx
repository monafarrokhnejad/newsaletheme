import React, { useEffect, useState } from "react";

import GroceryLayout from "../../src/components/layout/GroceryLayout";
import WhiteLayout from "../../src/components/layout/WhiteLayout";

import { H4 } from "../../src/components/Typography";
import Table from "../../src/components/table/Table";

import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import data from "../../src/data/newsData";

const News = ({ news }) => {
  return (
    <WhiteLayout main={true} title={`اخبار جدید (${news.title})`}>
      <Grid container>
        <Grid item col={12}>
          <Box position={"relative"} width={"100%"}>
            <div
              style={{
                color: "gray",
                fontSize: "12px",
                display: "flex",
                justifyContent: "space-between",
                padding: " 7px 10px",
              }}
            >
              <div>
                <span>ارسال توسط :</span>
                <span>{news.sender}</span>
              </div>
              <div className="data">
                <span>{news.date}</span>
              </div>
            </div>
            <img
              style={{ borderRadius: "8px" }}
              className="imageinner"
              src={news.image}
              alt="news"
            />
          </Box>
        </Grid>
      </Grid>
      <div>
        <p>{news.description}</p>
      </div>
      {news.table &&
        news.table.map((item) => {
          return (
            <>
              <H4 mt={5} mb={2}>
                {item.title}
              </H4>
              <Table rows={item.rows} columns={item.columns} />
            </>
          );
        })}

      <div className="hr" style={{ background: "none" }}></div>
      {news.more &&
        news.more.map((item) => {
          return (
            <p>
              <span> - </span>
              {item}
            </p>
          );
        })}
    </WhiteLayout>
  );
};

const index = (props) => {
  const router = useRouter();
  console.log("my nes log :", router);
  const { title } = router.query;
  const [news, setNews] = useState();

  useEffect(() => {
    if (title) {
      const newsData = data.find((item) => item.title === title);
      setNews(newsData);
    }
  }, [title]);

  return (
    <GroceryLayout>
      {news ? (
        <News news={news} />
      ) : (
        <WhiteLayout main={true}>nothing</WhiteLayout>
      )}
    </GroceryLayout>
  );
};

export default index;
