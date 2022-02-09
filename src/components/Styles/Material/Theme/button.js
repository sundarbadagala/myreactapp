import React from 'react'
import { useStyles } from './styles';

function DeepChild() {
    const classes = useStyles();
  
    return (
      <button type="button" className={classes.root}>
        Theming
      </button>
    );
  }

  export default DeepChild