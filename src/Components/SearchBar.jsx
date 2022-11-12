import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SearchBar() {
    return (
        <div className="search__bar">
            <input type="text" className="search__bar--input" placeholder='Search by name' />
            <button className="search__button">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search__icon' />
            </button>
        </div>
    )
}
