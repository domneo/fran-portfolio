import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "styles/works/Header.module.scss";

interface HeaderProps {
  image: string;
  number: string;
  title: string;
  subtitle: string;
}

export const Header = ({ image, number, title, subtitle }: HeaderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Register the ScrollTrigger Plugin
  gsap.registerPlugin(ScrollTrigger);

  // Target the div DOM element
  const expandTrigger = useRef<HTMLDivElement>(null);

  // Change the active state when scrolling into the viewport
  useEffect(() => {
    ScrollTrigger.create({
      // markers: true,
      id: "expand",
      trigger: expandTrigger.current,
      start: `top top`,
      end: `top top`,
      onEnter: () => setIsExpanded(true),
      onLeaveBack: () => setIsExpanded(false),
    });

    // Clean up ScrollTrigger instance on unmount
    return () => ScrollTrigger.getById("expand")?.kill();
  }, []);

  return (
    <>
      <div ref={expandTrigger} />
      <div className="overflow-hidden">
        <div
          className={`${styles.heroImage} ${isExpanded ? styles.expanded : ""}`}
        >
          <div className={styles.number}>{number}</div>
          <div className="position-relative w-100 h-100">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
              priority
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.titleWrapper} ${
          isExpanded ? styles.expanded : ""
        } spacer-md`}
      >
        <h1 className="display-1">{title}</h1>
        <h2 className="display-5 text-bone">{subtitle}</h2>
      </div>
    </>
  );
};
