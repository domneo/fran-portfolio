import { Component } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { v4 as uuidv4 } from "uuid";

interface MeToProps {
  lines: Array<string>;
}

export class MeTo extends Component<MeToProps> {
  constructor(props: MeToProps) {
    super(props);
  }

  render() {
    const settings: Settings = {
      accessibility: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      draggable: false,
      infinite: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchMove: false,
      vertical: true,
    };

    const { lines } = this.props;

    return (
      <>
        <div className="h3 me-3 flex-shrink-0">
          <div>me to</div>
        </div>
        <Slider {...settings}>
          {lines.map((line) => (
            <h3 key={uuidv4()}>{line}</h3>
          ))}
        </Slider>
      </>
    );
  }
}
