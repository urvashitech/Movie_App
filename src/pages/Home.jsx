import React from 'react'
import MovieCard from '../component/MovieCard'

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
    const onSearch = (e)=>{
        console.log(e.targate.value)
    }
  return (
    <div className='home'>
        <form>
            <input type='text' placeholder='Search'/>
            <button onClick={onSearch}>Search</button>
        </form>

    <div className='movie-grid'>
        {movies.map((movie)=> (
            <MovieCard movie={movie} key={movie.id}/>
        ))}
    </div>
    </div>
  )
}

export default Home
