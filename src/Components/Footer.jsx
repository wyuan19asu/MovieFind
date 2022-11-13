import React from 'react'
import footerLogo from '../assets/MovieFindtp.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <Link to="/">
                    <figure className="footer__logo">
                        <img src={footerLogo} alt="" className="footer--img" />
                    </figure>
                </Link>
                <div className="footer__list">
                    <Link to="/" className='footer__link'>
                        Home
                    </Link>
                    <Link to="/findmovies" className='footer__link'>
                        Find Movies
                    </Link>
                    <Link to="/Favorites" className='footer__link'>
                        Favorites
                    </Link>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; 2022 MovieFind
                </div>
            </div>
        </footer>
    )
}
