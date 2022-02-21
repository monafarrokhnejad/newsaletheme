import React from 'react';
import Link from 'next/link';
import BazarButton from 'components/BazarButton';
import CategoryMenu from 'components/categories/CategoryMenu';
import FlexBox from 'components/FlexBox';
import Category from 'components/icons/Category';
import GrocerySearchBox from 'components/search-box/GrocerySearchBox';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {Box, Container, useMediaQuery, useTheme} from '@mui/material';
import {HeaderWrapper} from './Header';
import {useRouter} from "next/router";

import Account from "../account/account";
const GroceryHeader = ({isFixed}) => {
    const router = useRouter();
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

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

                <Box sx={{
                    visibility: isFixed ? 'visible' : 'hidden'
                }}>
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

            <FlexBox justifyContent="center" flex="1 1 0">
                <GrocerySearchBox/>
            </FlexBox>

            <FlexBox sx={{
                alignItems: 'center',
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}>
                <Account/>

            </FlexBox>




        </Container>
    </HeaderWrapper>;
};

export default GroceryHeader;