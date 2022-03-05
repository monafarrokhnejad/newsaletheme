import React, {useState} from "react";
import GroceryLayout from "/src/components/layout/GroceryLayout";
import {H3} from "../src/components/Typography";
import {Box} from "@mui/system";
import {CircularProgress, Grid, styled} from "@mui/material";
import WhiteLayout from "../src/components/layout/WhiteLayout";
import Stack from '@mui/material/Stack';

const StyledBoxMain = styled(Box)(({theme}) => ({
    boxShadow: '2px 4px 7px gray',
    background: "#f68e1f",
    padding: " 2rem 1rem",
    borderRadius: "10px",
    color: "white",
    fontSize: "13px",
    position: "relative",
    border: "1px solid #b7b7b7",
    ".offers": {
        position: "absolute",
        left: '50px',
        top: '90%',
        background: '#eaeaea',
        padding: '6px 20px',
        borderRadius: '5px',
        color: '#888',
        fontSize: ' 11px',
        display: "flex",
        alignItems: "center",
        border: "1px solid #cacaca",
        // lineHeight:"0",
        ".countOffers": {
            "position": "absolute",
            "background": "white",
            "fontSize": "1.2rem",
            "borderRadius": "50%",
            border: "1px solid #cacaca",
            "color": "#f68e1f",
            "top": "-3px",
            "left": "-20px",
            "fontWeight": "bold",
            "minWidth": "35px",
            "minHeight": "35px",
            "textAlign": "center",
            "alignItems": "center",
            "display": "flex",
            "justifyContent": "center",
            "span": {
                position: "relative",
                top: "1px"
            }
        }

    }
}));
const StyledBox = styled(Box)(({theme}) => ({
        background: "transparent",
        display: "flex",
        alignItems: "start",
        justifyContent: "inherit",
        fontSize: "11px",
        padding: "1rem",
        ".imageInner": {
            padding: '0 1.5rem'
        },

        ".description": {
            color: '#a6a6a6',
            '.btn': {
                margin: '0',
                fontSize: '10px',
                background: '#eaeaea',
                borderRadius: '5px',
                padding: '3px 10px',
                color: '#888',
                cursor: 'pointer',
                border: "1px solid #cacaca"
            }
        }

    }))
;
const profile = () => {
    return <GroceryLayout>
        <WhiteLayout>
            <H3>هدایای شما</H3>
            <Grid container>
                <Grid item sm={8}>
                   <div style={{maxHeight:"500px", overflowY:"auto"}}>
                       {gifts.map((gift) => {
                           return <StyledBox> <Grid container>
                               <Grid item sm={1}>
                                   <Stack spacing={5} direction="row" position={"relative"}>
                                       <CircularProgress variant="determinate" value={gift.Percentage}/>
                                       <span style={{
                                           position: "absolute",
                                           top: '14px',
                                           right: '9px',
                                           color: "#888",
                                           fontWeight: "bold"
                                       }}>{gift.Percentage}%</span>
                                   </Stack>
                               </Grid>
                               <Grid item sm={6}>
                                   <Box className={"imageInner"}>
                                       <img width={'100%'} style={{borderRadius: "10px"}}
                                            src={gift.img}
                                            alt={"img"}/>
                                   </Box>
                               </Grid>
                               <Grid item sm={5}>
                                   <Box className={"description"}>
                                    <span style={{
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        color: '#a6a6a6'
                                    }}>
                                    {gift.name}
                                </span>
                                       <div>{gift.description}</div>
                                       <div style={{
                                           display: "flex",
                                           justifyContent: "space-between",
                                           alignItems: "center"
                                       }}>
                                            <span>امتیاز لازم <spnn
                                                style={{color: "#f68e1f"}}>{gift.score}</spnn></span>
                                           <button className={'btn'}>اینو میخوام</button>
                                       </div>
                                   </Box>
                               </Grid>
                           </Grid>
                           </StyledBox>
                       })}
                   </div>
                </Grid>
                <Grid item sm={4}>
                    <StyledBoxMain><Box>
                        <Grid container>
                            <Grid justifyContent={"center"} alignItems={"center"} textAlign={"center"} item xs={7}>
                                <span style={{fontSize: "3rem", fontWeight: "bold"}}>820</span>
                                <div style={{
                                    position: "absolute",
                                    top: '80px',
                                    right: '60px',
                                    fontSize: '15px'
                                }}>امتیــــاز
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <span style={{fontWeight: "bold", fontSize: "14px"}}>
                                    امتیازات شما
                                </span>
                                <br/>
                                <div style={{
                                    fontSize: '11px',
                                    lineHeight: '1.3',
                                }}>
                                <span>
                                    مجموع امتیاز کسب شده شما تا این لحظه
                                </span>
                                </div>
                            </Grid>
                        </Grid>
                        <div className={"offers"}>
                            <span>پیشنهادات فعال</span>
                            <div className={"countOffers"}><span>12</span></div>
                        </div>
                    </Box>
                    </StyledBoxMain>
                </Grid>
            </Grid>
        </WhiteLayout>

    </GroceryLayout>;
};

const gifts = [
    {
        Percentage: 72,
        img: '/assets/images/promotion/offer-2.png',
        name: 'وانت بار',
        description: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        score: "4600"
    },
    {
        Percentage: 100,
        img: '/assets/images/promotion/offer-2.png',
        name: 'تور کوش آداسی',
        description: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        score: "720"
    },
    {
        Percentage: 57,
        img: '/assets/images/promotion/offer-2.png',
        name: 'اسپرسو ساز دلونگی',
        description: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        score: "420"
    },{
        Percentage: 72,
        img: '/assets/images/promotion/offer-2.png',
        name: 'وانت بار',
        description: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        score: "4600"
    },
    {
        Percentage: 100,
        img: '/assets/images/promotion/offer-2.png',
        name: 'تور کوش آداسی',
        description: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        score: "720"
    },
    {
        Percentage: 57,
        img: '/assets/images/promotion/offer-2.png',
        name: 'اسپرسو ساز دلونگی',
        description: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        score: "420"
    },
]


export default profile;