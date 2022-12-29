import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../assets/MovieFindtp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
    function openMenu() {
        document.body.classList += " menu--open";
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");

    }
    return (
        <nav>
            <div className='nav__bar'>
                <Link to="/" className='nav__link nav__link-hover'>
                    <figure className="nav__logo">
                        <img src={navLogo} alt="" className="nav__logo--img" />
                    </figure>
                </Link>
                <ul className="nav__list">
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
                        <Link to="/favorites" className='nav__link nav__link-hover'>
                            Favorites
                        </Link>
                    </li>
                </ul>
                <button className="btn__menu" onClick={openMenu}>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </button>
            </div>
            <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
                </button>
                <ul className="menu__links">
                    <li className="menu__list">
                        <Link to="/" className='menu__link'>Home</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/findmovies" className='menu__link'>Find Movies</Link>
                    </li>
                    <li className="menu__list">
                        <Link to="/favorites" className='menu__link'>Favorites</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
