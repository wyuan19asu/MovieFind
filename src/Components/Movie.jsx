import React, { useState } from 'react'

export default function Movie({ movieImage, movieTitle }) {
    const [availMovies, setAvailMovies] = useState(true);
    return (
        <>
            {
                !availMovies ? "here" : <div className="movie__card">
                    <div className="movie__image">
                        <img src={movieImage} alt="" className='movieImg' />
                    </div>

                    <div className="movie__title">
                        {movieTitle}
                    </div>
                    {/* <div className="movie__rating">
                            IMDb: {movieRating}/10
                        </div> */}

                </div>
            }
        </>
    )
}
