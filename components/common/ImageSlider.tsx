import { Arrow } from "components/common/Arrow";
import { Component, useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "styles/ImageSlider.module.scss";
import { ArticleImage, ArticleImageProps } from "./ArticleImage";

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

interface ImageSliderProps {
  images?: (ArticleImageProps | null)[];
}
export class ImageSlider extends Component<ImageSliderProps> {
  constructor(props: ImageSliderProps) {
    super(props);
  }

  slider: Slider | null = null;

  state = {
    currentImage: 0,
  };

  onPrev = () => {
    this.slider?.slickPrev();
  };

  onNext = () => {
    this.slider?.slickNext();
  };

  render() {
    const { images } = this.props;
    const { currentImage } = this.state;

    const pageCount = images?.length || 1;

    const settings: Settings = {
      arrows: false,
      adaptiveHeight: true,
      speed: 300,
      beforeChange: (_currentImage, nextImage) => {
        this.setState({ currentImage: nextImage });
      },
    };

    return (
      <div className={styles.container}>
        <Slider
          ref={(c) => {
            this.slider = c;
          }}
          {...settings}
        >
          {images?.map((image, idx) => {
            if (image) {
              return (
                <div key={window.crypto.randomUUID()} className={styles.slide}>
                  <ArticleImage {...image} />
                </div>
              );
            }
          })}
        </Slider>
        <div className="gap-3 py-2 d-flex align-items-center justify-content-center">
          <div>{`${currentImage + 1} / ${pageCount}`}</div>
        </div>
        <PrevArrow onClick={this.onPrev} />
        <NextArrow onClick={this.onNext} />
      </div>
    );
  }
}
