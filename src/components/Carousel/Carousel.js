import React, { Component } from "react";
import "./Carousel.scss";

class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="carousel__image">
          <img src={this.props.image_url}></img>
        </div>
        <div className="carousel__title">{this.props.title}</div>
      </div>
    );
  }
}

export default Carousel;
