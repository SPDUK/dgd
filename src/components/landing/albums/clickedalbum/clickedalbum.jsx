import React, { Component } from 'react';

import { animateScroll as scroll, scroller } from 'react-scroll';

// need props for title of album & date?
import './clickedalbum.css';

class ClickedAlbum extends Component {
  // if the data for the component is not loaded it will simply
  // redirect back to home

  componentDidMount() {
    window.scrollTo(0, 0);
    this.checkLoaded();
  }

  checkLoaded() {
    if (!this.props.location.loaded) {
      // scrolls to album component if you went back to it after leaving
      // If I had infinite time I'd make 11 different components instead
      this.props.history.push('/');
      setTimeout(() => {
        scroller.scrollTo('albumtitle', {
          duration: 800,
          offset: -100,
          smooth: 'easeInOutQuad'
        });
      }, 300);
    }
  }

  albumClickBack = () => {
    this.props.history.push('/');
    setTimeout(() => {
      scroller.scrollTo('albumtitle', {
        duration: 800,
        offset: -80,
        smooth: 'easeInOutQuad'
      });
    }, 300);
  };

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
                  <div
                    onKeyPress={this.albumClickBack}
                    tabIndex="0"
                    role="button"
                    onClick={this.albumClickBack}
                  >
                    <p id="albumBack">
                      <i className="fa fa-arrow-left" /> Back
                    </p>
                  </div>
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
