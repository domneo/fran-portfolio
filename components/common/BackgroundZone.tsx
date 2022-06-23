import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface BackgroundZoneProps {
  children: React.ReactNode;
  background: string;
}

export const BackgroundZone = ({
  children,
  background,
}: BackgroundZoneProps) => {
  const [isInView, setIsInView] = useState(false);

  // Register the ScrollTrigger Plugin
  gsap.registerPlugin(ScrollTrigger);

  // Target the div DOM element
  const refreshTrigger = useRef<HTMLDivElement>(null);
  const mainTrigger = useRef<HTMLDivElement>(null);

  // Change the active state when scrolling into the viewport
  useEffect(() => {
    const refreshTriggerId = `refreshTrigger-${uuidv4()}`;
    const mainTriggerId = `mainTrigger-${uuidv4()}`;

    ScrollTrigger.create({
      // markers: true,
      id: refreshTriggerId,
      trigger: refreshTrigger.current,
      start: `top 100%`,
      end: `bottom 0%`,
      onEnter: () => ScrollTrigger.refresh(),
      onLeave: () => ScrollTrigger.refresh(),
      onEnterBack: () => ScrollTrigger.refresh(),
      onLeaveBack: () => ScrollTrigger.refresh(),
    });

    ScrollTrigger.create({
      // markers: true,
      id: mainTriggerId,
      trigger: mainTrigger.current,
      start: `top 60%`,
      end: `bottom 60%`,
      onEnter: () => setIsInView(true),
      onLeave: () => setIsInView(false),
      onEnterBack: () => setIsInView(true),
      onLeaveBack: () => setIsInView(false),
    });

    // Clean up ScrollTrigger instance on unmount
    return () => {
      ScrollTrigger.getById(refreshTriggerId)?.kill();
      ScrollTrigger.getById(mainTriggerId)?.kill();
    };
  }, []);

  return (
    <div ref={refreshTrigger}>
      <div ref={mainTrigger}>
        <style jsx global>
          {`
            body {
              background: ${isInView ? background : "var(--black)"};
              --white: ${isInView ? "#111111" : "#f4f0f0"};
              --platinum: ${isInView ? "#111111" : "#eaeae7"};
              --bone: ${isInView ? "#111111" : "#d1d1bc"};
            }
          `}
        </style>
        {children}
      </div>
    </div>
  );
};
