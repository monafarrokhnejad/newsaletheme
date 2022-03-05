import React, {useState} from 'react';
import {Badge, Drawer, IconButton} from "@mui/material";
import {Box} from "@mui/system";
import {useAppContext} from "../../contexts/app/AppContext";
import ShoppingBagOutlined from "../icons/ShoppingBagOutlined";
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MiniCart from "../mini-cart/MiniCart";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from "@mui/material/useMediaQuery";


const Items = ({searchInput}) => {
    const mobileSize = useMediaQuery('(max-width:960px)');
    const [sidenavOpen, setSidenavOpen] = useState(false);
    const toggleSidenav = () => setSidenavOpen(!sidenavOpen);
    const {
        state
    } = useAppContext();
    const {
        cartList
    } = state.cart;
    const cartHandle = <Badge className={"cart-counter"} badgeContent={cartList.length}
                              color={"primary"}>
        <Box component={IconButton} bgcolor="grey.200" p={mobileSize ? 0.6 : 0.9} onClick={toggleSidenav}>
            <ShoppingBagOutlined/>
        </Box>
    </Badge>;
    return (<>
            <div style={{display: "flex", alignItems: "center"}}>
                <Box sx={{
                    marginLeft: "1.3rem",
                    '@media only screen and (max-width: 800px)': {
                        marginLeft: "0.8rem",
                    },
                    display: {
                        md: "none",
                        xs: "flex"
                    }
                }} component={IconButton} p={mobileSize ? 0.6 : 0.9} bgcolor="grey.200" onClick={searchInput}>
                    <SearchIcon/>
                </Box>
                <Badge className={"cart-counter"} badgeContent={cartList.length} color="primary" sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}>
                    <Box component={IconButton} p={mobileSize ? 0.6 : 0.9} bgcolor="grey.200">
                        <FavoriteBorderIcon/>
                    </Box>
                </Badge>
                <Badge className={"cart-counter"} badgeContent={cartList.length} color="primary"
                       sx={{
                           margin: "1.3rem", '@media only screen and (max-width: 800px)': {
                               margin: "0.8rem",
                           },
                           display: {
                               xs: 'none',
                               md: 'flex'
                           }
                       }}>
                    <Box component={IconButton} p={mobileSize ? 0.6 : 0.9} bgcolor="grey.200">
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