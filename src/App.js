import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import NavItems from "./components/Navigation/NavItems/NavItems";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>7th Grade Science</h1>
        <NavItems />
        <Button variant="raised" color="primary">
          First Button
        </Button>
      </div>
    );
  }
}

export default App;
