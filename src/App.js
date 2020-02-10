import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import styled from 'styled-components'
import About from './components/About'


function App() {
  return (
      <div className="App">
        <Nav/>   
        {/* <FadeIn transitionDuration={1000}>
          <ImgDiv>
          <Img src={logo}/> 
          </ImgDiv>  
        </FadeIn> */}
          
        <Route exact path='/'><Home/></Route>
        <Route path='/about'><About/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/contact'><Contact/></Route>
        <Footer/>
    
        
      </div>
    
  );
}

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

const Img = styled.img`
  width: 15%;
  @media(max-width: 1350px){
    width: 20%;
  }
  @media(max-width: 970px){
    width: 35%;
  }
`;


export default App;
