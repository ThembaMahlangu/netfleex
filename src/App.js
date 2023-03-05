import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;


  return (
    <div className='app'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
        <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path='test' element={<h1>Yow hope its working fam</h1>}/>
        </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
