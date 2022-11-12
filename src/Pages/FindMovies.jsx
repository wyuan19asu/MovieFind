import React from 'react'
import Nav from '../Components/Nav'
import SearchBar from '../Components/SearchBar'
import bladeRunner from '../assets/bladerunner.jpg'
export default function FindMovies() {
    return (
        <>
            <Nav />
            <div className="find__movies--container">
                <div className="row">
                    <SearchBar />
                    <div className="movies__card--container">
                        <div className="movie__card">
                            <div className="movie__image">
                                <img src={bladeRunner} alt="" className='movieImg' />
                            </div>
                            <div className="movie__info">
                                <div className="movie__title">
                                    Blade Runner 2049
                                </div>
                                <div className="movie__rating">
                                    8.0/10
                                </div>
                            </div>
                        </div>
                        <div className="movie__card">
                            <div className="movie__image">
                                <img src={bladeRunner} alt="" className='movieImg' />
                            </div>
                            <div className="movie__info">
                                <div className="movie__title">
                                    Blade Runner 2049
                                </div>
                                <div className="movie__rating">
                                    8.0/10
                                </div>
                            </div>
                        </div>
                        <div className="movie__card">
                            <div className="movie__image">
                                <img src={bladeRunner} alt="" className='movieImg' />
                            </div>
                            <div className="movie__info">
                                <div className="movie__title">
                                    Blade Runner 2049
                                </div>
                                <div className="movie__rating">
                                    8.0/10
                                </div>
                            </div>
                        </div>
                        <div className="movie__card">
                            <div className="movie__image">
                                <img src={bladeRunner} alt="" className='movieImg' />
                            </div>
                            <div className="movie__info">
                                <div className="movie__title">
                                    Blade Runner 2049
                                </div>
                                <div className="movie__rating">
                                    8.0/10
                                </div>
                            </div>
                        </div>
                        <div className="movie__card">
                            <div className="movie__image">
                                <img src={bladeRunner} alt="" className='movieImg' />
                            </div>
                            <div className="movie__info">
                                <div className="movie__title">
                                    Blade Runner 2049
                                </div>
                                <div className="movie__rating">
                                    8.0/10
                                </div>
                            </div>
                        </div>
                        <div className="movie__card">
                            <div className="movie__image">
                                <img src={bladeRunner} alt="" className='movieImg' />
                            </div>
                            <div className="movie__info">
                                <div className="movie__title">
                                    Blade Runner 2049
                                </div>
                                <div className="movie__rating">
                                    8.0/10
                                </div>
                            </div>
                        </div>
                        <div className="movie__card">
                            <div className="movie__image">
                                <img src={bladeRunner} alt="" className='movieImg' />
                            </div>
                            <div className="movie__info">
                                <div className="movie__title">
                                    Blade Runner 2049
                                </div>
                                <div className="movie__rating">
                                    8.0/10
                                </div>
                            </div>
                        </div>
                        {/* card cutoff */}
                    </div>
                </div>
            </div>
        </>
    )
}
