import {NavLink, Route, Routes} from 'react-router-dom'
import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Labs from './components/Labs';
import MainHeader from './components/MainHeader';
import NotFound from './components/NotFound';
import Support from './components/Support';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App is running in port:3001</h1>
       <nav>
        <ul>
          <li>
            <NavLink to = "/">Home</NavLink>
          </li> 
          <li>
            <NavLink to = "/support">Support</NavLink>
          </li>
          <li>
            <NavLink to = "/about">About</NavLink>
          </li>
          <li>
            <NavLink to = "/labs">Labs</NavLink>
          </li>       
        </ul>
      </nav> 

      <Routes>
        <Route path = "/" element = {<MainHeader/>}>
          <Route index element = {<Home/>} />
          <Route path = "/support" element = {<Support/>} />
          <Route path = "/labs" element = {<Labs />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "*" element = {<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
