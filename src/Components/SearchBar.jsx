import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ searchVal, setSearchVal }) {
    let navigate = useNavigate();

    function clickSearch() {
        if (searchVal !== "") {
            navigate(`/NewFindMovies/${searchVal}`);
        }
    }

    function handleSearch(event) {
        if (event.key === "Enter" && searchVal !== "") {
            navigate(`/NewFindMovies/${searchVal}`);
        }
    }

    return (
        <div className="search__bar">
            <input type="text"
                className="search__bar--input"
                placeholder='Search by name'
                value={searchVal}
                onChange={(event) => setSearchVal(event.target.value)}
                onKeyDown={(event) => handleSearch(event)}
            />
            <button className="search__button" onClick={clickSearch} >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search__icon' />
            </button>
        </div>
    )
}
