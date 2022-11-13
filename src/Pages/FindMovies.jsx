import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav';
import SearchBar from '../Components/SearchBar';
import noMovies from "../assets/undraw_void_-3-ggu.svg"
// import Movie from '../Components/Movie';
// import axios from 'axios';

export default function FindMovies() {
    // const [movieList, setMovieList] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    // console.log(movieList);
    // async function getApi(searchVal) {
    //     await axios.get(`http://www.omdbapi.com/?s=${searchVal}&apikey=5d29f2f2`)
    //         .then(res => {
    //             const apiRes = res.data.Search;
    //             if (apiRes) {
    //                 setMovieList(apiRes);
    //             }
    //         })
    // };

    // useEffect(() => {
    //     getApi(searchVal);
    // }, []);

    return (
        <>
            <Nav />
            <div className="find__movies--container">
                <div className="row">
                    <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />

                    <figure className="no__movies--container">
                        <img src={noMovies} alt="" className="no__movies--img" />
                        <figcaption className='no__movies--caption'>No movies found! Please search for a Movie</figcaption>
                    </figure>
                    {/* <div className="movies__card--container">
                        {
                            movieList.map((movie) =>
                                <Movie movieImage={movie.Poster} movieTitle={movie.Title} key={movie.imdbID} />
                            )
                        }
                    </div> */}
                </div>
            </div>
        </>
    )
}
