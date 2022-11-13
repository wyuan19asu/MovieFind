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

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewFindMovies/:term" element={<NewFindMovies />}></Route>
          <Route path="/findmovies/" element={<FindMovies />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
