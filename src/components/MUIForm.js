import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import * as emailjs from 'emailjs-com'



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
  const [invalidInput, setInvalidInput] = useState(false);
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
  }

  const onSubmit = e => {
    e.preventDefault();
    if (email.name !== "" && email.email!=="" &&email.message!==""){
      setButtonText('loading...')
      setInvalidInput(false)
      let templateParams = {
        from_name: email.name,
        to_name: 'Alex',
        subject: `Portfolio Inquiry from ${email.email}`,
        message_html: email.message
      }
      
  
      let service_id = process.env.REACT_APP_SERVICE_ID;
      let template_id = process.env.REACT_APP_TEMPLATE_ID;
      let user_id = process.env.REACT_APP_USER_ID;
    
  
      emailjs.send(service_id,template_id, templateParams, user_id)
        .then(res=>{
          console.log(res)
          setSent(true)
        })
        .catch(err=>{
          console.log(err)
        })

    }

    else{
      setInvalidInput(true)
    }


  }


  return (
    <StylesProvider injectFirst>
    {sent===false && <form className={classes.root} noValidate autoComplete="off" style={{width: '100%'}} onSubmit={onSubmit}>
      
      
      <Container>
        <Title>Contact Me</Title>
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
          placeholder="Email"
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
        data-testid="submit"
        variant="contained"
        type="submit"
        color="primary"
        // style={{marginTop: '4%', width: '15%'}}
        className={classes.button}
        // onClick={}
      >
        {buttonText}
      </Button>
          {invalidInput && <p>All fields required</p>}
      </Container>
      
    </form>}
    {sent && <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <h1>Thanks for your message!</h1>
      </div>}
    </StylesProvider>
  );
}


const Container = styled.div`
  margin: 5% auto;
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

const Title = styled.h1`
  @media(max-width: 1020px){
    // font-size: 1rem;
  }
`;


