import { SvgIcon } from '@mui/material';
import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Setting = props => {
  return <SvgIcon {...props} viewBox="0 0 20 20">
      <SettingsOutlinedIcon />
  </SvgIcon>;
};

export default Setting;