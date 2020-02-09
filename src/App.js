import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
      <div className="App">
        <Nav/>
        <Route exact path='/'><Home/></Route>
        <Route path='/projects'><Projects/></Route>
        <Route path='/contact'><Contact/></Route>
        {/* <Footer/> */}
    
        
      </div>
    
  );
}

export default App;
