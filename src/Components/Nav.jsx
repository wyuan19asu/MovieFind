import React from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../assets/MovieFindtp.png'

export default function Nav() {
    return (
        <nav>
            <div className='nav__bar'>
                <Link to="/" className='nav__link nav__link-hover'>
                    <figure className="nav__logo">
                        <img src={navLogo} alt="" className="nav__logo--img" />
                    </figure>
                </Link>
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
        </nav>
    )
}
