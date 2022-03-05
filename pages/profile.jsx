import * as yup from "yup";
import React from "react";

import {useFormik} from "formik";

import {Box} from "@mui/system";
import {Button, Divider, Grid, Typography} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import GroceryLayout from "/src/components/layout/GroceryLayout";
import {H3} from "../src/components/Typography";
import BazarTextField from "../src/components/BazarTextField";
import BazarButton from "../src/components/BazarButton";
import WhiteLayout from "../src/components/layout/WhiteLayout";

const profile = () => {
    const handleFormSubmit = async (values) => {
        console.log(values)
    }
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            birthday: '',
            saleNumber: '',
            faxNumber: '',
            storeZipCode: '',
            storeAddress: '',
            homeAddress: '',
        },
        validationSchema: formSchema,
        onSubmit: handleFormSubmit
    });
    return <GroceryLayout>
        <WhiteLayout>
            <H3>
                صفحه شخصی
            </H3>
            <form className="content" onSubmit={handleSubmit}>

                <Box mt={3} mb={6}>
                    <Grid container spacing={2}>
                        <Grid item alignItems={"center"} margin={"auto"} justifyContent={"center"} position={"relative"}
                              sm={2}>
                            <img width={130} src={'/assets/images/faces/7.png'} alt={"avatar"}/>
                            <Button className={'add-photo'}>
                                <AddAPhotoIcon fontSize={"small"}/>
                            </Button>
                        </Grid>
                        <Grid item sm={10}>
                            <Grid container spacing={2}>
                                <Grid item sm={3} xs={6}>
                                    <BazarTextField mb={1.5} name="firstName" label="نام "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.firstName || ""}
                                                    error={!!touched.firstName && !!errors.firstName}
                                                    helperText={touched.firstName && errors.firstName}/>
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <BazarTextField mb={1.5} name="lastName" label="نام خانوادگی "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.lastName || ""}
                                                    error={!!touched.lastName && !!errors.lastName}
                                                    helperText={touched.lastName && errors.lastName}/>
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <BazarTextField mb={1.5} name="email" label="ایمیل "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.email || ""} error={!!touched.email && !!errors.email}
                                                    helperText={touched.email && errors.email}/>
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <BazarTextField mb={1.5} name="phoneNumber" label="َشماره همراه "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.phoneNumber || ""}
                                                    error={!!touched.phoneNumber && !!errors.phoneNumber}
                                                    helperText={touched.phoneNumber && errors.phoneNumber}/>
                                </Grid>


                                <Grid item sm={3} xs={6}>
                                    <BazarTextField mb={1.5} name="name" label="تاریخ تولد "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.name || ""} error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}/>
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <BazarTextField mb={1.5} name="name" label="شماره فروش "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.name || ""} error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}/>
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <BazarTextField mb={1.5} name="name" label="شماره فکس "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.name || ""} error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}/>
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <BazarTextField mb={1.5} name="name" label="کدپستی فروشگاه "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.name || ""} error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}/>
                                </Grid>


                                <Grid item sm={6} xs={6}>
                                    <BazarTextField mb={1.5} name="name" label="آدرس فروشگاه "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.name || ""} error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}/>
                                </Grid>
                                <Grid item sm={6} xs={6}>
                                    <BazarTextField mb={1.5} name="name" label="آدرس منزل "
                                                    variant="outlined"
                                                    size="small" type="text" fullWidth onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.name || ""} error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider/>
                    <Typography sx={{margin: "1rem 0", fontSize: "13px", fontWeight: "bold"}} color={"primary"}>حاصل
                        نوین قصد دارد در روز تولد اعضای خانواده شما،
                        آنهارا شگفت زده کند. با پر کردن اطلاعات زیر مارا در این امر یاری کنید.</Typography>
                    <Grid container spacing={2}>
                        <Grid item sm={3} xs={6}>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <BazarTextField mb={1.5} name="name" label="نام "
                                            variant="outlined"
                                            size="small" type="text" fullWidth onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name || ""} error={!!touched.name && !!errors.name}
                                            helperText={touched.name && errors.name}/>
                        </Grid>
                        <Grid item sm={3} xs={6}>

                            <BazarTextField mb={1.5} name="name" label="نام خانوادگی "
                                            variant="outlined"
                                            size="small" type="text" fullWidth onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name || ""} error={!!touched.name && !!errors.name}
                                            helperText={touched.name && errors.name}/>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <BazarTextField mb={1.5} name="name" label="تاریخ تولد "
                                            variant="outlined"
                                            size="small" type="text" fullWidth onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name || ""} error={!!touched.name && !!errors.name}
                                            helperText={touched.name && errors.name}/>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <BazarTextField mb={1.5} name="name" label="نام "
                                            variant="outlined"
                                            size="small" type="text" fullWidth onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name || ""} error={!!touched.name && !!errors.name}
                                            helperText={touched.name && errors.name}/>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <BazarTextField mb={1.5} name="name" label="نام خانوادگی "
                                            variant="outlined"
                                            size="small" type="text" fullWidth onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name || ""} error={!!touched.name && !!errors.name}
                                            helperText={touched.name && errors.name}/>
                        </Grid>
                        <Grid item sm={3} xs={6}>
                            <BazarTextField mb={1.5} name="name" label="تاریخ تولد "
                                            variant="outlined"
                                            size="small" type="text" fullWidth onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name || ""} error={!!touched.name && !!errors.name}
                                            helperText={touched.name && errors.name}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} justifyContent={"flex-end"}>
                        <Grid item sm={3} xs={12}>
                            <BazarButton variant="contained" color="primary" type="submit" fullWidth
                                         sx={{mt: "1.65rem", height: 44, color: "white"}}>ثبت
                                تغییرات</BazarButton>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </WhiteLayout>
    </GroceryLayout>;
};
const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthday: '',
    saleNumber: '',
    faxNumber: '',
    storeZipCode: '',
    storeAddress: '',
    homeAddress: '',
};
const formSchema = yup.object().shape({
    firstName: yup.string().required("${path} خالی است"),
    lastName: yup.string().required("${path} خالی است"),
    email: yup.string().required("${path} خالی است"),
    phoneNumber: yup.string().required("${path} خالی است"),
    birthday: yup.string().required("${path} خالی است"),
    saleNumber: yup.string().required("${path} خالی است"),
    faxNumber: yup.string().required("${path} خالی است"),
    storeZipCode: yup.string().required("${path} خالی است"),
    storeAddress: yup.string().required("${path} خالی است"),
    homeAddress: yup.string().required("${path} خالی است"),
});
export default profile;