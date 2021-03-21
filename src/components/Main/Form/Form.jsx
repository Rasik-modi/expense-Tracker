import React from 'react';
import useStyle from './form.style';
import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
const Form = () => {
    const classes=useStyle();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          c/fdeg 
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <label>Type</label>
          <select id="type" className={classes.selectDiv}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <label>Category</label>
          <select id="category" className={classes.selectDiv}>
            <option value="Business">Business</option>
            <option value="Salary">Salary</option>
          </select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth value="" />
      </Grid>
      <Button
        variant="outlined"
        // className={classes.button}
        color="primary"
        fullWidth>
        Create
      </Button>
    </Grid>
  );
};

export default Form;
