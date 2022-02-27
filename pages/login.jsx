import React, {useEffect} from 'react';

import FlexBox from '/src/components/FlexBox';
import Login from '/src/components/sessions/Login';
import Head from "next/head";
import {useRouter} from "next/router";

const LoginPage = (props) => {
    const router = useRouter();

    useEffect(() => {
        const isLogin = () => !!localStorage.getItem("x-auth-token");

        // if(isLogin()){
        //     console.log("yes login")
        //     router.push("/")
        // }
        // else {
        //     console.log("No login")
        //     router.push("/login")
        // }
    }, [])
    return <>
        <Head>
            <title>صفحه ورود کاربر</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <FlexBox className={"login-box"} flexDirection="column" minHeight="100vh" justifyContent="center">
            <div className={"login-box-inner"}>
                <Login/>
            </div>
            <div className={'logo-login'}>
                <img src={"/assets/images/logo-white.png"} alt={"logo"} width={300}/>
            </div>

        </FlexBox>
    </>
};

export default LoginPage;