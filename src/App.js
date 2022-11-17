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
