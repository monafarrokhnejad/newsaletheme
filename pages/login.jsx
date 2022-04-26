import React, { useEffect } from "react";

import { useRouter } from "next/router";

import FlexBox from "/src/components/FlexBox";
import Login from "../src/components/sessions/Login.jsx";
import Head from "next/head";

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    // checks if the user is authenticated
    const isLogin = () => !!window.localStorage.getItem("x-auth-token");
    isLogin() ? router.push("/") : router.push("/login");
  }, []);
  return (
    <>
      <Head>
        <title>صفحه ورود کاربر</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FlexBox
        className={"login-box"}
        flexDirection="column"
        minHeight="100vh"
        justifyContent="center"
      >
        <div className={"login-box-inner"}>
          <Login />
        </div>
        <div className={"logo-login"}>
          <img src={"/assets/images/logo-white.png"} alt={"logo"} width={300} />
        </div>
      </FlexBox>
    </>
  );
};

export default LoginPage;
