import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// 1 x 1 layout phone
// 2 x 1 layout pc
import '../styles/landingvideo.css';

import btbtg from '../images/btbtg.jpg';
import mnc from '../images/mnc.jpg';

class LandingVideo extends Component {
  render() {
    return (
      <div className="landingvideo">
        <div className="landingvideo-title">
          <h1>VIDEOS</h1>
        </div>
        <div className="landingvideo-videos">
          <div className="landingvideo-videos-first">
            <img src={mnc} alt="" />
          </div>
          <div className="landingvideo-videos-second">
            <img src={btbtg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingVideo;
