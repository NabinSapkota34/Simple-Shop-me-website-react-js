import Home from './components/HeroImg';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mens from './components/Heroimg2';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
