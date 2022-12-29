import React from 'react'
import homeImg from '../assets/undraw_home_cinema_l7yl.svg'
import SearchBar from './SearchBar'

export default function HomeContent({ searchVal }) {
    return (
        <section id="home">
            <div className="home__container">
                <div className="row">
                    <div className="landing__container">
                        <h1 className="home__title">
                            All the movies you want <span className="purple">HERE!</span>
                        </h1>
                        <h2 className="home__subtitle">
                            Find your movies with <span className="purple">MovieFind</span>
                        </h2>
                        <SearchBar searchVal={searchVal} />
                        <figure className="home__image--container">
                            <img src={homeImg} alt="" className="home__image" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
