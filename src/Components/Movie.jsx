import React from 'react'

export default function Movie({ movieImage, movieTitle, movieRating }) {
    return (
        <div className="movie__card">
            <div className="movie__image">
                <img src={movieImage} alt="" className='movieImg' />
            </div>
            <div className="movie__info">
                <div className="movie__title">
                    {movieTitle}
                </div>
                <div className="movie__rating">
                    {movieRating}/10
                </div>
            </div>
        </div>
    )
}
