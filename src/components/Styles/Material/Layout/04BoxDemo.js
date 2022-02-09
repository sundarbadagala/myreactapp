import * as React from 'react';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { BoxMain, BoxImg, BoxContainer, BoxTitle, BoxPrice, BoxScore } from './04BoxDemoStyles';


export default function Demo() {
  return (
    <Box sx={BoxMain}>
      <Box
        component="img"
        sx={BoxImg}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box sx={BoxContainer}>
        <Box component="span" sx={BoxTitle}>
          123 Main St, Phoenix AZ
        </Box>
        <Box component="span" sx={BoxPrice}>
          $280,000 — $310,000
        </Box>
        <Box sx={BoxScore}>
          <ErrorOutlineIcon />
          CONFIDENCE SCORE 85%
        </Box>
      </Box>
    </Box>
  );
}
