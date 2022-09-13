import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl=`http://www.omdbapi.com`

const createRequest=(url)=>(url)

export const MoviesApi=createApi({
    reducerPath:"MoviesApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getMovies:builder.query({
            query:(searchTerm)=>createRequest(`/?apikey=d0830af9&s=${searchTerm}`)
        }),
        getMovieDetails:builder.query({
            query:(id)=>createRequest(`/?apikey=d0830af9&i=${id}`)
        })
    })
})

export const {
    useGetMoviesQuery,
    useGetMovieDetailsQuery
}=MoviesApi