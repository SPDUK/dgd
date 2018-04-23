import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

import ClickedAlbum from './clickedalbum/clickedalbum';

import './albums.css';
import square3 from '../../../images/dancedgavindance.jpg';
import square6 from '../../../images/happiness.jpg';
import square8 from '../../../images/summertime-gladness.jpg';
import wide1 from '../../../images/artificial-selection.jpg';
import wide2 from '../../../images/mothership.jpg';
import wide3 from '../../../images/treecity-sessions.jpg';

const instantGratification = 'https://i.imgur.com/iTWpoPV.jpg';
const acceptanceSpeech = 'https://i.imgur.com/J6UgPMN.jpg';
const downtownBattleMountain = 'https://i.imgur.com/u0Slvb2.jpg';
const downtownBattleMountainII = 'https://i.imgur.com/hBf4w1H.jpg';
const whateverISayIsRoyalOcean = 'https://i.imgur.com/c0pqxFX.jpg'; // last

class Albums extends Component {
  componentDidMount() {
    const Masonry = require('masonry-layout');
    const msnry = new Masonry('.grid', {
      itemSelector: '.grid-item',
      columnWidth: 150,
      isFitWidth: true
    });
  }

  render() {
    const downtownBattleMountainIILink = {
      pathname: '/album/downtownbattlemountain-ii',
      albumname: 'Downtown Battle Mountain II',
      image: downtownBattleMountainII,
      date: '2018'
    };
    const instantGratificationLink = {
      pathname: '/album/instantgratification',
      albumname: 'Instant Gratification',
      image: instantGratification,
      date: '2018'
    };

    const acceptanceSpeechLink = {
      pathname: '/album/acceptancespeech',
      albumname: 'Acceptance Speech',
      image: acceptanceSpeech,
      date: '2018'
    };
    const whateverISayIsRoyalOceanLink = {
      pathname: '/album/whateverISayIsRoyalOcean',
      albumname: 'Whatever I Say Is Royal Ocean',
      image: whateverISayIsRoyalOcean,
      date: '2006'
    };

    const downtownBattleMountainLink = {
      pathname: '/album/downtownbattlemountain',
      albumname: 'Downtown Battle Mountain',
      image: downtownBattleMountain,
      date: '2017'
    };

    return (
      <div className="albums">
        <div className="albums-title">
          <h1>ALBUMS</h1>
        </div>
        <div className="grid">
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
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img src={wide2} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <Link to={downtownBattleMountainLink}>
                <img src={downtownBattleMountain} alt="" />
              </Link>
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
              <Link to={downtownBattleMountainIILink}>
                <img src={downtownBattleMountainII} alt="" />
              </Link>
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <Link to={instantGratificationLink}>
                <img src={instantGratification} alt="" />
              </Link>
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img src={square8} alt="" />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <Link to={whateverISayIsRoyalOceanLink}>
                <img
                  src={whateverISayIsRoyalOcean}
                  alt="Whatevr I say Is Royal Ocean Album Art"
                />
              </Link>
            </LazyLoad>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;
