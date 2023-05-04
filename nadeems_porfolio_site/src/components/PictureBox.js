import "./PictureBox.css"
import React from 'react';

class PictureBox extends React.Component {
  render() {

    return (
      <div className="gradient-border picture-box">
      <img src="../images/keras.png" alt=""></img>
      </div>
    );
  }
}

export default PictureBox