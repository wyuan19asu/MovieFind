import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FindMovies from "./Pages/FindMovies";
import Home from "./Pages/Home";
import Nav from './Components/Nav';
import Footer from "./Components/Footer";
import Favorites from "./Pages/Favorites";

function App() {
  const [favorite, setFavorite] = useState([]);
  console.log("favorite appjs", favorite);
  function saveToLocal(items) {
    localStorage.setItem('favorite-movies', JSON.stringify(items))
  }

  function addtoFave(movie) {
    const addedToFaves = [...favorite, movie];
    setFavorite(addedToFaves);
    saveToLocal(addedToFaves);
  }

  function removeFave(item) {
    const faves = favorite.filter((movie) => movie.imdbID !== item.imdbID)
    setFavorite(faves);
    saveToLocal(faves);
  }

  // useEffect(() => {
  //   // console.log("app", favorite);
  // }, [favorite]);

  useEffect(() => {
    const favoriteMovie = JSON.parse(localStorage.getItem('favorite-movies'));
    setFavorite(favoriteMovie);
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findmovies/" element={<FindMovies addtoFave={addtoFave} favorite={favorite} />} />
          <Route path="/findmovies/:term" element={<FindMovies addtoFave={addtoFave} favorite={favorite} />} />
          <Route path="/favorites" element={<Favorites favorite={favorite} removeFave={removeFave} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
