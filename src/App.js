import React from "react";
import Header from "./Header/Header";
import PawPalCards from "./PawPalCards/PawPalCards";
import SwipeButtons from "./SwipeButtons/SwipeButtons";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Chats from "./Chats/Chats";
import ChatScreen from "./Chats/Chat/ChatScreen/ChatScreen";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:dog">
          <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
          <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
          <Header />
            <PawPalCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
