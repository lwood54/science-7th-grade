import React, { Component } from "react";
import MainContent from "./components/MainContent/MainContent";
import NavItems from "./components/Navigation/NavItems/NavItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavItems />
        <MainContent />
      </div>
    );
  }
}

export default App;
