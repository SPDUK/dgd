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
    <div
      className="grid js-masonry"
      data-masonry-options="{ &quot;itemSelector&quot;: &quot;.grid-item&quot;, &quot;columnWidth&quot;: 150 }"
    >
      <div className="grid-item grid-item--width2">
        <img src={wide1} alt="" />
      </div>
      <div className="grid-item">
        <img src={square1} alt="" />
      </div>
      <div className="grid-item">
        <img src={square2} alt="" />
      </div>
      <div className="grid-item grid-item--width2">
        <img src={wide2} alt="" />
      </div>
      <div className="grid-item">
        <img src={square5} alt="" />
      </div>
      <div className="grid-item">
        <img src={square6} alt="" />
      </div>
      <div className="grid-item">
        <img src={square3} alt="" />
      </div>
      <div className="grid-item grid-item--width2">
        <img src={wide3} alt="" />
      </div>
      <div className="grid-item">
        <img src={square4} alt="" />
      </div>
      <div className="grid-item">
        <img src={square7} alt="" />
      </div>
      <div className="grid-item">
        <img src={square8} alt="" />
      </div>
    </div>
  </div>
);

export default Albums;
