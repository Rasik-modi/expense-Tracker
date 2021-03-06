import React from 'react';
import {Details} from './components/Details/Details';
import {Grid} from '@material-ui/core';
export default function App() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{height: '100vh'}}>
        <Grid item xs={12} md={4}>
          <Details />
        </Grid>
        <Grid item xs={12} md={4}>main</Grid>
        <Grid item xs={12} md={4}><Details/></Grid>
      </Grid>
    </div>
  );
}
