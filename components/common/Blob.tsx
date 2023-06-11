// @ts-ignore
import { spline } from "@georgedoescode/spline";
import { createRef, RefObject } from "react";
import React, { Component } from "react";
import { createNoise2D, type NoiseFunction2D } from "simplex-noise";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  noiseOffsetX: number;
  noiseOffsetY: number;
}

interface BlobProps {
  isHovering?: boolean;
  lineCount?: 1 | 2;
  showArrow?: boolean;
  color?: string;
  strokeWidth?: number;
}

interface BlobState {
  d1: string;
  d2: string;
  noiseStep: number;
  noiseIntensity: number;
}

export default class Blob extends Component<BlobProps, BlobState> {
  state: {
    d1: string;
    d2: string;
    noiseStep: number;
    noiseIntensity: number;
  };
  requestRef: RefObject<SVGSVGElement>;
  points1: Array<Point>;
  points2: Array<Point>;
  noise2D: NoiseFunction2D;

  constructor(props: BlobProps) {
    super(props);
    this.state = {
      d1: "",
      d2: "",
      // how fast we progress through "time"
      noiseStep: 0.0015,
      noiseIntensity: 20,
    };
    this.requestRef = createRef();
    this.points1 = this.createPoints(6);
    this.points2 = this.createPoints(6);
    this.noise2D = createNoise2D();
  }

  componentDidMount = () => {
    this.animate();
  };

  componentDidUpdate = (prevProps: BlobProps) => {
    const { isHovering } = this.props;
    if (prevProps.isHovering !== isHovering) {
      if (isHovering) this.animationStop();
      if (!isHovering) this.animationStart();
    }
  };

  createPoints = (numPoints: number) => {
    const points = [];
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = 75;

    for (let i = 1; i <= numPoints; i++) {
      // x & y coordinates of the current point
      const theta = i * angleStep;

      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;

      // store the point
      points.push({
        x: x,
        y: y,
        /* we need to keep a reference to the point's original {x, y} coordinates 
        for when we modulate the values later */
        originX: x,
        originY: y,
        // more on this in a moment!
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
      });
    }

    return points;
  };

  animate = () => {
    const { noiseStep, noiseIntensity } = this.state;
    this.setState({
      d1: spline(this.points1, 1.2, true),
      d2: spline(this.points2, 1.2, true),
    });

    const animatePoints = (points: Array<Point>) => {
      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
        const nX = this.noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = this.noise(point.noiseOffsetY, point.noiseOffsetY);
        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = this.map(
          nX,
          -1,
          1,
          point.originX - noiseIntensity,
          point.originX + noiseIntensity
        );
        const y = this.map(
          nY,
          -1,
          1,
          point.originY - noiseIntensity,
          point.originY + noiseIntensity
        );

        // update the point's current coordinates
        point.x = x;
        point.y = y;

        // progress the point's x, y values through "time"
        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }
    };

    // for every point...
    animatePoints(this.points1);
    animatePoints(this.points2);

    requestAnimationFrame(this.animate);
  };

  map = (
    n: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ) => {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  };

  noise = (x: number, y: number) => {
    // return a value at {x point in time} {y point in time}
    return this.noise2D(x, y);
  };

  animationStop = () => {
    const { noiseIntensity } = this.state;
    let easeReq = 0;
    let newIntensity = noiseIntensity;

    const easeIntensity = () => {
      newIntensity -= 1;
      this.setState({ noiseIntensity: newIntensity }, () => {
        if (newIntensity <= 0) {
          cancelAnimationFrame(easeReq);
        }
      });
      easeReq = requestAnimationFrame(easeIntensity);
    };

    easeReq = requestAnimationFrame(easeIntensity);
  };

  animationStart = () => {
    const { noiseIntensity } = this.state;
    let easeReq = 0;
    let newIntensity = noiseIntensity;

    const easeIntensity = () => {
      newIntensity += 0.3;
      this.setState({ noiseIntensity: newIntensity }, () => {
        if (newIntensity >= 20) {
          cancelAnimationFrame(easeReq);
        }
      });
      easeReq = requestAnimationFrame(easeIntensity);
    };

    easeReq = requestAnimationFrame(easeIntensity);
  };

  render() {
    const {
      lineCount = 2,
      showArrow,
      color = "var(--platinum)",
      strokeWidth = 0.75,
    } = this.props;
    const { d1, d2 } = this.state;

    return (
      <svg ref={this.requestRef} viewBox="0 0 215 215">
        <path
          d={d1}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {lineCount >= 2 && (
          <g transform="translate(12,3)">
            <path
              d={d2}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="transparent"
            />
          </g>
        )}
        {showArrow && (
          <path
            d="M108 112L108 93.3066L96.5731 102.653L108 112Z"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        )}
      </svg>
    );
  }
}
