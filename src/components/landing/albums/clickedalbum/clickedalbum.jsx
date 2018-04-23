import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// need props for title of album & date?
import './clickedalbum.css';

class ClickedAlbum extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  // if the data for the component is not loaded it will simply
  // redirect back to home

  componentDidMount() {
    window.scrollTo(0, 0);
    this.checkLoaded();
  }

  checkLoaded() {
    if (!this.props.location.loaded) {
      // maybe make this scroll to albums component?
      window.location = 'http://localhost:3000/#/';
    }
  }

  render() {
    if (this.props.location.loaded) {
      return (
        <div className="clickedalbum">
          <div className="clickedalbum-gutters">
            <div className="clickedalbum-title">
              <h1>
                {this.props.location.albumname}
                <br />
                {this.props.location.date}
              </h1>
            </div>
            <div className="clickedalbum-image">
              <img src={this.props.location.image} alt="" />
              <div className="clickedalbum-image-nav">
                <div className="clickedalbum-image-nav-button left">
                  <Link to="/">
                    <p id="albumBack">
                      <i className="fa fa-arrow-left" /> Back
                    </p>
                  </Link>
                </div>
                <div className="clickedalbum-image-nav-button right">
                  <a href={this.props.location.youtube}>
                    <p>
                      Listen on Youtube <i className="fa fa-arrow-right" />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>error 404, you should not see this message.</div>;
  }
}

export default ClickedAlbum;
