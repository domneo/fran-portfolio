import removeWidows from "hooks/useRemoveWidows";
import { Component } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "styles/Contact.module.scss";

interface MeToSliderProps {
  lines: Array<string>;
}

export class MeToSlider extends Component<MeToSliderProps> {
  constructor(props: MeToSliderProps) {
    super(props);
  }

  render() {
    const settings: Settings = {
      accessibility: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      draggable: false,
      infinite: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 0,
      touchMove: false,
      // vertical: true,
    };

    const { lines } = this.props;

    return (
      <div className={styles.meToGroup}>
        <Slider {...settings}>
          {lines.map((line) => (
            <div key={window.crypto.randomUUID()} style={{ height: "60px" }}>
              <p className="fw-light">{removeWidows(line)}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
