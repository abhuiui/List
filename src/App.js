// import logo from './logo.svg';
import './App.css';
import Contact from './Component/Contact';
import Home from './Component/Home';
import About from './Component/About';
import Users from './Component/Users';
import Students from './Component/Students';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './Component/Navbar'




function App() {
  return (
    <div className="App">
      <Router>
<Navbar/>
<Routes>
  <Route path='/Home' element={<Home/>} ></Route>
  <Route path='/About' element={<About/>} ></Route>
  <Route path='/Contact' element={<Contact/>} ></Route>
  <Route path='/Users' element={<Users/>} ></Route>
  <Route path='/Students' element={<Students/>} ></Route>



</Routes>
      </Router>
     

    </div>
  );
}

export default App;
