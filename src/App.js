import Home from './routes/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Mens from './routes/Mens';
function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route path="/home" element={<Home  />} />
        <Route path="mens" element={<Mens />} />
      </Routes>
        </Router>
    </>
  );
}

export default App;
