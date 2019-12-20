import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventCalender from './Components/EventCalender';
import MainRoute from './RouteComponents/MainRoute';
import LifeCycleA from './Components/LifeCycleA';
import Main from './Axios Requests/Main';
import EditUserModal from './Axios Requests/EditUserModal';

import { Provider } from 'react-redux'
import store from './Redux/Store'
import UserContainer from './Redux_Components/UserContainer';
import Header from './Dashoboard_Task/Header_Components/Header'
import Home from './RouteComponents/Home';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      {/* <MainRoute/> */}
      {/* <EventCalender/> */}
      {/* <LifeCycleA/> */}
      {/* <Main/> */}

      {/* <Provider store={store}>
        <UserContainer/>
        <PostForm/>
      </Provider> */}

      <Router>
        <Header/>
      </Router>
   
     
  
      
    </div>
  );
}

export default App;