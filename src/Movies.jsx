import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import MoviesCard from './MoviesCard'
import searchIcon from './search.svg'
import { useGetMoviesQuery } from './services/MoviesApi'

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState('batman')
    const {data}=useGetMoviesQuery(searchTerm)
    const moviesList=data?.Search;
   
  return (
    <>
        <div className="search">
            <input 
            type="text"
            placeholder="Search for movies"
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img
            src={searchIcon}
           
            alt="search"
            />
        </div>
            {
             moviesList?.length>0 ?(
                
                <div className="container">
                  
                    {
                        moviesList.map((movie)=>(
                          
                                <MoviesCard movie={movie}  />
                 
                        ))
                    }
                </div>
             ):(
                <div className="empty">
                     <h2>No movies found</h2>
                </div>
             )
            }
        
    </>
 

  )
}

export default Movies