import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export function MovieModal({ addtoFave, favorite, show, onHide, movieid }) {
    const [movieItem, setmovieItem] = useState([]);
    async function getApi(id) {
        await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=5d29f2f2`)
            .then(res => {
                const apiRes = res.data;
                if (apiRes) {
                    setmovieItem(apiRes);
                }
            }).catch((error) => console.log(error));
    };

    useEffect(() => {
        getApi(movieid);
    }, [movieid]);

    function addMovietoFave(id) {
        addtoFave(id);
    }

    function movieExistsinFave() {
        return favorite.find((movie) => movie.imdbID === movieItem.imdbID);
    }
    movieExistsinFave();
    return (
        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3 className='movie__heading'>{movieItem.Title}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="movie__description--container">
                        <figure className='movie__description--poster'>
                            <img src={movieItem.Poster} alt="" className='movieImg modalImg' />
                        </figure>

                        <div className="movie__info--container">
                            <div className="movie__details--info">
                                <div className="movie__description--rated">
                                    {movieItem.Rated}
                                </div>
                                <div className="movie__description--year">
                                    <FontAwesomeIcon icon="fa-regular fa-calendar" className='calendar__icon' />
                                    <div className="movie__description--yearnum">
                                        {movieItem.Year}
                                    </div>
                                </div>
                                <div className="movie__description--rating">
                                    <div className="imdb">IMDb: </div>
                                    <div className="imdbRating">{movieItem.imdbRating}/10</div>
                                </div>
                                <div className="movie__description--runtime">
                                    <FontAwesomeIcon icon="fa-regular fa-clock" className='clock__icon' />
                                    <div className="runtime">{movieItem.Runtime}</div>
                                </div>
                            </div>
                            <div className="movie__description--genre">
                                <h3 className='movie__heading'>Genre</h3>
                                {movieItem.Genre}
                            </div>
                            <div className="movie__description--overview">
                                <h4 className='movie__heading'>Overview</h4>
                                {movieItem.Plot}
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    {
                        movieExistsinFave() ?
                            <Link to="/favorites">
                                <Button >Go to favorites</Button>
                            </Link>
                            :
                            <Button className="add__favorites" onClick={() => addMovietoFave(movieItem)}>Add to favorites</Button>
                    }
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}