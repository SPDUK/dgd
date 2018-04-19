import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 1 x 1 layout phone
// 2 x 1 layout pc
import '../styles/landingvideo.css';

import firstVideo from '../images/first.jpg';
import secondVideo from '../images/second.jpg';
import play from '../images/play-circle.svg';

class LandingVideo extends Component {
  render() {
    return (
      <div className="landingvideo">
        <div className="landingvideo-title">
          <h1>VIDEOS</h1>
        </div>
        <div className="landingvideo-videos">
          <div className="landingvideo-videos-first">
            <div>
              <img src={firstVideo} alt="" />
              <a href="/">
                <i className="fa fa-play" />
              </a>
            </div>
            <h2 className="landingvideo-videos-first-name">MIDNIGHT CRUSADE</h2>
          </div>
          <div className="landingvideo-videos-second">
            <div>
              <img src={secondVideo} alt="" />
              <a href="/">
                <i className="fa fa-play" />
              </a>
            </div>
            <h2 className="landingvideo-videos-second-name">
              INSPIRE THE LIARS
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingVideo;
