import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import SearchBar from '../Components/SearchBar';
import Movie from '../Components/Movie';
import axios from 'axios';

export default function FindMovies() {
    const [movie, setData] = useState([]);
    async function getApi() {
        await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=5d29f2f2")
            .then(res => {
                const apiRes = res.data;
                setData(apiRes);
            })
    };
    useEffect(() => {
        getApi();
    }, []);
    return (
        <>
            <Nav />
            <div className="find__movies--container">
                <div className="row">
                    <SearchBar />
                    <div className="movies__card--container">
                        <Movie movieImage={movie.Poster} movieTitle={movie.Title} movieRating={movie.imdbRating} />
                        {/* card cutoff */}
                    </div>
                </div>
            </div>
        </>
    )
}
