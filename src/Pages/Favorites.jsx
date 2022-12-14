import React from 'react'
import noFaves from '../assets/undraw_blank_canvas_re_2hwy.svg'

export default function Favorites({ favorite, removeFave }) {
    return (
        <section id='favorites__container'>
            <div className="rows">
                <div className="favorites__movie--container">
                    {
                        favorite.length > 0 ?
                            favorite.map((movie) =>
                                <div className="favorite__movie--card" key={movie.imdbID}>
                                    <figure className='movie__description--poster'>
                                        <img src={movie.Poster} alt="" className='movieImg favoriteImg' />
                                    </figure>
                                    <button className="removeMovie" onClick={() => removeFave(movie)}>Remove</button>
                                </div>)
                            :
                            (<figure className="no__faves--container">
                                <img src={noFaves} alt="" className="no__faves--img" />
                                <figcaption className='no__faves--caption'>No favorites here!</figcaption>
                            </figure>
                            )
                    }
                </div>
            </div>
        </section>
    )
}
