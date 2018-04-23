import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

// need props for title of album & date?
import './clickedalbum.css';

class ClickedAlbum extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props.location);
    return (
      <div className="lol">
        <img src={this.props.location.image} alt="" />
      </div>
    );
  }
}

export default ClickedAlbum;
