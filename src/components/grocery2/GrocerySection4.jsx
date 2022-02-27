import React, { useEffect, useState } from "react";
import Carousel from "../carousel/Carousel";
import useWindowSize from "hooks/useWindowSize";
import { Box } from "@mui/material";
import ProductCard1 from 'components/product-cards/ProductCard1';

import ProductCard13 from "../product-cards/ProductCard13";
import { styled, useTheme } from "@mui/system";
import {H3, Paragraph} from "components/Typography";

const SubTitle = styled(Paragraph)(({theme}) => ({
    marginTop: "-20px",
    marginBottom: "20px",
    fontSize: 12,
    color: theme.palette.grey[600]
}));

const GrocerySection4 = ({products}) => {
    const {
        palette,
        shadows
    } = useTheme();

    const [visibleSlides, setVisibleSlides] = useState(3);

    const width = useWindowSize();

    useEffect(() => {
        if (width < 500) setVisibleSlides(1);else if (width < 650) setVisibleSlides(2);else if (width < 950) setVisibleSlides(3);else setVisibleSlides(3);
    }, [width]);

    return <Box>
        <H3 fontSize="25px" mb={2}>
            محصولات پیشنهادی مابرای شما
        </H3>
        <SubTitle>بهترین کلکسیون در 2021 برای شما!</SubTitle>
        <Box my={-0.5}>

            <Carousel infinite={true} totalSlides={products.length} visibleSlides={visibleSlides} sx={{
                "& #backArrowButton, #backForwardButton": {
                    width: 40,
                    height: 40,
                    background:  palette.primary.main,
                    boxShadow: shadows[2],
                    color:'#fff',
                    transition:"all .2s ease",
                    "&:hover":{
                        opacity:0.6
                    }
                }
            }}>
                {products.map((item, ind) => <Box py={0.5} key={ind}>
                    <ProductCard13 id={item.id} imgUrl={item.imgUrl} title={item.title} rating={item.rating} price={item.price} off={item.discount} />
                    {/*<ProductCard1 {...item} off={25} showProductSize hideRating />*/}

                </Box>)}
            </Carousel>
        </Box>

    </Box>;
};

export default GrocerySection4;