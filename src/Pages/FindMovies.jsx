import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import noMovies from "../assets/undraw_void_-3-ggu.svg"
// import Movie from '../Components/Movie';
// import axios from 'axios';

export default function FindMovies() {
    const [searchVal, setSearchVal] = useState("");
    return (
        <>
            <section id="find__movies">
                <div className="find__movies--container">
                    <div className="rows">
                        <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
                        <figure className="no__movies--container">
                            <img src={noMovies} alt="" className="no__movies--img" />
                            <figcaption className='no__movies--caption'>No movies found! Please search for a Movie</figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}
