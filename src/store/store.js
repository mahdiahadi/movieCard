 import {configureStore} from '@reduxjs/toolkit'
import { MoviesApi } from '../services/MoviesApi';

 const store=configureStore({
    reducer:{
            [MoviesApi.reducerPath]:MoviesApi.reducer
    }
 })
 export default store;