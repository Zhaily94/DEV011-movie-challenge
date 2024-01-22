import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* Definición de rutas con Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
