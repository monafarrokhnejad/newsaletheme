import React from 'react';
import Link from 'next/link';
import Image from 'components/BazarImage';
// import BazarMenu from 'components/BazarMenu';
import FlexBox from 'components/FlexBox';
import NavLink from 'components/nav-link/NavLink';
import { Span } from 'components/Typography';
import CallOutlined from '@mui/icons-material/CallOutlined';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import MailOutline from '@mui/icons-material/MailOutline';
import { Container, MenuItem } from '@mui/material';
// import TouchRipple from '@mui/material/ButtonBase';
import { layoutConstant } from 'utils/constants';
import { styled } from '@mui/material/styles';
import {Box} from "@mui/system";
import Account from "../account/account";


const TopbarWrapper = styled('div')(({
  theme
}) => ({
  background: theme.palette.secondary.main,
  // color: theme.palette.secondary.contrastText,
  color: "white",
  height: layoutConstant.topbarHeight,
  fontSize: 12,
  '@media only screen and (min-width: 959px)': {
  },
  '& .topbarLeft': {
    '& .logo': {
      display: 'none',
    },
    '& .title': {
      marginLeft: '5px',
    },
    '@media only screen and (max-width: 959px)': {
      '& .logo': {
        display: 'block',
        cursor:"pointer"
      },
      '& > *:not(.logo)': {
        display: 'none'
      }
    }
  },
  '& .topbarRight': {
    '& .link': {
      paddingLeft: 30,
      // color: theme.palette.secondary.contrastText
      color: "white",
      fontWeight: "bold"
    },
    '@media only screen and (max-width: 959px)': {
      '& .link': {
        display: 'none'
      }
    }
  },
  '& .smallRoundedImage': {
    height: 15,
    width: 25,
    borderRadius: 2
  },
  '& .handler': {
    height: layoutConstant.topbarHeight
  },
  '& .menuTitle': {
    fontSize: 12,
    marginLeft: '0.5rem',
    fontWeight: 600
  },
  '& .menuItem': {
    minWidth: 100
  },
  '& .marginRight': {
    marginRight: '1.25rem'
  }
}));

const Topbar = () => {
  return <TopbarWrapper>
      <Container sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%'
    }}>
        <FlexBox className="topbarLeft" alignItems="center">
          <div className="logo">
            <Link href="/">
              <Image display="block" height="40px" src="/assets/images/logo-white.png" alt="logo" />
            </Link>
          </div>

          <FlexBox alignItems="center" style={{marginLeft:"8px"}}>
            <Account/>
          </FlexBox>
        </FlexBox>

        <FlexBox className="topbarRight" alignItems="center">
          <h3>
            <span>?????????????? ?????? : </span><span style={{color:"#592e00"}}>???????? ?????? ????????</span>
          </h3>
        </FlexBox>
      </Container>
    </TopbarWrapper>;
};

export default Topbar;