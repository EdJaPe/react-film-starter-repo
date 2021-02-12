import React, { Component } from 'react';

import './App.css';
import TMDB from './TMDB';
import FilmDetails from './components/FilmDetails';
import FilmListing from './components/FilmListing';
// import FilmRow from './components/FilmRow';

class App extends React.Component {
  state = {};

  
  render() {
    return (
      <div className="film-library">
        <FilmListing films={TMDB.films}/>
        <FilmDetails details={TMDB.films}/>
        {/* <FilmRow /> */}
        
      </div>

    );
  }
}

export default App;