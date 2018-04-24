import React, { Component } from 'react';

// need props for title of album & date?
import './clickedalbum.css';

class ClickedAlbum extends Component {
  render() {
    return (
      <div className="clickedalbum-container">
        <div className="clickedalbum">
          <div className="clickedalbum-gutters">
            <div className="clickedalbum-title">
              <h1>
                {this.props.info.albumname}
                <br />
                {this.props.info.date}
              </h1>
            </div>
            <div className="clickedalbum-image">
              <img src={this.props.info.image} alt="" />
              <div className="clickedalbum-image-nav">
                <div className="clickedalbum-image-nav-button left">
                  <div
                    onKeyPress={this.props.closeAlbum}
                    tabIndex="0"
                    role="button"
                    onClick={this.props.closeAlbum}
                  >
                    <p id="albumBack">
                      <i className="fa fa-arrow-left" /> Close
                    </p>
                  </div>
                </div>
                <div className="clickedalbum-image-nav-button right">
                  <a href={this.props.info.youtube}>
                    <p>
                      <span>Listen on</span> Youtube{' '}
                      <i className="fa fa-arrow-right" />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    // return <div>error 404, you should not see this message
  }
}

export default ClickedAlbum;
