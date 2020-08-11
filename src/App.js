import React from 'react';
import Header from './Header/Header';
import PawPalCards from './PawPalCards/PawPalCards';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chat page</h1>
          </Route>
          <Route path="/">
            <PawPalCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
