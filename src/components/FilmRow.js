import React from 'react';

import Fave from './Fave';
import FilmPoster from './FilmPoster';

class FilmRow extends React.Component {
    handleDetailsClick = film => {
        console.log(`Printing details for ${film}`)
    }
render() {
    console.log('🔥',this.props.film)
    let posterUrl = `https://image.tmdb.org/t/p/x780/${this.props.film.poster_path}`;
    let year = this.props.film.release_date.substring(0,4);
    return (
        <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
            <FilmPoster alt={this.props.film.title} poster={posterUrl}/>
          
           <div className="film-summary">
               <h1>{this.props.film.title}</h1>
               <p>{year}</p>
           </div>
           <Fave />
        </div>
    )
  }
}
export default FilmRow;