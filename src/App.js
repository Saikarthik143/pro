import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
//import Registration from './components/Registration/Registration';
// Login from './components/Login/Login';
//import Registration from './components/Registration/Registration';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
//import demo from './components/Demo/demo'
import Demo from './components/Demo/demo';
import Registration from './components/Registration/Registration';
import Loan from './components/Loan/Loan';
import Depoist from './components/Depoist/Deposit';
//import { Provider, useDispatch } from 'react-redux';
//import store from './store';


 
function App() {
   
  return (
  
     <BrowserRouter>
    <div className="App">

    <switch>
       <Route path='/'exact={true} component={Login}/>
        <Route path='/Loan' exact={true} component={Loan}/>
        <Route path='/DEMO' exact={true} component={Demo}/>
        <Route path='/Login' exact={true} component={Login}/>
        <Route path='/Depoist' exact={true} component={Depoist}/>
        <Route path='/Registration' exact={true} component={Registration}/>
     </switch>
      </div>
      </BrowserRouter>
   
    
     
  );
}

export default App;
