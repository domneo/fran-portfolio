import { Component, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import styles from "styles/works/Carousel.module.scss";

import Blob from "components/common/Blob";

const CustomArrow = ({ className, onClick }: CustomArrowProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <button
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Blob isHovering={isHovering} showArrow />
    </button>
  );
};

const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return <CustomArrow className={styles.prevArrow} onClick={onClick} />;
};

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return <CustomArrow className={styles.nextArrow} onClick={onClick} />;
};

interface CarouselProps {
  children?: React.ReactNode;
  spacer?: "sm" | "md" | "lg";
}

export class Carousel extends Component {
  props: CarouselProps;

  constructor(props: CarouselProps) {
    super(props);
    this.props = props;
  }

  render() {
    const { children, spacer } = this.props;

    const settings = {
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      // desktop-first
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <section className={`spacer-${spacer}`}>
        <Slider {...settings}>{children}</Slider>
      </section>
    );
  }
}
