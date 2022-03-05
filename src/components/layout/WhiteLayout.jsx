import React from "react";

import {Card} from "@mui/material";

const WhiteLayout = (props) => {
    return <Card style={{padding:"2rem", margin:"2rem 0"}}>
        {props.children}
    </Card>
};
export default WhiteLayout;