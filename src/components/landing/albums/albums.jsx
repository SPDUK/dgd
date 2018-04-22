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
    <div className="grid">
      <img src={square1} alt="" />
      <img src={square2} alt="" />
      <img src={square3} alt="" />
      <img src={square4} alt="" />
      <img src={square5} alt="" />
      <img src={square6} alt="" />
      <img src={square7} alt="" />
      <img src={square8} alt="" />
      <img src={wide1} alt="" />
      <img src={wide2} alt="" />
      <img src={wide3} alt="" />
    </div>
  </div>
);

export default Albums;
