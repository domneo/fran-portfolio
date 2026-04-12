import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import styles from "styles/works/SectionTracker.module.scss";

gsap.registerPlugin(ScrollToPlugin);

interface TrackerSection {
  anchorId: string;
  title: string;
}

interface SectionTrackerProps {
  sections: TrackerSection[];
  position: "top" | "bottom";
}

export const SectionTracker = ({ sections, position }: SectionTrackerProps) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const trackerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (trackerRef.current) {
      const rect = trackerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportMid = window.innerHeight / 2;
      let current: number | null = null;
      sections.forEach((section, index) => {
        const el = document.getElementById(section.anchorId);
        if (el && el.getBoundingClientRect().top <= viewportMid) {
          current = index;
        }
      });
      setActiveIndex(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (anchorId: string) => {
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: `#${anchorId}`, offsetY: 80 },
      onStart: () => {
        setIsScrolling(true);
      },
      onComplete: () => {
        setIsScrolling(false);
        resetIndices();
      },
    });
  };

  const resetIndices = () => {
    setHoveredIndex(null);
    setFocusedIndex(null);
  };

  if (sections.length === 0) return null;

  return (
    <div
      className={`
        ${styles.tracker}
        ${position === "top" ? styles.positionTop : styles.positionBottom}
      `}
      ref={trackerRef}
      onMouseMove={handleMouseMove}
    >
      {isScrolling && (
        <style jsx global>
          {`
            @media (min-width: 992px) {
              html {
                scroll-snap-type: none;
              }
            }
          `}
        </style>
      )}
      <div
        className={`${styles.line} ${sections.length > 3 ? styles.justifyBetween : styles.justifyAround}`}
      >
        {sections.map((section, index) => (
          <button
            key={section.anchorId}
            className={styles.button}
            onClick={() => handleClick(section.anchorId)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => resetIndices()}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => resetIndices()}
          >
            <div className={styles.point}>
              {index !== activeIndex && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.008 16.896C7.84667 15.9427 7.42133 14.916 6.732 13.816C6.04267 12.7013 5.06 11.6673 3.784 10.714C2.52267 9.76067 1.26133 9.152 0 8.888V7.964C1.24667 7.67067 2.442 7.128 3.586 6.336C4.74467 5.52933 5.71267 4.56133 6.49 3.432C7.282 2.27333 7.788 1.12933 8.008 0H8.932C9.064 0.733333 9.328 1.48867 9.724 2.266C10.12 3.02867 10.626 3.762 11.242 4.466C11.8727 5.15533 12.5767 5.77867 13.354 6.336C14.5127 7.15733 15.6933 7.7 16.896 7.964V8.888C16.0893 9.04933 15.2533 9.37933 14.388 9.878C13.5373 10.3767 12.7453 10.9707 12.012 11.66C11.2787 12.3347 10.6773 13.046 10.208 13.794C9.51867 14.894 9.09333 15.928 8.932 16.896H8.008Z"
                    fill="var(--pointColor)"
                  />
                </svg>
              )}
              {index === activeIndex && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.008 16.896C7.84667 15.9427 7.42133 14.916 6.732 13.816C6.04267 12.7013 5.06 11.6673 3.784 10.714C2.52267 9.76067 1.26133 9.152 0 8.888V7.964C1.24667 7.67067 2.442 7.128 3.586 6.336C4.74467 5.52933 5.71267 4.56133 6.49 3.432C7.282 2.27333 7.788 1.12933 8.008 0H8.932C9.064 0.733333 9.328 1.48867 9.724 2.266C10.12 3.02867 10.626 3.762 11.242 4.466C11.8727 5.15533 12.5767 5.77867 13.354 6.336C14.5127 7.15733 15.6933 7.7 16.896 7.964V8.888C16.0893 9.04933 15.2533 9.37933 14.388 9.878C13.5373 10.3767 12.7453 10.9707 12.012 11.66C11.2787 12.3347 10.6773 13.046 10.208 13.794C9.51867 14.894 9.09333 15.928 8.932 16.896H8.008Z"
                    fill="var(--black)"
                  />
                  <path
                    d="M8.31771 12.208C8.25087 11.7566 8.07465 11.2705 7.78906 10.7497C7.50347 10.2219 7.09635 9.73231 6.56771 9.28092C6.04514 8.82954 5.52257 8.54134 5 8.41634V7.97884C5.51649 7.83995 6.01172 7.58301 6.48568 7.20801C6.96571 6.82606 7.36675 6.36773 7.6888 5.83301C8.01693 5.2844 8.22656 4.74273 8.31771 4.20801H8.70052C8.75521 4.55523 8.86458 4.91287 9.02865 5.28092C9.19271 5.64204 9.40234 5.98926 9.65755 6.32259C9.91884 6.64898 10.2105 6.94412 10.5326 7.20801C11.0126 7.5969 11.5017 7.85384 12 7.97884V8.41634C11.6658 8.49273 11.3194 8.64898 10.9609 8.88509C10.6085 9.1212 10.2804 9.40245 9.97656 9.72884C9.67274 10.0483 9.42361 10.3851 9.22917 10.7393C8.94358 11.2601 8.76736 11.7497 8.70052 12.208H8.31771Z"
                    fill="var(--white)"
                  />
                </svg>
              )}
            </div>
            {focusedIndex === index && hoveredIndex === null && (
              <span className={styles.focusTooltip}>{section.title}</span>
            )}
          </button>
        ))}
      </div>
      {hoveredIndex !== null && (
        <>
          <div
            className={styles.tooltipAnchor}
            style={{ left: tooltipPos.x, top: tooltipPos.y }}
          ></div>
          <span className={styles.tooltip}>{sections[hoveredIndex].title}</span>
        </>
      )}
    </div>
  );
};
