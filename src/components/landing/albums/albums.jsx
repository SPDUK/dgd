import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import { animateScroll as scroll, scroller } from 'react-scroll';

import './albums.css';

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
      isFitWidth: true
    });
    console.log('hello!');
  }

  // closes the current large image and returns the grid back to the right sizings
  closeAlbum = () => {
    this.setState({
      showAlbum: false,
      selectedAlbum: ''
    });
    const gridItems = document.querySelectorAll('.grid-item');
    for (let i = 0; i < gridItems.length; i += 1) {
      gridItems[i].classList.remove('grid-small');
    }
    const Masonry = require('masonry-layout');
    const msnry = new Masonry('.grid', {
      itemSelector: '.grid-item',
      isFitWidth: true
    });
  };

  //  makes the correct image display using renderAlbum func
  // makes all albums small and resizes grid to correct size
  // scrolls to the correct title height to display everything
  renderAlbum = (e, inf) => {
    this.setState({
      showAlbum: true,
      selectedAlbum: e,
      info: inf
    });
    const gridItems = document.querySelectorAll('.grid-item');
    for (let i = 0; i < gridItems.length; i += 1) {
      gridItems[i].classList.add('grid-small');
    }
    const Masonry = require('masonry-layout');
    const msnry = new Masonry('.grid', {
      itemSelector: '.grid-item',
      isFitWidth: true,
      originLeft: true
    });

    scroller.scrollTo('albums-title', {
      duration: 200,
      smooth: true,
      offset: -70
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

    // could maybe be done by setting info = selectedAlbumId + Info but I don't know
    // gets the ID on click and then changes the info to send to the component based on the click
    // calls renderAlbum and inserts those pieces of info into the function, rendering the correct image etc
    const renderAlbumClick = e => {
      const selectedAlbumId = e.target.id;
      let selectedAlbumInfo = '';
      if (selectedAlbumId === 'artificialSelection') {
        selectedAlbumInfo = artificialSelectionInfo;
      }
      if (selectedAlbumId === 'instantGratification') {
        selectedAlbumInfo = instantGratificationInfo;
      }
      if (selectedAlbumId === 'downtownBattleMountainII') {
        selectedAlbumInfo = downtownBattleMountainIIInfo;
      }
      if (selectedAlbumId === 'treecitySessions') {
        selectedAlbumInfo = treecitySessionsInfo;
      }
      if (selectedAlbumId === 'happiness') {
        selectedAlbumInfo = happinessInfo;
      }
      if (selectedAlbumId === 'mothership') {
        selectedAlbumInfo = mothershipInfo;
      }
      if (selectedAlbumId === 'downtownBattleMountain') {
        selectedAlbumInfo = downtownBattleMountainInfo;
      }
      if (selectedAlbumId === 'dancedGavinDance') {
        selectedAlbumInfo = dancedgavindanceInfo;
      }
      if (selectedAlbumId === 'acceptanceSpeech') {
        selectedAlbumInfo = acceptanceSpeechInfo;
      }
      if (selectedAlbumId === 'whateverISayIsRoyalOcean') {
        selectedAlbumInfo = whateverISayIsRoyalOceanInfo;
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
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="instantGratification"
                onClick={renderAlbumClick}
                src={instantGratification}
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img
                id="artificialSelection"
                onClick={renderAlbumClick}
                src={artificialSelection}
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
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
