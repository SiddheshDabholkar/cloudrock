import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.scss";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="CarouselInnerItem" style={{ width }}>
      {children}
    </div>
  );
};

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      {...handlers}
      className="Carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="CarouselInner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="CarouselButtons">
        {/* <button
          className="CarouselButtonsNext"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          prev
        </button> */}
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={index === activeIndex ? "Active" : "InActive"}
              onClick={() => {
                updateIndex(index);
              }}
            ></button>
          );
        })}
        <button
          className="CarouselButtonsNext"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}
