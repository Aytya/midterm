import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./HomePage/Home";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Sidebar from "./Sidebar/Sidebar";
import React from "react";

function App() {
    const user = {
        username: 'john_doe',
        email: 'john@example.com',
        bio: 'I am a software developer.',
        profileImage: 'https://example.com/profile-image.jpg',
    };
  return (
    <div className="App">
        <Sidebar></Sidebar>
        <Navbar></Navbar>
      <Routes>
          <Route path = "/home" element = {<Home/>}></Route>
          <Route path = "/profile" element = {<Profile  {...user}/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
