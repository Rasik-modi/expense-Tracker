import React from 'react';
import {Details} from './components/Details/Details';
import {Grid} from '@material-ui/core';
import useStyle from  './app.style';
import Main from './components/Main/Main';

export default function App() {
    const classes=useStyle();
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        className={classes.grid}
        style={{height: '100vh'}}>
        <Grid item xs={12} md={3}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} md={4}><Main/></Grid>
        <Grid item xs={12} md={3}><Details title="Expenses"/></Grid>
      </Grid>
    </div>
  );
}
