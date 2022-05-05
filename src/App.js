import React,{useState,useEffect,useLayoutEffect} from "react";
import axios from 'axios'
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

import Nav from "./components/Nav";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";



function App() { 
 
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          {/* <Route exact path="/" element={<HomeScreen />} /> */}
          <Route exact path="/" element={<AboutScreen />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );

}
  
 export default App;     