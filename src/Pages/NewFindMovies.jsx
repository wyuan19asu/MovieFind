import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import SearchBar from '../Components/SearchBar';
import Movie from '../Components/Movie';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function NewFindMovies() {
    const { term } = useParams();
    const [movieList, setMovieList] = useState([]);
    const [searchVal, setSearchVal] = useState("");

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
            <Nav />
            <div className="find__movies--container">
                <div className="row">
                    <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
                    <div className="movies__card--container">
                        {
                            movieList.map((movie) =>
                                <Movie movieImage={movie.Poster} movieTitle={movie.Title} key={movie.imdbID} />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
