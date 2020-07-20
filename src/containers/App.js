import React from 'react';
import './App.css';
import Sidebar from "../components/Sidebar.js";
import Main from "../components/Main.js";
import store from "../store";
import _ from 'lodash';

const App = () => {
  const { contacts } = store.getState().contacts;
  
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;

