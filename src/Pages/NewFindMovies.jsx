import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import Movie from '../Components/Movie';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function NewFindMovies({ searchVal }) {
    const { term } = useParams();
    const [movieList, setMovieList] = useState([]);

    async function getApi(term) {
        await axios.get(`http://www.omdbapi.com/?s=${term}&apikey=5d29f2f2`)
            .then(res => {
                const apiRes = res.data.Search;
                if (apiRes) {
                    setMovieList(apiRes);
                }
            })
    };

    useEffect(() => {
        getApi(term);
    }, [term]);

    return (
        <>
            <section id="find__movies">
                <div className="find__movies--container">
                    <div className="rows">
                        <SearchBar searchVal={searchVal} />
                        <div className="movies__card--container">
                            {
                                movieList.map((movie) =>
                                    <div className="movie__card" key={movie.imdbID}>
                                        <Movie movieImage={movie.Poster} movieID={movie.imdbID} movieTitle={movie.Title} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
