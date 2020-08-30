import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Carousel from './components/Carousel'
import MoreInfo from './components/MoreInfo'
import Learning from './components/Learning'
import AdminLogin from './components/AdminLogin'
import AdminDash from './components/AdminDash';
import PrivateRoute from './utils/ProtectedRoute'

function App() {

  console.log(message);

  return (
      <div className="App">
        <Nav/>   
          
        <Route exact path='/'><Home/></Route>
        <Route path='/about'><About/></Route>
        <Route exact path='/projects'><Projects/></Route>
        <Route exact path='/learning'><Learning/></Route>
        <Route path='/projects/:name'><MoreInfo/></Route>
        <Route path='/3dmodels'><Carousel/></Route>
        <Route path='/contact'><Contact/></Route>
        <Route path='/admin'><AdminLogin/></Route>
        <PrivateRoute path='/admindash' component={AdminDash}/>
        
    
        
      </div>
    
  );
}

const message = `

                                __                              
 _____ _    _   _              |  |                             
|  |  |_|  | |_| |_ ___ ___ ___|  |                             
|     | |  |  _|   | -_|  _| -_|__|                             
|__|__|_|  |_| |_|_|___|_| |___|__|                             
 _____ _          _          ___                               
|_   _| |_ ______| |_ ___   |  _|___ ___                       
 | | |   | .'|   | '_|_ -|  |  _| . |  _|                      
 |_| |_|_|__,|_|_|_,_|___|  |_| |___|_|                        
     _           _   _                    _                     
 ___| |_ ___ ___| |_|_|___ ___    ___ _ _| |_                   
|  _|   | -_|  _| '_| |   | . |  | . | | |  _|                  
|___|_|_|___|___|_,_|_|_|_|_  |  |___|___|_|                    
                          |___|                   _             
                          _   ___     _ _        |_|_           
 _____ _ _    ___ ___ ___| |_|  _|___| |_|___   |_|| |          
|     | | |  | . | . |  _|  _|  _| . | | | . |   _ | |          
|_|_|_|_  |  |  _|___|_| |_| |_| |___|_|_|___|  |__|_|          
      |___|  |_|                                 |_|
      
_____            _             
|   | |___ ___ _| |   ___                                       
| | | | -_| -_| . |  | .'|                                      
|_|___|___|___|___|  |__,|                                      
                 _                                              
 ___ ___ ___ ___| |_                                            
|  _| -_| .'|  _|  _|                                           
|_| |___|__,|___|_|              _____                          
   _             _              |___  |                         
 _| |___ _ _ ___| |___ ___ ___ ___|  _|                         
| . | -_| | | -_| | . | . | -_|  _|_|                           
|___|___|\_/|___|_|___|  _|___|_| |_|                           
     _ _     _        |_|       _           _                   
 ___| |_|___| |_    ___ ___ ___| |_ ___ ___| |_                 
|  _| | |  _| '_|  |  _| . |   |  _| .'|  _|  _|                
|___|_|_|___|_,_|  |___|___|_|_|_| |__,|___|_|                  
           _                  _                                 
 ___ ___ _| |   ___ ___ ___ _| |   _____ ___                    
| .'|   | . |  |_ -| -_|   | . |  |     | -_|                   
|__,|_|_|___|  |___|___|_|_|___|  |_|_|_|___|                __ 
                                         _         _        |  |
 ___    _____ ___ ___ ___ ___ ___ ___   | |_ ___ _| |___ _ _|  |
| .'|  |     | -_|_ -|_ -| .'| . | -_|  |  _| . | . | .'| | |__|
|__,|  |_|_|_|___|___|___|__,|_  |___|  |_| |___|___|__,|_  |__|
                             |___|                      |___|   

`;



export default App;
