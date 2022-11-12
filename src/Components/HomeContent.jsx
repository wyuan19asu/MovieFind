import React from 'react'
import homeImg from '../assets/undraw_home_cinema_l7yl.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomeContent() {
    return (
        <div className="home__container">
            <h1 className="home__title">
                All the movies you want <span className="purple">HERE!</span>
            </h1>
            <h2 className="home__subtitle">
                Find your movies with <span className="purple">MovieFind</span>
            </h2>
            <div className="search__bar">
                <input type="text" className="search__bar--input" />
                <button className="search__button">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search__icon' />
                </button>
            </div>
            <figure className="home__image--container">
                <img src={homeImg} alt="" className="home__image" />
            </figure>
        </div>
    )
}
