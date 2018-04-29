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
            <div onClick={facebookLink}>
              <i className="fab fa-facebook-f" />
            </div>
            <div onClick={instagramLink}>
              <i className="fab fa-instagram" />
            </div>
            <div onClick={twitterLink}>
              <i className="fab fa-twitter" />
            </div>
            <div onClick={youtubeLink}>
              <i className="fab fa-youtube" />
            </div>
          </div>
          <div className="footer-top-logo">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694763/dgdwhite.png"
                alt=""
              />
            </Link>
          </div>
          <div className="footer-top-icons">
            <div onClick={spotifyLink}>
              <i className="fab fa-spotify" />
            </div>
            <div onClick={soundcloudLink}>
              <i className="fab fa-soundcloud" />
            </div>
            <div onClick={googlePlayLink}>
              <i className="fab fa-google-play" />
            </div>
            <div onClick={itunesLink}>
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
