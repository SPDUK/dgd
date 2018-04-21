import React, { Component } from 'react';

import './socialinks.css';
// keeps the website open while linking to social media
function facebookLink() {
  window.open('https://www.facebook.com/DanceGavinDance/');
}
function twitterLink() {
  window.open('https://twitter.com/DGDtheband');
}
function instagramLink() {
  window.open('https://www.instagram.com/dancegavindance/');
}
function youtubeLink() {
  window.open(
    'https://www.youtube.com/watch?v=Vl2Rmw5hsao&list=PLV8pJK07hP1gSr0XG1-0iE5VR1zsjKtCL&index=1'
  );
}
class SocialLinks extends Component {
  render() {
    return (
      <div className="sociallinks">
        <div className="sociallinks-bar">
          <i
            role="link"
            onKeyPress={facebookLink}
            onClick={facebookLink}
            tabIndex="0"
            className="fa fa-facebook"
          />
          <i
            role="link"
            onKeyPress={twitterLink}
            onClick={twitterLink}
            tabIndex="0"
            className="fa fa-twitter"
          />
          <i
            role="link"
            onKeyPress={instagramLink}
            onClick={instagramLink}
            tabIndex="0"
            className="fa fa-instagram"
          />
          <i
            role="link"
            onKeyPress={youtubeLink}
            onClick={youtubeLink}
            tabIndex="0"
            className="fa fa-youtube"
          />
        </div>
      </div>
    );
  }
}

export default SocialLinks;
