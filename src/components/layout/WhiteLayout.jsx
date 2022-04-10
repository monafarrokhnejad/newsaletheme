import React from "react";
import Link from "next/link";

import { Card } from "@mui/material";
import { H3, H4 } from "components/Typography";

import { Box, Grid, styled } from "@mui/material";

const StyledLink = styled("a")(({ theme }) => ({
  position: "relative",
  display: "flex",
  padding: "0.3rem 0rem",
  color: "gray",
  cursor: "pointer",
  borderRadius: 4,
  "& span": {
    transition: "all 0.2s ease",
  },
  "& span:hover": {
    color: "#ddd",
    marginRight: "10px",
  },
}));

const WhiteLayout = (props) => {
  return (
    <Card style={{ padding: "2rem", margin: "2rem 0" }}>
      {props.main && (
        <div>
          <H3 mb={3}>{props.title}</H3>
          {props.children}{" "}
        </div>
      )}
      {props.sideItems && (
        <div>
          <H4 mb={2}>{props.sideItems.title}</H4>
          <ul>
            {props.sideItems.items.map((item, index) => {
              return (
                <li>
                  <Link href="/news">
                    <StyledLink>
                      <i style={{ marginLeft: "10px" }}>-</i>
                      <span>{item}</span>
                    </StyledLink>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Card>
  );
};
export default WhiteLayout;
