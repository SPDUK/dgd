import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// need props for title of album & date?
import './clickedalbum.css';

class ClickedAlbum extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.location);
    return (
      <div className="clickedalbum">
        <div className="clickedalbum-gutters">
          <div className="clickedalbum-title">
            <h1>
              {this.props.location.albumname}, {this.props.location.date}
            </h1>
          </div>
          <div className="clickedalbum-image">
            <img src={this.props.location.image} alt="" />
            <div className="clickedalbum-image-nav">
              <div className="clickedalbum-image-nav-button">Purchase</div>
              <div className="clickedalbum-image-nav-button">Purchase</div>
              <div className="clickedalbum-image-nav-button">Purchase</div>
              <div className="clickedalbum-image-nav-button">Purchase</div>
              <div className="clickedalbum-image-nav-button">Purchase</div>
              <div className="clickedalbum-image-nav-button">Purchase</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClickedAlbum;
