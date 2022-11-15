import React, { useState } from 'react'
import { MovieModal } from './Modal'
import noMovie from '../assets/nc-md.jpg'

export default function Movie({ movieImage, movieTitle, movieID }) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            < MovieModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                movieid={movieID}
            />
            <div className="movie__image" onClick={() => setModalShow(true)}>
                {
                    movieImage === "N/A" ?
                        <img src={noMovie} alt="" className='movieImg' />
                        :
                        <img src={movieImage} alt="" className='movieImg' />
                }
            </div>
            <div className="movie__title">
                {movieTitle}
            </div>
        </>

    )
}
