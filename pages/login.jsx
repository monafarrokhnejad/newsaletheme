import React from 'react';

import {makeStyles} from '@mui/styles';

import FlexBox from '/src/components/FlexBox';
import Login from '/src/components/sessions/Login';

const useStyles = makeStyles({
    root: {
        height: "100vh",

    },
    box: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    "@media (min-width: 800px)": {
        root: {
            backgroundImage: `url("/vecBg.png") `,
            overflow: "hidden",
            background: '#f79621',
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundAttachment: 'fixed',
            backgroundPosition: '0',
            position: "relative"
        },
        box: {
            margin: "0",
            background: "#fff",
            width: "700px",

        }
    },
    "@media (max-width: 800px)": {
        root: {
            background: "#fff"
        },
        box: {
            margin: "auto"
        }
    }
});

const LoginPage = (props) => {
    const classes = useStyles(props);

    return <FlexBox className={classes.root} flexDirection="column" minHeight="100vh" justifyContent="center">
        <div className={classes.box}>
            <Login/>
        </div>

    </FlexBox>;
};

export default LoginPage;