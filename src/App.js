import React from 'react';
import './App.css';
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;

