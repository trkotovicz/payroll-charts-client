import { Box, Typography, Link } from "@mui/material";
import React from "react";
import githubIcon from '../img/github-icon-white.jpeg';

function Footer(position, bottom, width) {

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#3267AC', height: '100px', position, bottom, width }}>

      <Link href="https://github.com/trkotovicz/aws-serverless-nodejs" underline='none' sx={{ mx: 3, display: 'flex', width: '180px', height: '40px', justifyContent: 'space-between', alignItems:'center' }} target="_blank">
        <Box component='img' sx={{ width: '40px' }}
          src={ githubIcon } alt="github"
        />
        <Typography sx={{ color: 'background.default', fontWeight: 600 }}>
          Server Repository
        </Typography>
      </Link>
        
      <Link href="https://github.com/trkotovicz/payroll-charts-client" underline="none" sx={{ mx: 3, display: 'flex', width: '180px', height: '40px', justifyContent: 'space-between', alignItems:'center' }} target="_blank">
        <Box component='img' sx={{ width: '40px' }}
          src={ githubIcon } alt="github"
        />
        <Typography sx={{ color: 'background.default', fontWeight: 600 }}>
          Client Repository
        </Typography>
      </Link>

      </Box>
  )
}

export default Footer;