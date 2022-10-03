import React from "react";

class Player extends React.Component {
  componentDidMount(): void {
    const script = document.createElement("script");
    script.src = "./player.js";
    script.async = true;

    const scripts = document.getElementsByTagName("script");

    let found: boolean = false;
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src === script.src) {
        found = true;
      }
    }

    if (!found) document.body.appendChild(script);
  }

  render(): React.ReactNode {
    return (
      <>
        <div className="area" id="player-area"></div>
      </>
    );
  }
}

export default Player;
