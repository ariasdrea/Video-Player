import React, { Component } from "react";
import ReactPlayer from "react-player";
import Tooltip from "@material-ui/core/Tooltip";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [
        {
          id: 0,
          title: "Metatron",
          duration: 0,
          url: "https://www.youtube.com/watch?v=VFfKPZhY16Q",
          img: "img.png",
          hotspot: "music starts"
        },
        {
          id: 1,
          title: "People",
          duration: 0,
          url: "https://www.youtube.com/watch?v=ZTGIzeye-xw",
          img: "img.png"
        },
        {
          id: 2,
          title: "Nightcall",
          duration: 0,
          url: "https://www.youtube.com/watch?v=30jrmzzgHLc"
        },
        {
          id: 3,
          title: "Gold",
          duration: 0,
          url: "https://www.youtube.com/watch?v=hi4pzKvuEQM"
        }
      ]
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onPlay = this.onPlay.bind(this);
  }

  onMouseEnter(e) {
    console.log("mouseenter works");
    console.log("e.currentTarget", e.currentTarget);
  }

  onPlay(e) {
    console.log("onPlay");
    console.log("e on onPlay:", e);
  }

  onProgress = val => {
    // console.log("onProgress", val);
    if (val.playedSeconds > 17 && val.playedSeconds < 18) {
      console.log("music starts");
    }
  };

  onDuration = duration => {
    console.log("onDuration", duration);
  };

  render() {
    return (
      <section className="container">
        <div className="player-div">
          {this.state.videos.map(each => {
            return (
              <ReactPlayer
                id={each.id}
                className="player"
                url={each.url}
                controls
                height="50%"
                width="50%"
                onPlay={this.onPlay}
                onProgress={this.onProgress}
                onMouseEnter={this.onMouseEnter}
              />
            );
          })}

          <div className="tooltip">
            <span className="tooltip-info">
              <img className="tooltip-pic" src="pic.png" alt="pic" />
              <p>Music Starts</p>
            </span>
          </div>

          <Tooltip title="Music starts" placement="top">
            <div className="overlay" />
          </Tooltip>
          <Tooltip title="Molecule Man" placement="top">
            <div className="overlay2" />
          </Tooltip>
          <Tooltip title="Awesome chorus starts!" placement="top">
            <div className="overlay3" />
          </Tooltip>
          <Tooltip title="?" placement="top">
            <div className="overlay4" />
          </Tooltip>
        </div>
      </section>
    );
  }
}

export default App;
