import React from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../assets/MovieFind.png'

export default function Nav() {
    return (
        <div className='nav__bar'>
            <div className="nav__bar--items">
                <figure className="nav__logo">
                    <img src={navLogo} alt="" className="nav__logo--img" />
                </figure>

                <ul className="nav__link--items">
                    <li className="nav__link--item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav__link--item">
                        Find Movies
                    </li>
                    <li className="nav__link--item">
                        Contact
                    </li>
                </ul>

            </div>
        </div>
    )
}
