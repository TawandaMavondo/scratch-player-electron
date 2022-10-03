import React from "react";
import Player from "./Player";

import Helmet from "react-helmet";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Scratch Player Electron</title>
        </Helmet>
        <h3>Scratch Player </h3>
        <Player />
      </div>
    );
  }
}

export default App;
