import {React, useRef} from 'react';

import './MenuBar.css';

function MenuBar(props) {
    // const handleClick = (ref) => {
    //   ref.current.scrollIntoView({ behavior: 'smooth' });
    // };

    // const handleClick = (ref) => {
    //     ref.current.scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'start',
    //       inline: 'nearest'
    //     });
    //   };

    const handleClick = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: "smooth"
        });
      };
      
  
    return (
      <div className="menu-bar">
        <ul>
          <li><a href="#titlepage" onClick={() => handleClick(props.homeRef)}>Home</a></li>
          <li><a href="#about" onClick={() => handleClick(props.aboutRef)}>About</a></li>
          <li><a href="#" onClick={() => handleClick(props.projectRef)}>Project</a></li>
        </ul>
      </div>
    );
  }

export default MenuBar;
