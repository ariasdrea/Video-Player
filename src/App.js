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
          url: "https://www.youtube.com/watch?v=VFfKPZhY16Q"
        },
        {
          id: 1,
          url: "https://www.youtube.com/watch?v=ZTGIzeye-xw"
        },
        {
          id: 2,
          url: "https://www.youtube.com/watch?v=30jrmzzgHLc"
        },
        {
          id: 3,
          url: "https://www.youtube.com/watch?v=hi4pzKvuEQM"
        }
      ]
    };
  }

  render() {
    return (
      <div className="container">
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
              />
            );
          })}

          {/* Tooltips and Info */}
          <div className="tooltip-metatron">
            <span className="info-metatron">
              <img className="tooltip-pic" src="metatron.png" alt="thumbnail" />
              <p>Music Starts</p>
            </span>
          </div>

          <div className="tooltip-people">
            <span className="info-people">
              <img className="tooltip-pic" src="molecule.png" alt="thumbnail" />
              <p>Molecule Man</p>
            </span>
          </div>

          <div className="tooltip-drive">
            <span className="info-drive">
              <img className="tooltip-pic" src="drive.png" alt="thumbnail" />
              <p>Chorus Starts</p>
            </span>
          </div>

          <div className="tooltip-gold">
            <span className="info-gold">
              <img className="tooltip-pic" src="deer.png" alt="thumbnail" />
              <p>Deer Cameo</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
