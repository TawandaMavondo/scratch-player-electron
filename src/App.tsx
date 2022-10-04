import React from "react";
import Player from "./Player";
import Helmet from "react-helmet";
import GamePage from "./GamePage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Scratch Player Electron</title>
        </Helmet>
        {/* <h3>Scratch Player </h3> */}
        {/* <Player game="gb.sb3" /> */}

        <GamePage />
      </div>
    );
  }
}

export default App;
