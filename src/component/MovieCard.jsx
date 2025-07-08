import React from 'react'
import "../css/MovieCard.css"

function MovieCard({movie}) {
    const  onFavoriteClick = () =>{
        alert("Clicked")
    }
  return (
    <div className='movie-card' >

        <div className='movie-info'>
            <h3>{movie.title}</h3>
            <p> {movie.release_date} </p>
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={onFavoriteClick}> 🤍 </button>
            </div>
        </div>
        <div className='movie-poster'>
            <img src={movie.posterURL || movie.poster || 'https://via.placeholder.com/300x450?text=No+Image'} alt={movie.title}/>
            

        </div>
        
      
    </div>
  )
}

export default MovieCard