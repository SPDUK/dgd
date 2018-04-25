import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { animateScroll as scroll, scroller } from 'react-scroll';

import './landingvideo.css';

function firstVideoClick() {
  window.open('https://www.youtube.com/watch?v=0dbXnfl8ZcM');
}
function secondVideoClick() {
  window.open('https://www.youtube.com/watch?v=Z-aQrBZ4Duw');
}
function viewMoreClick() {
  scroller.scrollTo('albums-title', {
    duration: 400,
    smooth: true,
    offset: -70
  });
}

// ADD GIF / WEBM ON HOVER INSTEAD??

class LandingVideo extends Component {
  render() {
    return (
      <div className="landingvideo">
        <div className="landingvideo-title">
          <h1>VIDEOS</h1>
        </div>
        <div className="landingvideo-videos">
          <div onClick={firstVideoClick} className="landingvideo-videos-first">
            <div>
              <LazyLoad height={300} offset={100} once>
                <img
                  src="http://res.cloudinary.com/dmjolhdaq/image/upload/v1524696026/robots.jpg"
                  alt=""
                />
              </LazyLoad>
              <a href="/">
                <i className="fa fa-play" />
              </a>
            </div>
            <h2 className="landingvideo-videos-first-name">MIDNIGHT CRUSADE</h2>
          </div>
          <div
            onClick={secondVideoClick}
            className="landingvideo-videos-second"
          >
            <div>
              <LazyLoad height={300} offset={100} once>
                <img
                  src="https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694780/second-small.jpg"
                  alt=""
                />
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
            onClick={viewMoreClick}
            onKeyPress={viewMoreClick}
            role="button"
            tabIndex="0"
            className="landingvideo-more-button button"
          >
            VIEW MORE <i className="fa fa-arrow-right" />
          </h1>
        </div>
      </div>
    );
  }
}

export default LandingVideo;
