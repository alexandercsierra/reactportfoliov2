import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import styled from 'styled-components'
import axios from 'axios'
import Button from '@material-ui/core/Button';



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
  const classes = useStyles();
  const [sent, setSent] = useState(false);
  // const [buttonText, setButtonText] = useState('send');
  const [buttonText, setButtonText] = useState('send');
  const [email, setEmail] = useState({
    name: '',
    email:'',
    message: ''
  })

  

  const handleChange = e => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    })
    console.log(email);
  }

  const onSubmit = e => {
    e.preventDefault();
    console.log(email);
    axios.post('https://portfolioemailserver.herokuapp.com/email/', email)
      .then(res=>setSent(true))
      .catch(err=>console.log(err))

  }


  return (
    <StylesProvider injectFirst>
    {sent===false && <form className={classes.root} noValidate autoComplete="off" style={{width: '100%'}} onSubmit={onSubmit}>
      
      
      <Container>
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          label="Name"
          name="name"
          // defaultValue="Name"
          value={email.name}
          onChange={handleChange}
          placeholder="Name"
          variant="outlined"
          style={{width:'100%'}}
          InputProps={{
            className: classes.outlined
          }}
        />
        <TextField
          required
          autoComplete="off"
          id="outlined-required"
          label="Email"
          name="email"
          // defaultValue="Email"
          value={email.email}
          onChange={handleChange}
          placholder="Email"
          variant="outlined"
          style={{width:'100%'}}
          InputProps={{
            className: classes.outlined
          }}
        />
        <TextField
          
          required
          autoComplete="off"
          id="outlined-required"
          label="Message"
          name="message"
          // defaultValue="Message"
          placeholder="Message"
          variant="outlined"
          multiline={true}
          rows={6}
          style={{width:'100%'}}
          value={email.message}
          onChange={handleChange}
          InputProps={{
            className: classes.outlined
          }}
        />
         <Button
        variant="contained"
        type="submit"
        color="primary"
        // style={{marginTop: '4%', width: '15%'}}
        className={classes.button}
        onClick={()=>{setButtonText('loading...')}}
      >
        {buttonText}
      </Button>
       
      </Container>
      
    </form>}
    {sent && <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <h1>Thanks for your message!</h1>
      </div>}
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



