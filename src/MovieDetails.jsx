import React from 'react'
import './MovieDetails.scss'
import { useParams } from 'react-router-dom'
import { useGetMovieDetailsQuery } from './services/MoviesApi';

const MovieDetails = () => {
    const {id}=useParams();
    const {data:movieDetails}=useGetMovieDetailsQuery(id)
    console.log(movieDetails)
  return (
   
        <article className="card">
  <div className="card__image">
    <img src={movieDetails?.Poster} style={{width:"100%"}} alt="" />
  </div>
  <div className="card__player">
    <div id="player"></div>
  </div>
  <div className="card__info">
    <h2 className="title">{movieDetails?.Title}</h2>
    <p className="genre">{movieDetails?.Actors}</p>
    
    <div className="desc">
     
      <div className="rating">
         <p className="meta">{movieDetails?.Type} <span>/</span> {movieDetails?.Runtime}</p>
        <div className="stars">
          <i className="material-icons">Imdb Rating:{movieDetails?.imdbRating}</i>

          <i className="material-icons"> <span>/</span> Published Year:{movieDetails?.Year}</i>
          </div>
      </div>
      <p>{movieDetails?.Plot}</p>
    </div>
     <a className="button" href="#">&#9658; Watch Now</a>
  </div>
</article>
 
  )
}

export default MovieDetails