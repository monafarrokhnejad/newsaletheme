import BazarButton from "components/BazarButton";
import BazarCard from "components/BazarCard";
import CategoryMenu from "components/categories/CategoryMenu";
import FlexBox from "components/FlexBox";
import Category from "components/icons/Category";
import NavLink from "components/nav-link/NavLink";
import {Paragraph} from "components/Typography";
import navbarNavigations from "data/navbarNavigations";
import ArrowRight from "@mui/icons-material/ArrowRight";
import ChevronRight from "@mui/icons-material/ChevronRight";
import {Box, Container, IconButton, MenuItem, styled} from "@mui/material";
import React, {useEffect, useState} from "react";
import {ChevronLeft} from "@mui/icons-material";
import Menu from "@mui/material/Menu";

import PersonOutline from "@mui/icons-material/PersonOutline";
import Account from "../account/account";
import Items from "../items/Items"; // component props interface

// const common css style
const navLinkStyle = {
    cursor: "pointer",
    marginLeft: "1rem",
    marginRight: "1rem",
    transition: "color 150ms ease-in-out",
    "&:hover": {
        color: "primary.main"
    },
    "&:last-child": {
        marginRight: "0"
    }
}; // style components

const StyledNavLink = styled(NavLink)(() => ({
    ...navLinkStyle
}));
const ParentNav = styled(Box)(({
                                   theme
                               }) => ({
    "&:hover": {
        color: theme.palette.primary.main,
        "& > .parent-nav-item": {
            display: "block"
        }
    }
}));
const ParentNavItem = styled(Box)(() => ({
    display: "none",
    position: "absolute",
    top: 0,
    right: "100%",
    zIndex: 5,
    paddingRight: '8px'
}));
const NavBarWrapper = styled(BazarCard)(({
                                             theme
                                         }) => ({
    display: "block",
    position: "relative",
    height: "60px",
    borderRadius: "0px",
    [theme.breakpoints.down("md")]: {
        display: "none"
    }
}));
const InnerContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
}));
const CategoryMenuButton = styled(BazarButton)(({
                                                    theme
                                                }) => ({
    width: "278px",
    height: "40px",
    px: "1rem",
    backgroundColor: theme.palette.grey[100]
}));

const Navbar = ({navListOpen, hideCategories}) => {

    const renderNestedNav = () => {
        return<Box sx={{marginLeft:'1.5rem'}}>
            {/*<Items/>*/}
        </Box>
    }

    return <NavBarWrapper elevation={2} hoverEffect={false}>
        {!hideCategories ? <InnerContainer>
            <CategoryMenu open={navListOpen}>
                <CategoryMenuButton variant="text">
                    <Category fontSize="small"/>
                    <Paragraph fontWeight="600" textAlign="right" flex="1 1 0" mr={1.25} color="grey.600">
                        دسته بندی محصولات
                    </Paragraph>
                    <ChevronLeft className="dropdown-icon" fontSize="small"/>
                </CategoryMenuButton>
            </CategoryMenu>
            <FlexBox>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer> : <InnerContainer sx={{
            justifyContent: "flex-end"
        }}>
            <FlexBox>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>}
    </NavBarWrapper>;
};

export default Navbar;