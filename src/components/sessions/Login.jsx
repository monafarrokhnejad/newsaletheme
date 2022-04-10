import React, { useCallback, useState, useEffect } from "react";

import * as yup from "yup";
import { useFormik } from "formik";

import Link from "next/link";
import { useRouter } from "next/router";

import axios from "axios";
import { SERVER_URL } from "constant";

import BazarButton from "components/BazarButton";
import BazarTextField from "components/BazarTextField";
import FlexBox from "components/FlexBox";
import { H3, H6, Small } from "components/Typography";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const fbStyle = {
  background: "#3B5998",
  color: "white",
};
const googleStyle = {
  background: "#4285F4",
  color: "white",
};

const StyledCard = styled(({ children, passwordVisibility, ...rest }) => (
  <div {...rest}>{children}</div>
))(({ theme, passwordVisibility }) => ({
  width: 500,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  ".content": {
    textAlign: "center",
    padding: "3rem 3.75rem 0px",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5rem 1rem 0px",
    },
  },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": {
    marginBottom: 10,
    "&:hover": fbStyle,
    ...fbStyle,
  },
  ".googleButton": {
    "&:hover": googleStyle,
    ...googleStyle,
  },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24,
  },
}));

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values) => {
    console.log(values);
    try {
      const { data } = await axios.post(`${SERVER_URL}/login`, values);

      localStorage.setItem("name", data.name);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);

      router.push("/");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: formSchema,
      onSubmit: handleFormSubmit,
    });
  return (
    <StyledCard elevation={3} passwordVisibility={passwordVisibility}>
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
          به سامانه فروش حاصل نوین خوش آمدید
        </H3>
        <Small
          fontWeight="600"
          fontSize="12px"
          color="grey.800"
          textAlign="center"
          mb={4.5}
          display="block"
        >
          با ایمیل و رمز عبور خود وارد شوید
        </Small>

        <BazarTextField
          mb={1.5}
          name="username"
          label="نام کاربری "
          placeholder="نام کاربری خودرا وارد کنید"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.username || ""}
          error={!!touched.username && !!errors.username}
          helperText={touched.username && errors.username}
        />

        <BazarTextField
          mb={2}
          name="password"
          label="رمزعبور"
          placeholder=" ********* خودرا وارد کنید"
          autoComplete="on"
          type={passwordVisibility ? "text" : "password"}
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {passwordVisibility ? (
                  <Visibility className="passwordEye" fontSize="small" />
                ) : (
                  <VisibilityOff className="passwordEye" fontSize="small" />
                )}
              </IconButton>
            ),
          }}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password || ""}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
        />

        <BazarButton
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          sx={{ mb: "1.65rem", height: 44, color: "white" }}
        >
          ورود
        </BazarButton>
      </form>

      <FlexBox justifyContent="center" bgcolor="grey.200" py={2.5}>
        رمز عبور خودرا فراموش کرده اید ؟
        <Link href="/">
          <a>
            <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
              بازیابی کنید
            </H6>
          </a>
        </Link>
      </FlexBox>
    </StyledCard>
  );
};

const initialValues = {
  username: "",
  password: "",
};
const formSchema = yup.object().shape({
  username: yup.string().required("${path} خالی است"),
  password: yup.string().required("${path} خالی است"),
});
export default Login;
