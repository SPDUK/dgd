import React from 'react';

import './albums.css';

import square1 from '../../../images/acceptance-speech.jpg';
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

const Albums = () => (
  <div className="albums">
    <div className="albums-title">
      <h1>ALBUMS</h1>
    </div>
    <div className="albums-grid">
      <div className="albums-grid-first">
        <img className="wide-image" src={wide1} alt="" />
        <img className="square-image" src={square1} alt="" />
      </div>
      <div className="albums-grid-second">
        <img className="square-image" src={square2} alt="" />
        <img className="wide-image" src={wide2} alt="" />
      </div>
      <div className="albums-grid-third">
        <img className="wide-image" src={wide3} alt="" />
        <img className="square-image" src={square3} alt="" />
      </div>
      <div className="albums-grid-fourth">
        <img className="square-image" src={square4} alt="" />
        <img className="square-image" src={square5} alt="" />
        <img className="square-image" src={square6} alt="" />
        <img className="square-image" src={square7} alt="" />
        <img className="square-image" src={square8} alt="" />
      </div>
    </div>
  </div>
);

export default Albums;
