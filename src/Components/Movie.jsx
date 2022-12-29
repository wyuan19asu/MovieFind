import React, { useState } from 'react'
import { MovieModal } from './Modal'
import noMovie from '../assets/nc-md.jpg'

export default function Movie({ movieImage, movieTitle, movieID, addtoFave, favorite }) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            < MovieModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                movieid={movieID}
                addtoFave={addtoFave}
                favorite={favorite}
            />
            <figure className="movie__image--wrapper" onClick={() => setModalShow(true)}>
                {
                    movieImage === "N/A" ?
                        <img src={noMovie} alt="" className='movieImg' />
                        :
                        <img src={movieImage} alt="" className='movieImg' />
                }
            </figure>
            <div className="movie__title">
                {movieTitle}
            </div>
        </>

    )
}
