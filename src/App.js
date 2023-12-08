import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as  Router, Route,Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import MovieDetails from "./components/moviedetails";
import Navbar from "./components/navbar";


const App = () => {
  
  return (
       
  <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/TheAvengers" component={MovieDetails} /> */}
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes> 
  </Router>
            
  )
};

export default App;


     

{/* <div className=" flex flex-col lg:flex-row items-center">
               
        {/* <input
        className="input rounded-3xl py-2 text-gray-400 lg:w-64
        "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies or TV Shows" onKeyDown={handleKeyPress}
        />
        <img
          src={SearchIcon}
          alt="search"
          className=" h-7"
          onClick={() => searchMovies(searchTerm)} 
        /> */}

      {/* </div>  */}


{/*  */}