import React from 'react';
import "../App.css";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <a href="jaadoo">
    <div className=" shadow shadow-lg movie-card relative group cursor-pointer overflow-hidden transition-transform transform scale-100 hover:scale-110">
      <div className="relative">
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
          className="movie-img mb-1"
          loading='lazy'
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <span className='text-sm text-gray-300'>Movie</span>
            <h3 className='tit mt-1'>{Title}</h3>
            <h2 className='text-sm mt-1'>&#9733; 2.4</h2> 
          </div>
        </div>
      </div>
    </div>
    </a>
)
  }



export default MovieCard