import React, { Component } from "react";
import Slider from "react-slick";
import "./slickCarousel.css";
import img1 from "../../../assets/images/slickCarouselImg/1.jpg";
import img2 from "../../../assets/images/slickCarouselImg/2.jpg";
import img3 from "../../../assets/images/slickCarouselImg/3.jpg";
import img4 from "../../../assets/images/slickCarouselImg/4.jpg";


export default class SlickCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <div className="homePageSlider">
          <Slider {...settings}>
            <div className="slideItem">
              <img src={img1} />
            </div>
            <div className="slideItem">
              <img src={img2} />
            </div>
            <div className="slideItem">
              <img src={img3} />
            </div>
            <div className="slideItem">
              <img src={img4} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
