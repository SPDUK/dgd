import React, { Component } from 'react';
// import LazyLoad from 'react-lazyload';
// import { Link } from 'react-router-dom';

import './selectedalbum.css';

class SelectedAlbum extends Component {
  render() {
    return (
      <div className="selectedvideo">
        <img src={this.props.image} alt="" />
        <div onClick={this.props.showAlbumClick} className="closebutton">
          X
        </div>
      </div>
    );
  }
}

export default SelectedAlbum;
