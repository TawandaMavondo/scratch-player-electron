import React from "react";
interface PlayerProps {
  game?: string;
}
class Player extends React.Component<PlayerProps> {
  constructor(props: PlayerProps | Readonly<PlayerProps>) {
    super(props);
    this.state = {};
  }
  componentDidMount(): void {
    const script = document.createElement("script");
    script.src = "./player.js";
    script.async = true;

    const scripts = document.getElementsByTagName("script");

    let scriptList: HTMLScriptElement[] = Array.from(scripts);

    let found = scriptList.find((element) => element.src === script.src);

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
