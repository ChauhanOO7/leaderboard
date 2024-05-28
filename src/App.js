import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Leaderboard from './components/leaderboard';
import Newpage from './components/newpage';

function App() {
  return (
    <>
      <Router> 

        <Routes>

          <Route exact path='/' element={<Leaderboard/>}></Route>
          <Route exact path='/newpage' element={<Newpage/>}></Route>

        </Routes>
      </Router>
    
    </>
  );
}

export default App;
