
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeskTop_1 from './pages/DeskTop_1';
import DeskTop_2 from './pages/DesKTop_2';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeskTop_1 />} />
        <Route path="/page2" element={<DeskTop_2 />} />
      </Routes>
    </Router>
  );
}

export default App;