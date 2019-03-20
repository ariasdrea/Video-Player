import React, { Component } from "react";
import "./App.css";
import ReactPlayer from "react-player";

class App extends Component {
  render() {
    return (
      <section className="container">
        <div className="player-div">
          <ReactPlayer
            className="player"
            url="https://www.youtube.com/watch?v=VFfKPZhY16Q"
            controls
            width="50%"
            height="50%"
          />
          <ReactPlayer
            className="player"
            url="https://www.youtube.com/watch?v=ZTGIzeye-xw"
            controls
            width="50%"
            height="50%"
          />
          <ReactPlayer
            className="player"
            url="https://www.youtube.com/watch?v=30jrmzzgHLc"
            controls
            width="50%"
            height="50%"
          />
          <ReactPlayer
            className="player"
            url="https://www.youtube.com/watch?v=3k-pMMW01yw"
            controls
            width="50%"
            height="50%"
          />
        </div>
      </section>
    );
  }
}

export default App;
