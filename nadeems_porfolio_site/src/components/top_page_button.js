import "./top_page_button.scss"
import React from 'react';

class TopPageButton extends React.Component {
    handleClick = () => {
        console.log('Faux button clicked!');
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        };


  render() {
    return (
    //   <button className="slide">Slide</button>
      <div class="slide centered-div my-div" 
      onClick={this.handleClick}
      style={{ border: "1px solid black", borderRadius: "4px", boxSizing: "border-box", }}>Click me
      
      </div>


    );
  }
}

export default TopPageButton