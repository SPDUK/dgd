import React, { Component } from 'react';

import './socialinks.css';
// keeps the website open while linking to social media
function spotifyLink() {
  window.open('https://open.spotify.com/artist/6guC9FqvlVboSKTI77NG2k');
}

function soundcloudLink() {
  window.open('https://soundcloud.com/dance-gavin-dance');
}
function googleplayLink() {
  window.open(
    'https://play.google.com/store/music/artist/Dance_Gavin_Dance?id=Ag5rz3fpujs2wstmazhnssgabjy&hl=en_GB'
  );
}
function itunesLink() {
  window.open('https://itunes.apple.com/gb/artist/dance-gavin-dance/204782507');
}
class SocialLinks extends Component {
  render() {
    return (
      <div className="sociallinks">
        <div className="sociallinks-bar">
          <i
            role="link"
            onKeyPress={spotifyLink}
            onClick={spotifyLink}
            tabIndex="0"
            className="fab fa-spotify"
          />
          <i
            role="link"
            onKeyPress={soundcloudLink}
            onClick={soundcloudLink}
            tabIndex="0"
            className="fab fa-soundcloud"
          />
          <i
            role="link"
            onKeyPress={googleplayLink}
            onClick={googleplayLink}
            tabIndex="0"
            className="fab fa-google-play"
          />
          <i
            role="link"
            onKeyPress={itunesLink}
            onClick={itunesLink}
            tabIndex="0"
            className="fab fa-itunes-note"
          />
        </div>
      </div>
    );
  }
}

export default SocialLinks;
