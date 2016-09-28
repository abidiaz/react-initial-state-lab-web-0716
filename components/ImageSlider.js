import React from 'react';

class ImageSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSlideIndex: 0
      };
    }
  render(){
    return(
      <div>
        <h2>I am on slide {this.state.currentSlideIndex}</h2>
      </div>
    )
  }
}

module.exports = ImageSlider;
