import React from 'react';
import { Route, Routes,Switch } from 'react-router-dom';
import './App.css'
import MovieDetails from './MovieDetails';
import Movies from './Movies';

const App = () => {
  return (
    <div className='app'>
        <h1>MovieLand</h1>
        <Switch>
          <Route exact path='/'>
            <Movies/>
         </Route>
         <Route exact path={'/movieDetails/:id'}>
            <MovieDetails/>
         </Route>
        </Switch>
       
       

    </div>
  )
}

export default App