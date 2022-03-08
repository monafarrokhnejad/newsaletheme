import { Grid } from "@mui/material";
import React from "react";
import GroceryLayout from "../src/components/layout/GroceryLayout";
import WhiteLayout from "../src/components/layout/WhiteLayout";
import { H3 } from "../src/components/Typography";
import UsedGifts from "../src/components/gift-page/used-gifts/UsedGifts";
import SuggestedGifts from "../src/components/gift-page/suggested-gifts/SuggestedGfts";
import Points from "../src/components/gift-page/points/Points";

const yourGifts = () => {
  return (
    <GroceryLayout>
      <WhiteLayout>
        <H3 marginBottom={3}>هدایای شما</H3>
        <Grid
          flexDirection={"row-reverse"}
          justifyContent={"center"}
          container
          spacing={4}
        >
          <Grid item md={4} xs={12} textAlign={"center"} marginBottom={2}>
            <Points />
          </Grid>
          <Grid item md={8} xs={12} marginTop={2}>
            <SuggestedGifts />
          </Grid>
        </Grid>
      </WhiteLayout>

      <WhiteLayout>
        <UsedGifts />
      </WhiteLayout>
    </GroceryLayout>
  );
};

export default yourGifts;
