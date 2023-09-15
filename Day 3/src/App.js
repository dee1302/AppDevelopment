// App.js
import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from '../src/Components/Pages/Login';
import Signup from '../src/Components/Pages/SignUp';

function App() {
  return (
    
      <div>
       <BrowserRouter>
       <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
