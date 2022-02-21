import React, {useEffect, useState} from "react";
import {Box, useTheme} from "@mui/system";
import SimpleBar from "simplebar-react";
import GroceryLayout from "/src/components/layout/GroceryLayout";
import GroceryFooter from "/src/components/grocery2/GroceryFooter";

import Grocery2SideNav from "/src/components/page-sidenav/Grocery2Sidenav";
import MobileNavigationBar2 from "/src/components/mobile-navigation/MobileNavigationBar2";

const settings = props => {
    const {
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
        {/*<GroceryFooter/>*/}

        <MobileNavigationBar2>
            <SimpleBar style={{
                maxHeight: "100%"
            }}>
                <Grocery2SideNav groceryNavigation={groceryNavigationList}/>
            </SimpleBar>
        </MobileNavigationBar2>
    </GroceryLayout>;
};

export default settings;