import React, { Component } from "react";
import "./HomePage.scss";

import Carousel from "../../components/Carousel/Carousel";
import Divider from "../../components/Divider/Divider";

class HomePage extends Component {
  state = {
    carousels: [
      {
        title: "Frozen 2: Queen of Frozen",
        image_url:
          "https://phephim.vn:3004/static/1570521435954-zgdkbbmkq_image.jpeg"
      },
      {
        title: "Farewell",
        image_url:
          "https://phephim.vn:3004/static/1570592833941-2vt9awe66_image.jpeg"
      },
      {
        title: "Zombieland",
        image_url:
          "https://phephim.vn:3004/static/1571884778466-u5bfc6dyb_image.jpeg"
      },
      {
        title: "Joker: Prince of crime",
        image_url:
          "https://phephim.vn:3004/static/1567655636252-sq7k8jcsx_image.jpeg"
      }
    ]
  };
  render() {
    return (
      <div className="homepage container">
        <h3>Top trending movies</h3>
        <div className="carousel_container">
          {this.state.carousels.map((element, i) => (
            <Carousel image_url={element.image_url} title={element.title} />
          ))}
        </div>
        <h4>Upcomming movies</h4>
        <Divider />

        <h4>News</h4>
        <Divider />
      </div>
    );
  }
}

export default HomePage;
