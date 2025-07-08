import React, { useState } from 'react'
import MovieCard from '../component/MovieCard'
import "../css/Home.css"

function Home() {
    const movies = [
        {
            id : 1 ,
            title : "Squid Game" ,
            release_date : "27 june "
        },
        {
            id : 2 , 
            title : "All of us are dead" , 
            release_date : " 25 march" 
        },
        {
            id : 3 ,
            title : "Jewel's of section e ",
            release_date : "29 june "
        }
    ]
    
    const handleOnClick = (e)=>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("......")
    }
    const [searchQuery , setSearchQuery ] = useState("") 
  return (
    <div className='home'>
        <form className='search-form'>
            <input type='text' placeholder='Search' className='search-input' value={searchQuery} onChange ={(e)=>{
                setSearchQuery(e.target.value)
            }}/>
            <button onClick={handleOnClick} className='search-button' >Search</button>
        </form>

    <div className='movie-grid'>
        {movies.map((movie)=> 
            movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
            <MovieCard movie={movie} key={movie.id}/>)
        )}
    </div>
    </div>
  )
}

export default Home
