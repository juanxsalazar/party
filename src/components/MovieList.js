import React, { Component } from 'react'
import movieData from '../moviedata.json'

class MovieList extends Component {
    render () {
        return (
            <main> 
                {movieData.results.map((eachMovieDataItem) => {
                    return (
                        <section key={eachMovieDataItem.id}>
                        <h2><u>{eachMovieDataItem.title}</u></h2>
                        <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + eachMovieDataItem.poster_path} alt ={'Poster image of the movie ' + eachMovieDataItem.title} /> 
                        <h3>Release Date: {eachMovieDataItem.release_date.split('-')[1] + " - " + eachMovieDataItem.release_date.split('-')[2] + " - " + eachMovieDataItem.release_date.split('-')[0]}</h3>
                        <h4> Average Voter Rating: {eachMovieDataItem.vote_average}</h4>
                        <p className="width">{eachMovieDataItem.overview}</p>
                        </section>
                    )
                })
            }
            </main>
        )
}
}

export default MovieList