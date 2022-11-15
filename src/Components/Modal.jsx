import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


export function MovieModal(props) {
    const [movieItem, setmovieItem] = useState([]);
    let movSearchID = props.movieid;

    async function getApi(id) {
        await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=5d29f2f2`)
            .then(res => {
                const apiRes = res.data;
                if (apiRes) {
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
                        <figure>
                            <img src={movieItem.Poster} alt="" />
                        </figure>

                        Year:{movieItem.Year}
                        Rated: {movieItem.Rated}
                        IMDb Rating: {movieItem.imdbRating}/10
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}