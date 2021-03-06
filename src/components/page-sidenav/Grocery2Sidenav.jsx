import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import SimpleBar from "simplebar-react";

import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/system";
import LogoutIcon from "@mui/icons-material/Logout";

import appIcons from "components/icons";
import FlexBox from "components/FlexBox";
import BazarCard from "components/BazarCard";
import { Span } from "components/Typography";
import NavLink from "components/nav-link/NavLink";
import Accordion from "components/accordion/Accordion";
import AccordionHeader from "components/accordion/AccordionHeader";

const Grocery2SideNav = (props) => {
  const router = useRouter();
  const { isFixed, groceryNavigation } = props;
  const { shadows } = useTheme();

  const logOut = () => {
    window.localStorage.clear();
    router.push("/login");
  };

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

  const renderChild = (childList, type = "parent") => {
    if (type === "parent")
      return childList.map((item) => (
        <Fragment key={item.title}>
          <NavLink href={item.href} color="grey.700">
            <FlexBox>
              <Span mr="2.5rem" py={0.75} color="inherit" flex="1 1 0">
                {item.title}
              </Span>
            </FlexBox>
          </NavLink>

          {item.child && renderChild(item.child, "child")}
        </Fragment>
      ));
    else
      return childList.map((item, ind) => (
        <NavLink href={item.href} color="grey.700" key={ind}>
          <FlexBox key={item.title}>
            <Span mr="3.5rem" py={0.75} color="inherit" flex="1 1 0">
              {item.title}
            </Span>
          </FlexBox>
        </NavLink>
      ));
  };

  return (
    <SimpleBar
      style={{
        maxHeight: scrolled ? "100%" : `calc(100% - ${104}px)`,
        boxShadow: shadows[1],
      }}
    >
      <BazarCard
        elevation={3}
        sx={{
          position: "relative",
          p: "20px 20px 14px 24px",
          height: "100%",
          borderRadius: "0px",
          overflow: isFixed ? "auto" : "unset",
        }}
      >
        {groceryNavigation.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <Box mb={1} color="grey.700" key={ind}>
              {item.child ? (
                <Accordion expanded>
                  <AccordionHeader
                    px={0}
                    py={0.75}
                    color="inherit"
                    justifyContent="flex-start"
                  >
                    <Box flex="1 1 0">
                      <NavLink href={item.href} color="grey.700">
                        <FlexBox alignItems="center" flex="1 1 0">
                          <Icon fontSize="small" />
                          <Span
                            color="inherit"
                            fontWeight="600"
                            mr={2.5}
                            flex="1 1 0"
                          >
                            {item.title}
                          </Span>
                        </FlexBox>
                      </NavLink>
                    </Box>
                  </AccordionHeader>
                  {item.child ? renderChild(item.child) : null}
                </Accordion>
              ) : (
                <NavLink href={item.href} color="grey.700">
                  <FlexBox py={0.75} color="inherit" key={item.title}>
                    <Box ml={1.5}>
                      <Icon fontSize="small" />
                    </Box>
                    <Span
                      color="inherit"
                      fontWeight="600"
                      mr={1.125}
                      flex="1 1 0"
                    >
                      {item.title}
                    </Span>
                  </FlexBox>
                </NavLink>
              )}
            </Box>
          );
        })}
        <Button
          variant={"contained"}
          onClick={logOut}
          style={{
            color: "white",
            marginBottom: "1rem",
          }}
          className={"details-box"}
          color={"primary"}
          fullWidth
        >
          <LogoutIcon
            fontSize="small"
            style={{ marginLeft: "5px", fontWeight: "normal !important" }}
          />
          ????????
        </Button>
      </BazarCard>
    </SimpleBar>
  );
};

export default Grocery2SideNav;
