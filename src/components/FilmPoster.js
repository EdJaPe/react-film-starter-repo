import React from 'react'

const FilmPoster = props =>{
        // console.log('🔥',this.props.poster)
        return(
            <div>
                <img src={props.poster} alt={props.alt}/>
            </div>
        )
}

export default FilmPoster