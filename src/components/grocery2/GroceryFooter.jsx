import AppStore from 'components/AppStore';
import BazarIconButton from 'components/BazarIconButton';
import BazarImage from 'components/BazarImage';
import Facebook from 'components/icons/Facebook';
import Google from 'components/icons/Google';
import Instagram from 'components/icons/Instagram';
import Twitter from 'components/icons/Twitter';
import Youtube from 'components/icons/Youtube';
import {Paragraph} from 'components/Typography';
import {Box, Grid, styled} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import FlexBox from '../FlexBox'; // styled components

const StyledFooter = styled('footer')(({
                                           theme
                                       }) => ({
    // marginBottom: '1rem',
    [theme.breakpoints.down('md')]: {
        marginBottom: '4rem'
    }
}));
const StyledLink = styled('a')(({theme}) => ({
    position: 'relative',
    display: 'block',
    padding: '0.3rem 0rem',
    color: "white",
    cursor: 'pointer',
    borderRadius: 4,
    "& span": {
        transition:"all 0.2s ease",
    },
    "& span:hover": {
        color: "#ddd",
        marginRight:"10px"
    }
}));

const GrocerFooter = () => {
    return <StyledFooter>
        <Box sx={{
            p: '40px',
            bgcolor: '#f68e1f',
            color: 'white',
            borderRadius: '8px'
        }}>
            <Link href="/">
                <a>
                    <BazarImage width={200} mb={2.5} src="/assets/images/logo-white.png" alt="logo"/>
                </a>
            </Link>
            <Grid container spacing={6}>
                <Grid item md={6} sm={6} xs={12}>
                    <Paragraph mb={2.5} color="white" maxWidth="370px">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </Paragraph>

                    <AppStore/>
                </Grid>

                <Grid item md={6} sm={6} xs={12}>
                    <Box mt={-0.6}>
                        {customerCareLinks.map((item, ind) => <Link href="/" key={ind}>
                            <StyledLink><i style={{marginLeft: "10px"}}>-</i><span>{item}</span></StyledLink>
                        </Link>)}
                    </Box>

                    <FlexBox className="flex" mx={-0.625} mt={2}>
                        {iconList.map((item, ind) => <a href={item.url} target="_blank" rel="noreferrer noopenner"
                                                        key={ind}>
                            <BazarIconButton m={0.5} bgcolor="rgba(0,0,0,0.2)" fontSize="12px" padding="10px">
                                <item.icon fontSize="inherit"/>
                            </BazarIconButton>
                        </a>)}
                    </FlexBox>
                </Grid>
            </Grid>
        </Box>
    </StyledFooter>;
};

const customerCareLinks = ['نیاز به کمک دارید', 'سفارشات شما', 'ارتباط با ما', 'درباره ما'];
const iconList = [{
    icon: Facebook,
    url: 'https://www.facebook.com/UILibOfficial'
}, {
    icon: Twitter,
    url: '/'
}, {
    icon: Youtube,
    url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg'
}, {
    icon: Google,
    url: '/'
}, {
    icon: Instagram,
    url: '/'
}];
export default GrocerFooter;