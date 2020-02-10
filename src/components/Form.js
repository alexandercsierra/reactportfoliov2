import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textField: {
        color: 'white'
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function FormPropsTextFields() {
    // console.log('from form', props)
  const classes = useStyles();
//   const {newclass} = props;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Name"
          variant="outlined"
          InputProps={{
            className: classes.outlined
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Email"
          variant="outlined"
          InputProps={{
            className: classes.outlined
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Message"
          defaultValue="Message"
          variant="outlined"
          InputProps={{
            className: classes.outlined
          }}
        />
       
      </div>
    </form>
  );
}
