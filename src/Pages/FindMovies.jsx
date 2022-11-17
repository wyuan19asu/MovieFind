import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import Movie from '../Components/Movie';
import axios from 'axios';
import noMovies from "../assets/undraw_void_-3-ggu.svg"
import { useParams } from 'react-router-dom';

export default function FindMovies({ addtoFave, favorite, searchVal }) {
    const { term } = useParams();
    const [movieList, setMovieList] = useState([]);

    async function getApi(term) {
        await axios.get(`http://www.omdbapi.com/?s=${term}&apikey=5d29f2f2`)
            .then(res => {
                const apiRes = res.data.Search;
                if (apiRes) {
                    setMovieList(apiRes);
                }
            }).catch((error) => console.log(error));
    };

    useEffect(() => {
        getApi(term);
    }, [term]);

    return (
        <>
            {
                term === undefined || term === "" ?
                    <section id="find__movies">
                        <div className="find__movies--container">
                            <div className="rows">
                                <SearchBar searchVal={searchVal} />
                                <figure className="no__movies--container">
                                    <img src={noMovies} alt="" className="no__movies--img" />
                                    <figcaption className='no__movies--caption'>No movies found! Please search for a Movie</figcaption>
                                </figure>
                            </div>
                        </div>
                    </section>
                    :
                    <section id="find__movies">
                        <div className="find__movies--container">
                            <div className="rows">
                                <SearchBar searchVal={searchVal} />
                                <div className="movies__card--container">
                                    {
                                        movieList.map((movie) =>
                                            <div className="movie__card" key={movie.imdbID}>
                                                <Movie
                                                    movieImage={movie.Poster}
                                                    movieID={movie.imdbID}
                                                    movieTitle={movie.Title}
                                                    addtoFave={addtoFave}
                                                    favorite={favorite} />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    )
}
