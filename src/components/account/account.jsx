import React, {useEffect, useState} from 'react';
import {Box} from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useRouter} from "next/router";

const Account = () => {
    const router =useRouter();
    const [nameX, setNameX] = useState("");
    useEffect(() => {
        setNameX(window.localStorage.getItem("name"))
    }, [])
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
    }
    // end menu
    return (<>
            <Box
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{display:"flex", alignItems:"center", marginLeft:"1.5rem"}}
                >
                <img width={50} src="/assets/images/faces/7.png"/>
                <div style={{marginRight: "10px", fontSize: "14px", width:"98px"}}>
                        Mohamad {nameX}
                </div>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logOut}>خروج</MenuItem>
            </Menu>
        </>
    );
};

export default Account;