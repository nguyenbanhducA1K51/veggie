import React from 'react';
import logo from './logo.svg';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from 'react-router-dom';
import './App.css';
import { Header } from './pages/Header';

function App() {
  return (
    <div className="App">
      <span>gooo</span>
      return <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/details/:id">
             
            </Route>
            <Route path="/login">
              {/* <Login /> */}
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
