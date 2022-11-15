import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [searchVal, setSearchVal] = useState("");
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

    function handleChange(event) {
        setSearchVal(event.target.value)
    }
    return (
        <div className="search__bar">
            <Input type="text"
                className="search__bar--input"
                placeholder='Search by name'
                value={searchVal}
                onChange={handleChange}
                onKeyDown={handleSearch}
            />
            <button className="search__button" onClick={clickSearch} >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search__icon' />
            </button>
        </div>
    )
}

function Input({ value, onKeyDown, onChange }) {
    return (
        <input type="text"
            className="search__bar--input"
            placeholder='Search by name'
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}