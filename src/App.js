import { Route,BrowserRouter as Router,Routes} from "react-router-dom";
import {Landing,Game} from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </Router>
  );
}

export default App;
