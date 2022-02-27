import React, {useEffect, useState} from "react";
import {
    getSection4Products,
    getSection5Products,
    getSection7Products,
    getSection8Products,
    getSection9Testimonials
} from "/src/utils/api/grocery2-shop/carousels";
import {
    getSection2Services,
    getSection3Categories,
    getSection6CardList
} from "/src/utils/api/grocery2-shop/sections";
import {Box} from "@mui/material";
import {useTheme} from "@mui/system";
import SimpleBar from "simplebar-react";
import GroceryLayout from "/src/components/layout/GroceryLayout";
import GroceryFooter from "/src/components/grocery2/GroceryFooter";
import GrocerySection0 from "../src/components/grocery2/GrocerySection0";
import GrocerySection1 from "/src/components/grocery2/GrocerySection1";
import GrocerySection2 from "/src/components/grocery2/GrocerySection2";
import GrocerySection3 from "/src/components/grocery2/GrocerySection3";
import GrocerySection4 from "/src/components/grocery2/GrocerySection4";
import GrocerySection5 from "/src/components/grocery2/GrocerySection5";
import GrocerySection6 from "/src/components/grocery2/GrocerySection6";
import GrocerySection7 from "/src/components/grocery2/GrocerySection7";
import GrocerySection8 from "/src/components/grocery2/GrocerySection8";
import GrocerySection9 from "/src/components/grocery2/GrocerySection9";
import Grocery2SideNav from "/src/components/page-sidenav/Grocery2Sidenav";
import {getGroceryNavigation} from "/src/utils/api/grocery2-shop/navigation";
import SidenavContainer from "/src/components/sidenav-container/SidenavContainer";
import MobileNavigationBar2 from "/src/components/mobile-navigation/MobileNavigationBar2";
import {useRouter} from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home2 = props => {
    const router = useRouter();
    const mobileSize = useMediaQuery('(max-width:960px)');

    useEffect(() => {
        const isLogin = () => !!localStorage.getItem("x-auth-token");

        if (!isLogin()) {
            console.log("No Login");
            router.push("/login")
        }
    }, [])

    const {
        section2Services,
        section3Category,
        section4Products,
        section5Products,
        section6CardList,
        section7Products,
        section8Products,
        section9Testimonials,
        groceryNavigationList
    } = props;
    const {
        shadows
    } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 180) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
    }, []);
    return <GroceryLayout>
        <Box id="grocerySection"/>
        <SidenavContainer navFixedComponentID={"grocerySection"} SideNav={() => <SimpleBar style={{
            boxShadow: shadows[1],
            maxHeight: scrolled ? "100%" : `calc(100% - ${104}px)`
        }}>
            <Grocery2SideNav groceryNavigation={groceryNavigationList}/>
        </SimpleBar>}>

            <Box mt={mobileSize ? 0 : 6} mb={6}>
                <GrocerySection0/>
            </Box>


            {/*<Box mb={6} overflow="hidden">*/}
            {/*    <GrocerySection2 services={section2Services} />*/}
            {/*</Box>*/}

            <Box mb={6}>
                <GrocerySection3 categories={section3Category}/>
            </Box>

            <Box mb={6}>
                <GrocerySection4 products={section4Products}/>
            </Box>

            {/*<Box mb={6}>*/}
            {/*    <GrocerySection5 products={section5Products} />*/}
            {/*</Box>*/}

            <Box mb={6}>
                <GrocerySection6 cardList={section6CardList}/>
            </Box>

            {/*<Box mb={6}>*/}
            {/*    <GrocerySection7 products={section7Products} />*/}
            {/*</Box>*/}

            {/*<Box mb={6}>*/}
            {/*    <GrocerySection8 products={section8Products} />*/}
            {/*</Box>*/}

            <Box mb={6}>
                <GrocerySection9 testimonials={section9Testimonials}/>
            </Box>

            <GroceryFooter/>
        </SidenavContainer>

        <MobileNavigationBar2>
            <SimpleBar style={{
                maxHeight: "100%"
            }}>
                <Grocery2SideNav groceryNavigation={groceryNavigationList}/>
            </SimpleBar>
        </MobileNavigationBar2>
    </GroceryLayout>;
};

export async function getStaticProps() {
    const section2 = await getSection2Services();
    const section4 = await getSection4Products();
    const section5 = await getSection5Products();
    const section6 = await getSection6CardList();
    const section7 = await getSection7Products();
    const section8 = await getSection8Products();
    const section3 = await getSection3Categories();
    const section9 = await getSection9Testimonials();
    const groceryNavigationList = await getGroceryNavigation();
    return {
        props: {
            groceryNavigationList,
            section2Services: section2,
            section3Category: section3,
            section4Products: section4,
            section5Products: section5,
            section6CardList: section6,
            section7Products: section7,
            section8Products: section8,
            section9Testimonials: section9
        }
    };
}

export default Home2;