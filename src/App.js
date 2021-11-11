import React, { useState } from 'react';
import "./App.css";
import Main from "./components/Pages/Main";
import Welcome from "./components/Pages/Welcome";
import { Route, Routes } from "react-router-dom"

import './App.css'

function App() {
  const [chat, setChat]=useState([])
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
