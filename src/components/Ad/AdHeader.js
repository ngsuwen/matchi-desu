import React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Ad from '../ApiCalls/AdsApi';

const arrList = [15050, 4329, 9617, 15499, 13431, 17318, 15322, 13346, 7025]


export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);
  
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  
  const ads = arrList.map((element) => <Collapse in={checked}><Ad id={element}/></Collapse>)
  
  return (
    <>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label=''
      />
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            justifyContent: 'space-around',
          },
        }}
      >
        <div>
          {ads}
        </div>
      </Box>
      </>
  );
}