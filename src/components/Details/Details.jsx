import React from 'react';
import {Card, Typography, CardContent, CardHeader} from '@material-ui/core';
import {Doughnut} from 'react-chartjs2';
import useStyles from './styles';

export const Details = ({title}) => {
    const classes=useStyles();
  return (
    <Card className={title=="Income"?classes.income:classes.expense}>
      <CardHeader title={title} />
      <CardContent>
          <Typography variant="h5">
              $50
          </Typography>
          {/* <Doughnut data=""/> */}
      </CardContent>
    </Card>
  );
};
