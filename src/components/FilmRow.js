import React from 'react';

import Fave from './Fave';
import FilmPoster from './FilmPoster';

const FilmRow = props => {


    let handleDetailsClick = film => {
        console.log(`Printing details for ${film}`)
    }    
    let posterUrl = `https://image.tmdb.org/t/p/w780${props.film.poster_path}`;
    let year = props.film.release_date.substring(0,4);
    return (
        <div className="film-row" onClick={() => handleDetailsClick(props.film.title)}>
            <FilmPoster alt={props.film.title} poster={posterUrl}/>
          
           <div className="film-summary">
               <h1>{props.film.title}</h1>
               <p>{year}</p>
           </div>
           <Fave />
        </div>
    )
}

export default FilmRow;