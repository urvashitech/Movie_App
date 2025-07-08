import React, { useEffect, useState } from 'react'
import MovieCard from '../component/MovieCard'
import "../css/Home.css"
import { getPopularMovie } from '../services/api'

function Home() {
    const [searchQuery , setSearchQuery ] = useState("") 
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(true)
    const [movies , setMovies] = useState([])

    useEffect(()=>{

        const loadingPopular = async()=>{
            try {
                
                const popularMovies = await getPopularMovie()
                setMovies(popularMovies)
            } catch (error) {
                console.log(error)
                setError("failed to load movies....")
                
            }
            finally{
                SetLoading(false)
            }
        }
        loadingPopular();
    },[])
    const handleOnClick = async (e) => {
  e.preventDefault();

  
  if (!searchQuery.trim()) return;

 
  if (loading) return;

  setLoading(true);
  try {
    const searchResults = await searchMovies(searchQuery);
    setMovies(searchResults);
    setError(null); 
  } catch (err) {
    console.error("Search error:", err);
    setError("Failed to search movies...");
  } finally {
    setLoading(false);
  }
};

    
    
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
