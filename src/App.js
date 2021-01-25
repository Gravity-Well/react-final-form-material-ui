import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';

export default function App() {

  
const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(`Your Submission of \n ${JSON.stringify(values, 0, 2)} \n Was Successful`);
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h5" align="center" component="h1" gutterBottom>
      Gravity Well Application for Employment Form
      </Typography>
      
      
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: false }}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="firstName"
                    component={TextField}
                    type="text"
                    label="First Name"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    fullWidth
                    required
                    name="lastName"
                    component={TextField}
                    type="text"
                    label="Last Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    fullWidth
                    required
                    component={TextField}
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    label="Employed"
                    control={
                      <Field
                        name="employed"
                        component={Checkbox}
                        type="checkbox"
                      />
                    }
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Work Desirability</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel
                        label="Full-time"
                        control={
                          <Field
                            name="work"
                            component={Radio}
                            type="radio"
                            value="Full-time"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Part-time Fixed hours"
                        control={
                          <Field
                            name="work"
                            component={Radio}
                            type="radio"
                            value="Part-time fixed hours"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Part-time on-demand"
                        control={
                          <Field
                            name="work"
                            component={Radio}
                            type="radio"
                            value="Part-time on-demand"
                          />
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Languages/Frameworks</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="React"
                        control={
                          <Field
                            name="languages"
                            component={Checkbox}
                            type="checkbox"
                            value="React"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Angular"
                        control={
                          <Field
                            name="languages"
                            component={Checkbox}
                            type="checkbox"
                            value="Angular"
                          />
                        }
                      />
                      <FormControlLabel
                        label="C#"
                        control={
                          <Field
                            name="languages"
                            component={Checkbox}
                            type="checkbox"
                            value="C#"
                          />
                        }
                      />
                      <FormControlLabel
                        label="nodejs"
                        control={
                          <Field
                            name="languages"
                            component={Checkbox}
                            type="checkbox"
                            value="nodejs"
                          />
                        }
                      />
                      
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Position Desired</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="Front-End"
                        control={
                          <Field
                            name="position"
                            component={Checkbox}
                            type="checkbox"
                            value="Front-End"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Back-End"
                        control={
                          <Field
                            name="position"
                            component={Checkbox}
                            type="checkbox"
                            value="Back-End"
                          />
                        }
                      />
                     
                      
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="otherinfo"
                    component={TextField}
                    multiline
                    label="Other Information"
                  />
                </Grid>
                <Grid item xs={10}>
                  <Field
                    fullWidth
                    name="location"
                    component={Select}
                    label="Location to work from"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="On-premise">On-premise</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="combination">
                      Combination
                    </MenuItem>
                  </Field>
                </Grid>
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item xs={6}>
                    <Field
                      name="rendez-vous"
                      component={DatePickerWrapper}
                      fullWidth
                      margin="normal"
                      label="Rendez-vous"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      name="alarm"
                      component={TimePickerWrapper}
                      fullWidth
                      margin="normal"
                      label="Alarm"
                    />
                  </Grid>
                </MuiPickersUtilsProvider> */}
                
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values,0,2)}</pre>
          </form>
        )}
      />
    </div>
  );
}