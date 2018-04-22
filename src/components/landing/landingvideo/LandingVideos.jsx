import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
// import { Link } from 'react-router-dom';

import './landingvideo.css';

import firstVideo from '../../../images/first-small.jpg';
import secondVideo from '../../../images/second-small.jpg';

function buttonClick() {
  console.log('clicked');
}
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
              <LazyLoad height={300} offset={100} once>
                <img src={firstVideo} alt="" />
              </LazyLoad>
              <a href="/">
                <i className="fa fa-play" />
              </a>
            </div>
            <h2 className="landingvideo-videos-first-name">MIDNIGHT CRUSADE</h2>
          </div>
          <div className="landingvideo-videos-second">
            <div>
              <LazyLoad height={300} offset={100} once>
                <img src={secondVideo} alt="" />
              </LazyLoad>
              <a href="/">
                <i className="fa fa-play" />
              </a>
            </div>
            <h2 className="landingvideo-videos-second-name">
              INSPIRE THE LIARS
            </h2>
          </div>
        </div>
        <div className="landingvideo-more">
          <h1
            onClick={buttonClick}
            onKeyPress={buttonClick}
            role="button"
            tabIndex="0"
            className="landingvideo-more-button button"
          >
            VIEW MORE
          </h1>
        </div>
      </div>
    );
  }
}

export default LandingVideo;
