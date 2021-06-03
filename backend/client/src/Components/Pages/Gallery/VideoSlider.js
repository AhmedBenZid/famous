import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";

import { config } from "react-spring";

export default class videoSlider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.wobbly
  };

  slides = [
    {
      key: 1,
      content: <video autoPlay width='500px' height='500px' src="./vids/team-famous-pictures-tunisia.mp4" type="video/mp4"></video>
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: 4,
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: 5,
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: 6,
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: 7,
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: 8,
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
