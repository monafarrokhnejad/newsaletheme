import React from "react";
import Link from "next/link";
import GroceryLayout from "../../src/components/layout/GroceryLayout";
import WhiteLayout from "../../src/components/layout/WhiteLayout";
import { Badge, Box, Grid } from "@mui/material";
import { H1, H6 } from "components/Typography";
import data from "../../src/data/newsData";
import EmailIcon from "@mui/icons-material/Email";
import News from "../../src/components/news/News";
const index = () => {
  const newsData = data;

  return (
    <GroceryLayout>
      <WhiteLayout main={true} title={" همه اخبارها "}>
        {newsData.map((item) => (
          <News item={item} />
        ))}
      </WhiteLayout>
    </GroceryLayout>
  );
};

export default index;
