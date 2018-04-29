import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import './footer.css';
// doesn't work on ipad tablets in vertical mode (??? why ???)

function facebookLink() {
  window.open('https://en-gb.facebook.com/DanceGavinDance/');
}

function instagramLink() {
  window.open('https://www.instagram.com/dancegavindance/');
}
function twitterLink() {
  window.open('https://twitter.com/DGDtheband');
}
function youtubeLink() {
  window.open(
    'https://www.youtube.com/user/riserecords/search?query=Dance+Gavin+Dance'
  );
}
function spotifyLink() {
  window.open('https://open.spotify.com/artist/6guC9FqvlVboSKTI77NG2k');
}

function soundcloudLink() {
  window.open('https://soundcloud.com/dance-gavin-dance');
}
function googlePlayLink() {
  window.open(
    'https://play.google.com/store/music/artist/Dance_Gavin_Dance?id=Ag5rz3fpujs2wstmazhnssgabjy&hl=en_GB'
  );
}
function itunesLink() {
  window.open('https://itunes.apple.com/gb/artist/dance-gavin-dance/204782507');
}

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
            <div
              onKeyPress={facebookLink}
              role="link"
              tabIndex="0"
              onClick={facebookLink}
            >
              <i className="fab fa-facebook-f" />
              <span>Facebook</span>
            </div>
            <div
              onKeyPress={instagramLink}
              role="link"
              tabIndex="0"
              onClick={instagramLink}
            >
              <i className="fab fa-instagram" />
              <span>Instagram</span>
            </div>
            <div
              onKeyPress={twitterLink}
              role="link"
              tabIndex="0"
              onClick={twitterLink}
            >
              <i className="fab fa-twitter" />
              <span>Twitter</span>
            </div>
            <div
              onKeyPress={youtubeLink}
              role="link"
              tabIndex="0"
              onClick={youtubeLink}
            >
              <i className="fab fa-youtube" />
              <span>Youtube</span>
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
            <div
              onKeyPress={spotifyLink}
              role="link"
              tabIndex="0"
              onClick={spotifyLink}
            >
              <i className="fab fa-spotify" />
              <span>Spotify</span>
            </div>
            <div
              onKeyPress={soundcloudLink}
              role="link"
              tabIndex="0"
              onClick={soundcloudLink}
            >
              <i className="fab fa-soundcloud" />
              <span>Soundcloud</span>
            </div>
            <div
              onKeyPress={googlePlayLink}
              role="link"
              tabIndex="0"
              onClick={googlePlayLink}
            >
              <i className="fab fa-google-play" />
              <span>Google Play</span>
            </div>
            <div
              onKeyPress={itunesLink}
              role="link"
              tabIndex="0"
              onClick={itunesLink}
            >
              <i className="fab fa-itunes-note" />
              <span>iTunes</span>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <Link
            onKeyDown={this.scrollToVideos}
            onClick={this.scrollToVideos}
            to="/"
          >
            VIDEOS
          </Link>
          <a href="https://dgd.merchnow.com/">STORE</a>
          <Link to="/tour">TOUR</Link>
          <Link
            onKeyDown={this.scrollToAlbums}
            tabIndex="0"
            onClick={this.scrollToAlbums}
            to="/"
          >
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
