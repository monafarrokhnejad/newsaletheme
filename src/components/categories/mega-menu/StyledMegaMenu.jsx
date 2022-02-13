import { Box, styled } from '@mui/material';
import React from 'react'; // styled component

const Wrapper = styled(Box)(({
  theme
}) => ({
  display: 'none',
  position: 'absolute',
  right: '100%',
  left: 'auto',
  top: 0,
  zIndex: 99,
  marginRight: '10px',
  '& .title-link, & .child-link': {
    color: 'inherit',
    fontWeight: 600,
    display: 'block',
    padding: '0.5rem 0px'
  },
  '& .child-link': {
    fontWeight: 400
  },
  '& .mega-menu-content': {
    padding: '0.5rem 0px',
    marginRight: '10px',
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    transition: 'all 250ms ease-in-out'
  }
}));

const StyledMegaMenu = ({
  children
}) => {
  return <Wrapper className="mega-menu">{children}</Wrapper>;
};

export default StyledMegaMenu;