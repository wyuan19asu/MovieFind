import React from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../assets/MovieFind.png'

export default function Nav() {
    return (
        <div className='nav__bar'>
            <figure className="nav__logo">
                <img src={navLogo} alt="" className="nav__logo--img" />
            </figure>

            <ul className="nav__link--items">
                <li className="nav__link--item">
                    <Link to="/" className='nav__link nav__link-hover'>
                        Home
                    </Link>
                </li>
                <li className="nav__link--item">
                    <Link to="/findmovies" className='nav__link nav__link-hover'>
                        Find Movies
                    </Link>
                </li>
                <li className="nav__link--item">
                    <a href="mailto:yuanweicheng1@gmail.com" className="nav__link--item-primary">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}
