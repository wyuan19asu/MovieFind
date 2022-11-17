import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FindMovies from "./Pages/FindMovies";
import Home from "./Pages/Home";
import NewFindMovies from "./Pages/NewFindMovies"
import Nav from './Components/Nav';
import Footer from "./Components/Footer";
import Favorites from "./Pages/Favorites";

function App() {
  const [favorite, setFavorite] = useState([]);

  function addtoFave(movie) {
    setFavorite([...favorite, movie])
  }

  function removeFave(item) {
    setFavorite(favorite.filter((movie) => movie.imdbID !== item.imdbID))
  }

  useEffect(() => {
    console.log("app", favorite);
  }, [favorite])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewFindMovies/:term" element={<NewFindMovies addtoFave={addtoFave} favorite={favorite} />} />
          <Route path="/findmovies" element={<FindMovies />} />
          <Route path="/favorites" element={<Favorites favorite={favorite} removeFave={removeFave} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
