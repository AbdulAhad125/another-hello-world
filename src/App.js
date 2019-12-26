import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
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
import ClassHeader from './Dashboard_Task/Header/Header';
import FunctionalHeader from './Dashboard_Functional_Task/Header/Header'
import HooksCounter from './Hooks/HooksCounter'
import HooksCounter2 from './Hooks/HooksCounter2';
import HooksCounterObject from './Hooks/HooksCounterObject';
import HooksCounterArray from './Hooks/HooksCounterArray';
import UseEffect1 from './Hooks/UseEffect1';
import UseEffect2 from './Hooks/UseEffect2';
import FuncMain from './Func_Axios_Requests/FuncMain';


function App() {


  return (

    <div className="App">
      <Router><MainRoute/></Router>
     
      {/* <EventCalender/> */}
      {/* <LifeCycleA/> */}
      {/* <Main/> */}

      {/* <Provider store={store}>
        <UserContainer/>
        <PostForm/>
      </Provider> */}
      {/* <Router><ClassHeader /></Router> */}
      {/* <Router><FunctionalHeader/></Router> */}

      {/* <HooksCounter/> */}
      {/* <HooksCounter2/> */}
      {/* <HooksCounterObject/> */}
      {/* <HooksCounterArray/> */}
      {/* <UseEffect1/>
      <UseEffect2/> */}
      {/* <FuncMain/> */}

    </div>
  );
}

export default App;
