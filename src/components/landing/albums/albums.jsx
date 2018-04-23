import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

import ClickedAlbum from './clickedalbum/clickedalbum';

import './albums.css';
import square2 from '../../../images/whatever-i-say-is-royal-ocean.jpg';
import square3 from '../../../images/dancedgavindance.jpg';
import square4 from '../../../images/downtown-battle-mtn-ii.jpg';
import square5 from '../../../images/downtown-battle-mtn.jpg';
import square6 from '../../../images/happiness.jpg';
import square7 from '../../../images/instant-gratification.jpg';
import square8 from '../../../images/summertime-gladness.jpg';
import wide1 from '../../../images/artificial-selection.jpg';
import wide2 from '../../../images/mothership.jpg';
import wide3 from '../../../images/treecity-sessions.jpg';

const acceptanceSpeech = 'https://i.imgur.com/J6UgPMN.jpg';

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      showAlbum: false
    };
    // this.showAlbumClick = this.showAlbumClick.bind(this);
  }

  componentDidMount() {
    const Masonry = require('masonry-layout');
    const msnry = new Masonry('.grid', {
      itemSelector: '.grid-item',
      columnWidth: 150,
      isFitWidth: true
    });
  }

  // showAlbumClick() {
  //   this.setState(prevState => ({
  //     showAlbum: !prevState.showAlbum
  //   }));
  // }

  render() {
    const acceptanceSpeechLink = {
      pathname: '/album/acceptancespeech',
      albumname: 'Acceptance Speech',
      image: acceptanceSpeech,
      date: '2018'
    };

    return (
      <div className="albums">
        <div className="albums-title">
          <h1>ALBUMS</h1>
        </div>
        <div
          className="grid"
          // data-masonry="{ &quot;itemSelector&quot;: &quot;.grid-item&quot;, &quot;columnWidth&quot;: 150 }"
        >
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img src={wide1} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <Link to={acceptanceSpeechLink}>
                <img src={acceptanceSpeech} alt="" />
              </Link>
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img src={square2} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img src={wide2} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img src={square5} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img src={square6} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img src={wide3} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img src={square3} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img src={square4} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img src={square7} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img src={square8} alt="" />
            </LazyLoad>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;
