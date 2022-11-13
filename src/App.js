import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import FindMovies from "./Pages/FindMovies";
import Home from "./Pages/Home";
import NewFindMovies from "./Pages/NewFindMovies"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewFindMovies/:term" element={<NewFindMovies />}></Route>
          <Route path="/findmovies/" element={<FindMovies />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
