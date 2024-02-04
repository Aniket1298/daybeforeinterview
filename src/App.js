import { Routes, Route } from 'react-router-dom';
import './App.css';
import Tracks from './components/tracks';
import Backend from './components/backend';

function App() {
  return(
  <>
       <Routes>
          <Route path="/" element={<Tracks />} />
          <Route path="/backend" element={<Backend />} />
       </Routes>
    </>
  )
}

export default App;
