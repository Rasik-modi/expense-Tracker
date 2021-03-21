import React from 'react';
import {
  Card,
  Typography,
  CardContent,
  CardHeader,
  Grid,
  Divider,
} from '@material-ui/core';
import useStyle from './main.style';
import Form from './Form/Form';
import List from './List/List';
function Main() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered BY Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance 100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{lineHeight: '1.5em', marginTop: '20px'}}>
          Try saying Add expense of 100
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}><List/></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Main;
