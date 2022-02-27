import React, {useState} from 'react';
import Link from 'next/link';
import BazarButton from 'components/BazarButton';
import CategoryMenu from 'components/categories/CategoryMenu';
import FlexBox from 'components/FlexBox';
import Category from 'components/icons/Category';
import GrocerySearchBox from 'components/search-box/GrocerySearchBox';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {Box, Button, Container, useMediaQuery, useTheme} from '@mui/material';
import {HeaderWrapper} from './Header';
import {useRouter} from "next/router";
import CloseIcon from '@mui/icons-material/Close';

import Account from "../account/account";
import Items from "../items/Items";

const GroceryHeader = ({isFixed}) => {
    const router = useRouter();
    const theme = useTheme();
    const [search, setSearch] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const searchInput = () => {
        setSearch(!search);
        console.log(search);
    }

    return <HeaderWrapper>
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%'
        }}>
            <FlexBox sx={{
                alignItems: 'center',
                mr: '1rem',
                minWidth: '170px',
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}>
                <Link href="/">
                    <a>
                        <img width={200} src="/assets/images/logo.png" alt="logo"/>
                    </a>
                </Link>

                <Box sx={{visibility: isFixed ? 'visible' : 'hidden'}}>
                    <CategoryMenu>
                        <FlexBox color="grey.600" alignItems="center" ml={2}>
                            <BazarButton color="inherit">
                                <Category fontSize="small" color="inherit"/>
                               <KeyboardArrowDown fontSize="small" color="inherit"/>
                           </BazarButton>
                       </FlexBox>
                    </CategoryMenu>
                </Box>
            </FlexBox>

            <FlexBox justifyContent="center" flex="1 1 0" sx={{
                padding: "0 2rem",
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}>
                <GrocerySearchBox/>
            </FlexBox>
            <FlexBox justifyContent="center" flex="1 1 0" sx={{
                padding: "0",
                marginLeft: "auto",
                display: {
                    md: 'none',
                    xs: 'flex'
                }
            }}>
                <Account/>
            </FlexBox>


            <FlexBox sx={{alignItems: 'center'}}>
                <Items searchInput={searchInput}/>
            </FlexBox>

        </Container>

        {search &&
            <div className={"mob-search"}>
                <Button color={"primary"} style={{marginRight:"1rem" , color:"white"}} variant={"contained"} onClick={()=>setSearch(false)}><CloseIcon/></Button>

            <FlexBox justifyContent="center" flex="1 1 0" sx={{
            padding: "0 1rem "
        }}>
            <GrocerySearchBox/>
            </FlexBox>
            </div>
        }
    </HeaderWrapper>;
};

export default GroceryHeader;