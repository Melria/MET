import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import { Home } from './Components/home';
import { BodyDetails } from "./Components/bodyDetails";
import './App.css'



const App =()=> {
  return (
    <Router>
        <Routes>
            <Route path ="/" element={ <Home /> } />
            <Route path ="/details" element={ <BodyDetails />} />
        </Routes>
    </Router>
  )
}


export default App
