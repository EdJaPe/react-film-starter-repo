import React, { Component } from 'react';
import FilmRow from './FilmRow'
class FilmListing extends Component {

  state = {
    filter: 'all'
  }

  handleFilterClick = filter => {
    console.log(`Setting filter to ${filter} `)
    this.setState({
      filter: filter
    })
  }

  render() {  
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filter">
          <div className={`film-list-filter ${this.state.filter === 'all'} ? 'is-active' :''}`} 
          onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves'} ? 'is-active' :''}`}
            onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>        
        </div>
        {this.props.films.map((film, i) => (
          <FilmRow film={film} key={`filmKey-${i}`}/>
        ))}
      </div>
    );
  }
}

export default FilmListing;