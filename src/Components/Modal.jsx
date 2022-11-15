import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function MovieModal(props) {
    const [movieItem, setmovieItem] = useState([]);
    let movSearchID = props.movieid;

    async function getApi(id) {
        await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=5d29f2f2`)
            .then(res => {
                const apiRes = res.data;
                if (apiRes) {
                    console.log(apiRes);
                    setmovieItem(apiRes);
                }
            })
    };

    useEffect(() => {
        getApi(movSearchID);
    }, [movSearchID]);

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {movieItem.Title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="movie__description--container">
                        <figure className='movie__description--poster'>
                            <img src={movieItem.Poster} alt="" className='movieImg' />
                        </figure>

                        <div className="movie__info--container">
                            <div className="movie__details--info">
                                <div className="movie__description--year">

                                    <FontAwesomeIcon icon="fa-regular fa-calendar" className='calendar__icon' />
                                    <div className="movie__description--yearnum">
                                        {movieItem.Year}

                                    </div>
                                </div>
                                <div className="movie__description--rated">
                                    {movieItem.Rated}
                                </div>
                                <div className="movie__description--rating">
                                    <div className="imdb">IMDb: </div>
                                    <div className="imdbRating">{movieItem.imdbRating}/10</div>
                                </div>
                            </div>
                            <div className="movie__description--genre">
                                <h5>Genre</h5>
                                {movieItem.Genre}
                            </div>
                            <div className="movie__description--overview">
                                <h4>Overview</h4>
                                {movieItem.Plot}
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}