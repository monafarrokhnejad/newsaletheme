import React, { useEffect, useState } from "react";
import Link from "next/link";
import GroceryLayout from "../../src/components/layout/GroceryLayout";
import WhiteLayout from "../../src/components/layout/WhiteLayout";
import { Badge, Box, Grid } from "@mui/material";
import { H2, H6 } from "components/Typography";
import data from "../../src/data/newsData";
import EmailIcon from "@mui/icons-material/Email";
import News from "../../src/components/news/News";
import { useRouter } from "next/router";

const index = () => {
  const newsData = data;
  const router = useRouter();
  // const { title } = router.query;
  console.log(router);
  // const [news, setNews] = useState();

  // useEffect(() => {
  //   if (title) {
  //     const newsData = data.find((item) => item.title === title);
  //     setNews(newsData);
  //   }
  // }, [title]);
  return (
    <GroceryLayout>
      <H2 mt={5} mb={3}>
        همه خبر ها
      </H2>
      <Grid container spacing={3} mb={4}>
        {newsData.map((item) => (
          <Grid item md={4} sm={6} xs={12}>
            <News item={item} />
          </Grid>
        ))}
      </Grid>
    </GroceryLayout>
  );
};

export default index;
