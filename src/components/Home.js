import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "../search.svg";
import "../App.css";
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);

    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  const toggleActive = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
       
    <>
    <head>
      <title>IMDB</title>
    </head>
    <body className=" bg-white">
    <div className=" flex flex-col gap-40 ">
    
    <nav class="bg-white p-3 px-7 shadow-md">
      <div class="container mx-auto px-6 flex justify-between items-center">
        <div>
        
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" class="h-8" alt="Logo"/>
         </div>
        <div class="hidden md:flex md:items-center md:mx-4 ">
          <input value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies or TV Shows" onKeyDown={handleKeyPress} class="   w-[50rem] md:w-[26rem] lg:w-[45rem] bg-gray-100 rounded-full border border-gray-200 px-4 py-2 focus:outline-none"/>
          <img
          src={SearchIcon}
          alt="search"
          className=" bg-yellow-400 text-gray-800  rounded-full cursor-pointer p-1 ml-4 h-8"
          onClick={() => searchMovies(searchTerm)} 
        />
        </div>

        
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class=" xl:hidden lg:hidden h-6 w-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <a href="/login">
          <button class=" hidden lg:block xl:block  font-semibold bg-yellow-400 text-gray-800 p-3 px-5 bg-gray-200 rounded-full">
            SignIn
          </button>
          </a>
        </div>
      </div>
    </nav>

    
    </div>

    <div className=" flex flex-col items-center">
    {movies?.length > 0 ? (

          <><div class=" md:hidden pt-10 lg:hidden xl:hidden  md:flex md:flex-row md:items-center md:mx-4 ">
            <input value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for movies or TV Shows" onKeyDown={handleKeyPress} class="   w-[50rem] md:w-[46rem] lg:w-[45rem] bg-gray-100 rounded-full border border-gray-200 px-4 py-2 focus:outline-none" />
          </div><div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 bg-white pt-14  p-5 px-15 xl:mx-20 ">


              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div></>
    
   ) : (
   <div className="empty">
     <h2>No movies found</h2>
   </div>
   )}

</div>

    <Routes>
      <Route path="/signin" element={<signin />} />

    </Routes>
   </body>

      </>
   
    

    
            
  );
};

export default Home;