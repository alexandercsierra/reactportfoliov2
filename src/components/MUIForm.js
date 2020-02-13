import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import styled from 'styled-components'

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'



const useStyles = makeStyles(theme => ({
  root: {
    textField: {
        
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    },
  },
}));

export default function FormPropsTextFields() {
    // console.log('from form', props)
  const classes = useStyles();
//   const {newclass} = props;

  return (
    <StylesProvider injectFirst>
    <form className={classes.root} noValidate autoComplete="off" style={{width: '100%'}}>
      
      
      <Container>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Name"
          variant="outlined"
          style={{width:'100%'}}
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
          style={{width:'100%'}}
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
          multiline={true}
          rows={6}
          style={{width:'100%'}}
          InputProps={{
            className: classes.outlined
          }}
        />
         <Button
        variant="contained"
        color="primary"
        style={{marginTop: '4%', width: '15%'}}
        className={classes.button}
        // endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
       
      </Container>
      
    </form>
    </StylesProvider>
  );
}


const Container = styled.div`
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
  width: 60%;

  @media(max-width:1400px){
    width: 50%;
  }

  @media(max-width:1160px){

  }

  @media(max-width:1020px){
    margin-top: 2%;
  }
  @media(max-width:740px){
    width: 90%;
    margin-top: 15%;
  }
  @media(max-width:570px){

  }
  @media(max-width:400px){
    margin-top: 2%;
  }

`;


