import { Arrow } from "components/common/Arrow";
import Image from "next/image";
import { Component, useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "styles/ImageSlider.module.scss";

const CustomArrow = ({ className, onClick }: CustomArrowProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <button
      className={className}
      onClick={onClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Arrow isHovering={isHovering} />
    </button>
  );
};

const PrevArrow = ({ onClick }: CustomArrowProps) => {
  return <CustomArrow className={styles.prevArrow} onClick={onClick} />;
};

const NextArrow = ({ onClick }: CustomArrowProps) => {
  return <CustomArrow className={styles.nextArrow} onClick={onClick} />;
};

interface Slide {
  image: string;
  title?: string | null;
  caption?: string | null;
}
interface ImageSliderProps {
  slides?: (Slide | null)[];
}
export class ImageSlider extends Component<ImageSliderProps> {
  constructor(props: ImageSliderProps) {
    super(props);
  }

  slider: Slider | null = null;

  state = {
    currentSlide: 0,
  };

  onPrev = () => {
    this.slider?.slickPrev();
  };

  onNext = () => {
    this.slider?.slickNext();
  };

  render() {
    const { slides } = this.props;
    const { currentSlide } = this.state;

    const pageCount = slides?.length || 1;

    const settings: Settings = {
      arrows: false,
      adaptiveHeight: true,
      speed: 300,
      beforeChange: (_currentSlide, nextSlide) => {
        this.setState({ currentSlide: nextSlide });
      },
    };

    return (
      <div className={styles.container}>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {slides?.map((slide) => {
            if (slide) {
              return (
                <div key={window.crypto.randomUUID()} className={styles.slide}>
                  <img
                    src={slide.image}
                    alt={slide.title || ""}
                    sizes={"160vw"}
                    className={styles.image}
                  />
                  {slide.caption && (
                    <p className="mt-1 w-100">
                      <small>{slide.caption}</small>
                    </p>
                  )}
                </div>
              );
            }
          })}
        </Slider>
        <div className="gap-3 py-3 d-flex align-items-center justify-content-center">
          <PrevArrow onClick={this.onPrev} />
          <div>{`${currentSlide + 1} / ${pageCount}`}</div>
          <NextArrow onClick={this.onNext} />
        </div>
      </div>
    );
  }
}
