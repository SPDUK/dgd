import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import './footer.css';
// doesn't work on ipad tablets in vertical mode (??? why ???)

class Footer extends Component {
  scrollToAlbums() {
    function handleClick(e) {
      e.preventDevault();
    }
    setTimeout(() => {
      scroller.scrollTo('albums-title', {
        duration: 1000,
        offset: -70,
        smooth: 'easeInOutQuad'
      });
    }, 50);
  }

  scrollToVideos() {
    function handleClick(e) {
      e.preventDevault();
    }
    setTimeout(() => {
      scroller.scrollTo('landingvideo-title', {
        duration: 1000,
        offset: -70,
        smooth: 'easeInOutQuad'
      });
    }, 50);
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-icons">
            <div>
              <i className="fab fa-facebook-f" />
            </div>
            <div>
              <i className="fab fa-instagram" />
            </div>
            <div>
              <i className="fab fa-twitter" />
            </div>
            <div>
              <i className="fab fa-youtube" />
            </div>
          </div>
          <div className="footer-top-logo">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694763/dgdwhite.png"
                alt=""
              />
            </a>
          </div>
          <div className="footer-top-icons">
            <div>
              <i className="fab fa-spotify" />
            </div>
            <div>
              <i className="fab fa-soundcloud" />
            </div>
            <div>
              <i className="fab fa-google-play" />
            </div>
            <div>
              <i className="fab fa-itunes-note" />
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <Link onClick={this.scrollToVideos} to="/">
            VIDEOS
          </Link>
          <a href="https://dgd.merchnow.com/">STORE</a>
          <Link to="/tour">TOUR</Link>
          <Link onClick={this.scrollToAlbums} to="/">
            DISCOGRAPHY
          </Link>
        </div>
        <div className="footer-bottom">
          <a href="http://spdevuk.com">
            <p>WEBSITE CREATED BY SPDUK</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
