import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

import './albums.css';

import Test from './clickedalbum/test';
import ClickedAlbum from './clickedalbum/clickedalbum';

const artificialSelection = 'https://i.imgur.com/ewuyVXX.jpg';
const mothership = 'https://i.imgur.com/8ooI9PG.jpg';
const treecitySessions = 'https://i.imgur.com/afKreWO.jpg';
const instantGratification = 'https://i.imgur.com/iTWpoPV.jpg';
const acceptanceSpeech = 'https://i.imgur.com/J6UgPMN.jpg';
const downtownBattleMountainII = 'https://i.imgur.com/hBf4w1H.jpg';
const happiness = 'https://i.imgur.com/93mPJ3o.jpg';
const dancedgavindance = 'https://i.imgur.com/jl6mwj7.jpg';
const downtownBattleMountain = 'https://i.imgur.com/u0Slvb2.jpg';
const whateverISayIsRoyalOcean = 'https://i.imgur.com/c0pqxFX.jpg';

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      showAlbum: false,
      selectedAlbum: ''
    };
  }
  componentDidMount() {
    const Masonry = require('masonry-layout');
    const msnry = new Masonry('.grid', {
      itemSelector: '.grid-item',
      columnWidth: 150,
      isFitWidth: true
    });
  }

  closeAlbum = () => {
    this.setState({
      showAlbum: false,
      selectedAlbum: ''
    });
  };

  // renderAlbumClick = (
  //   this.renderAlbum(artificialSelectionInfo);
  // )
  renderAlbum = (e, inf) => {
    this.setState({
      showAlbum: true,
      selectedAlbum: e,
      info: inf
    });
  };

  // component objects
  render() {
    const artificialSelectionInfo = {
      pathname: '/album/artificialSelection',
      albumname: 'Artificial Selection',
      image: artificialSelection,
      date: '2018',
      loaded: true,
      youtube: 'https://www.youtube.com/watch?v=0dbXnfl8ZcM',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };

    const mothershipInfo = {
      pathname: '/album/mothership',
      albumname: 'Mothership',
      image: mothership,
      date: '2016',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=gDCHx4tPv-Y&list=PLKcGEIO7V0rVWOWCK_5q87jNcGT907owe',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };
    const treecitySessionsInfo = {
      pathname: '/album/treecitysessions',
      albumname: 'Tree City Sessions',
      image: treecitySessions,
      date: '2016',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=GMCAypd9Z8M&list=PLKcGEIO7V0rUeYSZwaPQBzW_9sbo3X5ND',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };

    const instantGratificationInfo = {
      pathname: '/album/instantgratification',
      albumname: 'Instant Gratification',
      image: instantGratification,
      date: '2015',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=JCuEaQKPTAM&list=PL4oWov-VH7p8LzlwqoMJZtgpEQIpAqWvQ',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };

    const acceptanceSpeechInfo = {
      pathname: '/album/acceptancespeech',
      albumname: 'Acceptance Speech',
      image: acceptanceSpeech,
      date: '2013',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=g6lyOz8lb1Q&list=PLKcGEIO7V0rXrscrhY1aJa736fLp_qbay',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };
    const downtownBattleMountainIIInfo = {
      pathname: '/album/downtownbattlemountain-ii',
      albumname: 'Downtown Battle Mountain II',
      image: downtownBattleMountainII,
      date: '2011',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=CKqc8-MJhuY&list=PL9422481DD43050D8',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };

    const happinessInfo = {
      pathname: '/album/happiness',
      albumname: 'Happiness',
      image: happiness,
      date: '2009',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=MhHaJl05W0U&list=PL28BRDeitpEHloUiut3EeUJCFxuIHGQSU',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };

    const dancedgavindanceInfo = {
      pathname: '/album/dancedgavindance',
      albumname: 'Dance Gavin Dance (self-titled)',
      image: dancedgavindance,
      date: '2008',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=Vy-fwC5sjQI&list=PL9FE3FE7F0FCD28D9',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };
    const downtownBattleMountainInfo = {
      pathname: '/album/downtownbattlemountain',
      albumname: 'Downtown Battle Mountain',
      image: downtownBattleMountain,
      date: '2007',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=4QM24f0Dw34&list=PLCF84E705502E1CDF',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };

    const whateverISayIsRoyalOceanInfo = {
      pathname: '/album/whateverISayIsRoyalOcean',
      albumname: 'Whatever I Say Is Royal Ocean',
      image: whateverISayIsRoyalOcean,
      date: '2006',
      loaded: true,
      youtube:
        'https://www.youtube.com/watch?v=H1W7KZHR4ic&list=PL4987C2E47DA3F2B4',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };

    const renderAlbumClick = e => {
      const selectedAlbumId = e.target.id;
      console.log(selectedAlbumId);
      if (selectedAlbumId === 'artificialSelection') {
        var selectedAlbumInfo = artificialSelectionInfo;
      }
      if (selectedAlbumId === 'instantGratification') {
        var selectedAlbumInfo = instantGratificationInfo;
      }
      if (selectedAlbumId === 'downtownBattleMountainII') {
        var selectedAlbumInfo = downtownBattleMountainIIInfo;
      }
      if (selectedAlbumId === 'treecitySessions') {
        var selectedAlbumInfo = treecitySessionsInfo;
      }
      if (selectedAlbumId === 'happiness') {
        var selectedAlbumInfo = happinessInfo;
      }
      if (selectedAlbumId === 'mothership') {
        var selectedAlbumInfo = mothershipInfo;
      }
      if (selectedAlbumId === 'downtownBattleMountain') {
        var selectedAlbumInfo = downtownBattleMountainInfo;
      }
      if (selectedAlbumId === 'dancedGavinDance') {
        var selectedAlbumInfo = dancedgavindanceInfo;
      }
      if (selectedAlbumId === 'acceptanceSpeech') {
        var selectedAlbumInfo = acceptanceSpeechInfo;
      }
      if (selectedAlbumId === 'whateverISayIsRoyalOcean') {
        var selectedAlbumInfo = whateverISayIsRoyalOceanInfo;
      }

      this.renderAlbum(selectedAlbumId, selectedAlbumInfo);
    };
    return (
      <div className="albums">
        <div name="albumtitle" className="albums-title">
          <h1>ALBUMS</h1>
        </div>
        <div className="albums-selected">
          {this.state.showAlbum ? (
            <ClickedAlbum closeAlbum={this.closeAlbum} info={this.state.info} />
          ) : null}
        </div>

        <div className="grid">
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img
                id="artificialSelection"
                onClick={renderAlbumClick}
                src={artificialSelection}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="instantGratification"
                onClick={renderAlbumClick}
                src={instantGratification}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="acceptanceSpeech"
                onClick={renderAlbumClick}
                src={acceptanceSpeech}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img
                id="treecitySessions"
                onClick={renderAlbumClick}
                src={treecitySessions}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="downtownBattleMountainII"
                onClick={renderAlbumClick}
                src={downtownBattleMountainII}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="happiness"
                onClick={renderAlbumClick}
                src={happiness}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img
                id="mothership"
                onClick={renderAlbumClick}
                src={mothership}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="downtownBattleMountain"
                onClick={renderAlbumClick}
                src={downtownBattleMountain}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="dancedGavinDance"
                onClick={renderAlbumClick}
                src={dancedgavindance}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="whateverISayIsRoyalOcean"
                onClick={renderAlbumClick}
                src={whateverISayIsRoyalOcean}
                alt="Whatevr I say Is Royal Ocean Album Art"
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;
