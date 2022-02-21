import React, {useState} from 'react';
import {Badge, Drawer, IconButton} from "@mui/material";
import {Box} from "@mui/system";
import {useAppContext} from "../../contexts/app/AppContext";
import ShoppingBagOutlined from "../icons/ShoppingBagOutlined";
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MiniCart from "../mini-cart/MiniCart";


const Items = () => {
    const [sidenavOpen, setSidenavOpen] = useState(false);
    const toggleSidenav = () => setSidenavOpen(!sidenavOpen);
    const {
        state
    } = useAppContext();
    const {
        cartList
    } = state.cart;
    const cartHandle = <Badge className={"cart-counter"} badgeContent={cartList.length} color="primary">
        <Box component={IconButton} bgcolor="grey.200" p={0.9} onClick={toggleSidenav}>
            <ShoppingBagOutlined/>
        </Box>
    </Badge>;
    return (<>


            <div>
                <Badge className={"cart-counter"} badgeContent={cartList.length} color="primary">
                    <Box component={IconButton} p={0.9} bgcolor="grey.200">
                        <DescriptionOutlinedIcon/>
                    </Box>
                </Badge>
                <Badge className={"cart-counter"} badgeContent={cartList.length} color="primary"
                       sx={{margin: "1.3rem"}}>
                    <Box component={IconButton} p={0.9} bgcolor="grey.200">
                        <RedeemOutlinedIcon/>
                    </Box>
                </Badge>
                {cartHandle}
            </div>
            <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} SlideProps={{
                style: {
                    overflow: 'hidden'
                }
            }}>
                <MiniCart toggleSidenav={toggleSidenav}/>
            </Drawer>
        </>

    );
};

export default Items;