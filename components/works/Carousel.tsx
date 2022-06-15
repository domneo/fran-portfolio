import { Component, useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { v4 as uuidv4 } from "uuid";

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

interface CarouselSlide {
  title: string;
  content: React.ReactNode;
}

interface CarouselProps {
  slides: Array<CarouselSlide>;
  spacer?: "sm" | "md" | "lg";
}

export class Carousel extends Component {
  props: CarouselProps;

  constructor(props: CarouselProps) {
    super(props);
    this.props = props;
  }

  render() {
    const { slides, spacer } = this.props;

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
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={uuidv4()} className={styles.slide}>
              <p className={styles.slideNumber}>{index + 1}</p>
              <h5 className="paragraph text-center mb-3">{slide.title}</h5>
              <div className={styles.line} />
              {slide.content}
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}
