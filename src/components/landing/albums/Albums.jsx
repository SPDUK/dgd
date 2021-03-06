import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
// eslint-disable-next-line
import { animateScroll as scroll, scroller } from 'react-scroll';

import './albums.css';

import ClickedAlbum from './clickedalbum/Clickedalbum';

const artificialSelection =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694737/DGD/dgdwall.jpg';
const mothership =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694738/DGD/mothership.jpg';
const treecitySessions =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694738/DGD/treecity-sessions.jpg';
const instantGratification =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694748/DGD/instant-gratification.jpg';
const acceptanceSpeech =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694748/DGD/acceptance-speech.jpg';
const downtownBattleMountainII =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694748/DGD/downtown-battle-mtn-ii.jpg';
const happiness =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694748/DGD/happiness.jpg';
const dancedgavindance =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694748/DGD/dancegavindance.jpg';
const downtownBattleMountain =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/c_scale,w_720/v1551726832/DGD/downtown-battle-mtn.jpg';
const whateverISayIsRoyalOcean =
  'https://res.cloudinary.com/dmjolhdaq/image/upload/v1524694748/DGD/whatever-i-say-is-royal-ocean.jpg';

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
    // eslint-disable-next-line
    const msnry = new Masonry('.grid', {
      itemSelector: '.grid-item',
      isFitWidth: true
    });
  }

  // closes the current large image and returns the grid back to the right sizings
  closeAlbum = () => {
    this.setState({
      showAlbum: false,
      selectedAlbum: ''
    });
    const gridItems = document.querySelectorAll('.grid-item');
    const footer = document.querySelector('.footer');
    for (let i = 0; i < gridItems.length; i += 1) {
      gridItems[i].classList.remove('grid-small');
    }
    footer.classList.remove('moved-footer');
    const Masonry = require('masonry-layout');
    // eslint-disable-next-line
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
    const footer = document.querySelector('.footer');
    for (let i = 0; i < gridItems.length; i += 1) {
      gridItems[i].classList.add('grid-small');
    }
    footer.classList.add('moved-footer');
    const Masonry = require('masonry-layout');
    // eslint-disable-next-line
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
      albumname: 'Artificial Selection',
      image: artificialSelection,
      date: '2018',
      youtube: 'https://www.youtube.com/watch?v=0dbXnfl8ZcM'
    };

    const mothershipInfo = {
      albumname: 'Mothership',
      image: mothership,
      date: '2016',
      youtube:
        'https://www.youtube.com/watch?v=gDCHx4tPv-Y&list=PLKcGEIO7V0rVWOWCK_5q87jNcGT907owe'
    };
    const treecitySessionsInfo = {
      albumname: 'Tree City Sessions',
      image: treecitySessions,
      date: '2016',
      youtube:
        'https://www.youtube.com/watch?v=GMCAypd9Z8M&list=PLKcGEIO7V0rUeYSZwaPQBzW_9sbo3X5ND'
    };

    const instantGratificationInfo = {
      albumname: 'Instant Gratification',
      image: instantGratification,
      date: '2015',
      youtube:
        'https://www.youtube.com/watch?v=JCuEaQKPTAM&list=PL4oWov-VH7p8LzlwqoMJZtgpEQIpAqWvQ'
    };

    const acceptanceSpeechInfo = {
      albumname: 'Acceptance Speech',
      image: acceptanceSpeech,
      date: '2013',
      youtube:
        'https://www.youtube.com/watch?v=g6lyOz8lb1Q&list=PLKcGEIO7V0rXrscrhY1aJa736fLp_qbay'
    };
    const downtownBattleMountainIIInfo = {
      albumname: 'Downtown Battle Mountain II',
      image: downtownBattleMountainII,
      date: '2011',
      youtube:
        'https://www.youtube.com/watch?v=CKqc8-MJhuY&list=PL9422481DD43050D8'
    };

    const happinessInfo = {
      albumname: 'Happiness',
      image: happiness,
      date: '2009',
      youtube:
        'https://www.youtube.com/watch?v=MhHaJl05W0U&list=PL28BRDeitpEHloUiut3EeUJCFxuIHGQSU'
    };

    const dancedgavindanceInfo = {
      albumname: 'Dance Gavin Dance (self-titled)',
      image: dancedgavindance,
      date: '2008',
      youtube:
        'https://www.youtube.com/watch?v=Vy-fwC5sjQI&list=PL9FE3FE7F0FCD28D9'
    };
    const downtownBattleMountainInfo = {
      albumname: 'Downtown Battle Mountain',
      image: downtownBattleMountain,
      date: '2007',
      youtube:
        'https://www.youtube.com/watch?v=4QM24f0Dw34&list=PLCF84E705502E1CDF'
    };

    const whateverISayIsRoyalOceanInfo = {
      albumname: 'Whatever I Say Is Royal Ocean',
      image: whateverISayIsRoyalOcean,
      date: '2006',
      youtube:
        'https://www.youtube.com/watch?v=H1W7KZHR4ic&list=PL4987C2E47DA3F2B4'
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
                alt="Instant Gratification Album Art"
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
                alt="Acceptance Speech Album Art"
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
                alt="Artificial Selection Album Art"
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
                alt="Downtown Battle Mountain II Album Art"
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
                alt="Happiness Album Art"
              />
            </LazyLoad>
          </div>
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <img
                id="dancedGavinDance"
                onClick={renderAlbumClick}
                src={dancedgavindance}
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
                alt="Dance Gavin Dance Album Art"
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
                alt="Downtown Battle Mountain Album Art"
              />
            </LazyLoad>
          </div>
          <div className="grid-item">
            <LazyLoad height={300} offset={100} once>
              <img
                id="mothership"
                onClick={renderAlbumClick}
                src={mothership}
                onKeyPress={renderAlbumClick}
                tabIndex="0"
                role="button"
                alt="Mothership Album Art"
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
                alt="Tree City Session Album Art"
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
                alt="Whatever I say Is Royal Ocean Album Art"
              />
            </LazyLoad>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;
