import React from "react";
import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <Button>Normal</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button disabled variant="contained">
        Disabled
      </Button>
      <Button variant="contained">with elevation</Button>
      <Button disableElevation variant="contained">
        without elevation
      </Button>
      <hr />
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color='secondary'>Primary</Button>
      <Button variant="contained" color='success'>Primary</Button>
      <Button variant="contained" color='error'>Primary</Button>
      <hr/>
      <Button variant='contained' size='small'>Small</Button>
      <Button variant='contained' size='medium'>Medium</Button>
      <Button variant='contained' size='large'>Large</Button>
    </div>
  );
}

export default App;
