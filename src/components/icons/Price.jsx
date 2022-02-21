import { SvgIcon } from '@mui/material';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Price = props => {
  return <SvgIcon {...props} viewBox="0 0 20 20">
      <ShoppingCartOutlinedIcon/>
    </SvgIcon>;
};

export default Price;