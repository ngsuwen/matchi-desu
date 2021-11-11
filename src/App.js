import "./App.css";
import Main from "./components/Pages/Main";
import Welcome from "./components/Pages/Welcome";
import { Route, Link, Routes, Navigate } from "react-router-dom"

import './App.css'

function App() {
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
