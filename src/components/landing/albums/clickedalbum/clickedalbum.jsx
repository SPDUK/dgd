import React, { Component } from 'react';

//  eslint-disable-next-line
import { animateScroll as scroll, scroller } from 'react-scroll';

// need props for title of album & date?
import './clickedalbum.css';

class ClickedAlbum extends Component {
  // if the data for the component is not loaded it will simply
  // redirect back to home

  // componentDidMount() {
  //   window.scrollTo(0, 0);
  //   // this.checkLoaded();
  // }

  // checkLoaded() {
  //   if (!this.props.te.loaded) {
  //     // scrolls to album component if you went back to it after leaving
  //     // If I had infinite time I'd make 11 different components instead
  //     this.props.history.push('/');
  //     setTimeout(() => {
  //       scroller.scrollTo('albumtitle', {
  //         duration: 0,
  //         offset: -100
  //       });
  //     }, 50);
  //   }
  // }

  // goes back to home and scrolls to the album component when clicking back
  // albumClickBack = () => {
  //   this.props.history.push('/');
  //   setTimeout(() => {
  //     scroller.scrollTo('albumtitle', {
  //       duration: 0,
  //       offset: -80,
  //       smooth: 'easeInOutQuad'
  //     });
  //   }, 0);
  // };

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
                  <a href={this.props.info.youtube}>
                    <p>
                      Listen on Youtube <i className="fa fa-arrow-right" />
                    </p>
                  </a>
                </div>
              </div>
              <div className="clickedalbum-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque eget lectus ultricies, cursus nulla ut, iaculis
                  mi. Etiam nisi felis, interdum vitae massa ut, finibus
                  vestibulum turpis.
                </p>
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
