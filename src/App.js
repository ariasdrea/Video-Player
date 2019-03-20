import React, { Component } from "react";
import ReactPlayer from "react-player";
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
          title: "Midlake",
          duration: 0,
          url: "https://www.youtube.com/watch?v=3k-pMMW01yw"
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
        </div>
      </section>
    );
  }
}

export default App;
