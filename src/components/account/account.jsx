import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";

const Account = () => {
  const router = useRouter();
  const [nameX, setNameX] = useState("");
  const [avatar, setAvater] = useState("");
  useEffect(() => {
    setNameX(window.localStorage.getItem("name"));
    setAvater(window.localStorage.getItem("image"));
  }, []);
  // menue
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    window.localStorage.clear();
    router.push("/login");
  };
  // end menu
  return (
    <>
      <Box
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          "@media only screen and (max-width: 960px)": {
            marginLeft: "auto",
          },
        }}
      >
        <img style={{ borderRadius: "50%" }} width={33} src={avatar} />
        <div
          style={{
            marginRight: "10px",
            fontSize: "14px",
            width: "max-content",
          }}
        >
          Mohamad {nameX}
        </div>
        <span className={"type-of-user"}>الماس</span>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ zIndex: "9999" }}
      >
        <MenuItem onClick={handleClose}>
          <Link href={"/profile"}>
            <a>صفحه شخصی</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logOut}>خروج</MenuItem>
      </Menu>
    </>
  );
};

export default Account;
