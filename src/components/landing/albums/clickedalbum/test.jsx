import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Test extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="">
        testtingggg <p>haha</p>
        {this.props.info.albumname}
      </div>
    );
  }
}

export default Test;
