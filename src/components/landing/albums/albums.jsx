import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

import './albums.css';

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
  componentDidMount() {
    const Masonry = require('masonry-layout');
    const msnry = new Masonry('.grid', {
      itemSelector: '.grid-item',
      columnWidth: 150,
      isFitWidth: true
    });
  }

  // component objects
  render() {
    const artificialSelectionLink = {
      pathname: '/album/artificialSelection',
      albumname: 'Artificial Selection',
      image: artificialSelection,
      date: '2018',
      loaded: true,
      youtube: 'https://www.youtube.com/watch?v=0dbXnfl8ZcM',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lectus ultricies, cursus nulla ut, iaculis mi. Etiam nisi felis, interdum vitae massa ut, finibus vestibulum turpis.'
    };

    const mothershipLink = {
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
    const treecitySessionsLink = {
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

    const instantGratificationLink = {
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

    const acceptanceSpeechLink = {
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
    const downtownBattleMountainIILink = {
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

    const happinessLink = {
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

    const dancedgavindanceLink = {
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

    const downtownBattleMountainLink = {
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

    const whateverISayIsRoyalOceanLink = {
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

    return (
      <div className="albums">
        <div name="albumtitle" className="albums-title">
          <h1>ALBUMS</h1>
        </div>
        <div className="grid">
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <Link to={artificialSelectionLink}>
                <img src={artificialSelection} alt="" />
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
              <Link to={acceptanceSpeechLink}>
                <img src={acceptanceSpeech} alt="" />
              </Link>
            </LazyLoad>
          </div>
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <Link to={treecitySessionsLink}>
                <img src={treecitySessions} alt="" />
              </Link>
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
              <Link to={happinessLink}>
                <img src={happiness} alt="" />
              </Link>
            </LazyLoad>
          </div>
          <div className="grid-item grid-item--width2">
            <LazyLoad height={300} offset={100} once>
              <Link to={mothershipLink}>
                <img src={mothership} alt="" />
              </Link>
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
              <Link to={dancedgavindanceLink}>
                <img src={dancedgavindance} alt="" />
              </Link>
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
