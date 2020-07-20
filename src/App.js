import React from 'react';
import './App.css';
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import store from "./store";

const App = () => {
  const { contacts } = store.getState();
  
  return (
    <div className="App">
      <Sidebar contacts={contacts} />
      <Main />
    </div>
  );
};

export default App;

