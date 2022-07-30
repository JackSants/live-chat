import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';

function App() {
  return (
    <div className="app">
      <div class="app__body">
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  );
}

export default App;
