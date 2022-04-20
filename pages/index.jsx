import React from "react";

import {
  getSection4Products,
  getSection5Products,
  getSection7Products,
  getSection8Products,
  getSection9Testimonials,
} from "/src/utils/api/grocery2-shop/carousels";

import {
  getSection3Categories,
  getSection6CardList,
} from "/src/utils/api/grocery2-shop/sections";

import GroceryLayout from "/src/components/layout/GroceryLayout";
import GrocerySection1 from "../src/components/grocery2/section1/GrocerySection1";
import GrocerySection3 from "/src/components/grocery2/GrocerySection3";
import GrocerySection4 from "/src/components/grocery2/GrocerySection4";
import GrocerySection6 from "/src/components/grocery2/GrocerySection6";
import GrocerySection9 from "/src/components/grocery2/GrocerySection9";
import GrocerySection10 from "/src/components/grocery2/GrocerySection10";

import { Box, useMediaQuery } from "@mui/material";

const Home2 = (props) => {
  const mobileSize = useMediaQuery("(max-width:960px)");

  const {
    section3Category,
    section4Products,
    section6CardList,
    section9Testimonials,
  } = props;
  return (
    <GroceryLayout>
      <Box mt={mobileSize ? 0 : 6} mb={6}>
        <GrocerySection1 />
      </Box>

      <Box mb={6}>
        <GrocerySection3 categories={section3Category} />
      </Box>

      <Box mb={6}>
        <GrocerySection4 products={section4Products} />
      </Box>

      <Box mb={6}>
        <GrocerySection6 cardList={section6CardList} />
      </Box>

      <Box mb={6}>
        <GrocerySection9 testimonials={section9Testimonials} />
      </Box>
      <Box>
        <GrocerySection10 />
      </Box>
    </GroceryLayout>
  );
};

export async function getStaticProps() {
  const section3 = await getSection3Categories();
  const section4 = await getSection4Products();
  const section5 = await getSection5Products();
  const section6 = await getSection6CardList();
  const section7 = await getSection7Products();
  const section8 = await getSection8Products();
  const section9 = await getSection9Testimonials();
  return {
    props: {
      section3Category: section3,
      section4Products: section4,
      section5Products: section5,
      section6CardList: section6,
      section7Products: section7,
      section8Products: section8,
      section9Testimonials: section9,
    },
  };
}

export default Home2;
