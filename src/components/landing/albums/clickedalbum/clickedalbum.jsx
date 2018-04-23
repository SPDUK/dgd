import React, { Component } from 'react';
// import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

// need props for title of album & date?

class ClickedAlbum extends Component {
  render(props) {
    // console.log(this.props.location.image);
    // console.log(this.props.location.albumname);

    // const
    // console.log(albumImage);
    console.log(this.props.location);
    return (
      <div className="lol">
        <img src={this.props.location.image} alt="" />
      </div>
    );
  }
}

export default ClickedAlbum;
