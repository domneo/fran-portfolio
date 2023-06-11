import { Children, Component, useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import styles from "styles/works/Carousel.module.scss";

import { Arrow } from "components/common/Arrow";

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

const getSlidesToShowResponsive = (slidesToShow?: number) => {
  if (slidesToShow === 3) return { xl: 2, lg: 1 };
  if (slidesToShow === 2) return { xl: 2, lg: 1 };
  if (slidesToShow === 1) return { xl: 1, lg: 1 };
  return { xl: 1, lg: 1 };
};

interface CarouselProps {
  children?: React.ReactNode;
  slidesToShow?: 1 | 2 | 3;
  centerVertically?: boolean;
}

export class Carousel extends Component<CarouselProps> {
  constructor(props: CarouselProps) {
    super(props);
  }

  render() {
    const { children, slidesToShow = 1, centerVertically = false } = this.props;

    const settings: Settings = {
      speed: 800,
      draggable: false,
      slidesToShow,
      slidesToScroll: slidesToShow,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      // desktop-first
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: getSlidesToShowResponsive(slidesToShow).xl,
            slidesToScroll: getSlidesToShowResponsive(slidesToShow).xl,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: getSlidesToShowResponsive(slidesToShow).lg,
            slidesToScroll: getSlidesToShowResponsive(slidesToShow).lg,
          },
        },
      ],
    };

    return (
      <div
        className={`${styles.container} ${
          centerVertically ? "center-vertically" : ""
        }`}
      >
        <Slider {...settings}>
          {Children.map(children, (child) => (
            <div className="px-2">{child}</div>
          ))}
        </Slider>
      </div>
    );
  }
}
