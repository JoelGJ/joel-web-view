import logo from './logo.svg';
import './App.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainScreen from './screens/MainScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
