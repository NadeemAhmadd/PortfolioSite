import "./PictureBox.css"
import React from 'react';

// class PictureBox extends React.Component {
//   render() {

//     return (
//       <div className="gradient-border picture-box" id='box'>
//       <img src={require('../images/keras.png')} style={{display: 'block', margin: '0px 0px' , width: '50%'}}/>
//       </div>

// );
//   }
// }

// export default PictureBox


class PictureBox extends React.Component {
  render() {

    return (
      <div className="gradient-border picture-box" id='box'>
      <img src={this.props.image} style={{display: 'block', margin: '0px 0px' , width: '50%'}}/>
      </div>

);
  }
}

export default PictureBox