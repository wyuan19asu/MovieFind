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
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewFindMovies/:term" element={<NewFindMovies />} />
          <Route path="/findmovies" element={<FindMovies />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
