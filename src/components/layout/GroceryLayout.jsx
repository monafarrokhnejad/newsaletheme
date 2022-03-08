import React, { Fragment, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import SimpleBar from "simplebar-react";

import { useTheme } from "@mui/system";
import { Box } from "@mui/material";

import Navbar from "components/navbar/Navbar";
import Sticky from "components/sticky/Sticky";
import Topbar from "components/topbar/Topbar";
import GroceryHeader from "components/header/GroceryHeader";

import GroceryFooter from "../grocery2/GroceryFooter";
import MobileNavigationBar2 from "../mobile-navigation/MobileNavigationBar2";
import Grocery2SideNav from "../page-sidenav/Grocery2Sidenav";
import SidenavContainer from "../sidenav-container/SidenavContainer";

const GroceryLayout = ({
  children,
  showNavbar = true,
  title = "سامانه فروش حاصل نوین",
}) => {
  const router = useRouter();
  useEffect(() => {
    const isLogin = () => !!localStorage.getItem("x-auth-token");
    if (!isLogin()) {
      console.log("No Login");
      router.push("/login");
    }
  }, []);
  const [isFixed, setIsFixed] = useState(false);

  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed);
  }, []);

  const { shadows } = useTheme();

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

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <GroceryHeader isFixed={isFixed} />
      </Sticky>

      <Box
        sx={{
          display: showNavbar ? "block" : "none",
        }}
        className="section-after-sticky"
        position="relative"
        zIndex={1}
      >
        <Navbar />
      </Box>
      <Box
        position="relative"
        sx={{ background: router.pathname === "/" ? "#fff" : "transparent" }}
      >
        <Box id="grocerySection" />
        <SidenavContainer
          navFixedComponentID={"grocerySection"}
          SideNav={() => (
            <SimpleBar
              style={{
                boxShadow: shadows[1],
                maxHeight: scrolled ? "100%" : `calc(100% - ${104}px)`,
              }}
            >
              <Grocery2SideNav groceryNavigation={grocery2Navigations} />
            </SimpleBar>
          )}
        >
          {children}
          <GroceryFooter />
        </SidenavContainer>

        <MobileNavigationBar2>
          <SimpleBar
            style={{
              maxHeight: "100%",
            }}
          >
            <Grocery2SideNav groceryNavigation={grocery2Navigations} />
          </SimpleBar>
        </MobileNavigationBar2>
      </Box>
    </Fragment>
  );
};
const grocery2Navigations = [
  {
    icon: "Home",
    title: "خانه",
    href: "/",
  },
  {
    icon: "OrderRecord",
    title: "ثبت سفارش",
    href: "/cart",
  },
  {
    icon: "Bills",
    title: "فاکتور و صورتحساب ها",
    href: "/facturas",
  },
  {
    icon: "Price",
    title: "قیمت میوه و تره بار",
    href: "/product/search/Dariry & Eggs",
  },
  {
    icon: "ContactUs",
    title: "ارتباط با ما",
    href: "/contact-us",
  },
  {
    icon: "Mail",
    title: "صندوق پیام ها",
    href: "/message",
  },
  {
    icon: "YourGift",
    title: "هدایای شما",
    href: "/your-gifts",
  },
  {
    icon: "Setting",
    title: "صفحه اطلاعات شخصی",
    href: "/profile",
  },
];
export default GroceryLayout;
