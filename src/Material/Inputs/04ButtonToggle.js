import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      <FormControlLabel
        sx={{
          display: 'block',
          
          border: '1px solid green',
          width:'200px'
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Night Mode"
      />
      {
          loading ?  'On' : 'Off' 
      }
    </div>
  );
}
