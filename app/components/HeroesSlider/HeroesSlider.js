import React from "react";
import styles from "../../../styles/heroesSlider.module.css";
import { useState, useEffect, useRef } from "react";
import stylesTwo from "../../../styles/fs.module.css"


const HeroesSlider = (props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [mouseMoved, setMouseMoved] = useState(0);
  const [canClickLink, setCanClickLink] = useState(false);
  const itemsContainer = useRef();
  const aspects = ["character cards", "battle item cards", "upgrade cards"];

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setScrollLeftState(itemsContainer.current.scrollLeft);
    setMouseMoved(0);
    setCanClickLink(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentMousePosition = e.pageX || e.touches[0].pageX;
    setMouseMoved(currentMousePosition - startX);
    setCanClickLink(false);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setCanClickLink(true);
    }
  };

  const handleLinkClick = (e, item) => {
    if (!canClickLink) {
      e.preventDefault();
    } else {
      // Handle your link click logic
      // router.push('/about')
    }
  };

  useEffect(() => {
    if (isDragging) {
      itemsContainer.current.scrollLeft = scrollLeftState - mouseMoved;
    }
  }, [isDragging, scrollLeftState, mouseMoved]);

  return (
    <div className={styles.home}>
      <div className={`${styles.overallContainer}`}>
        <div
          ref={itemsContainer}
          className={styles.itemContainer}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          {props.heroesList.map((item, index) => {
            if (index === props.currentIndex) {
              return (
                <span
                  // href=""
                  className={`${styles.aspect} ${stylesTwo.subheadingFont}`}
                  key={index}
                  onClick={(e) => handleLinkClick(e, item)}
                >
                  {item.category}
                </span>
              );
            }
            return (
              <span
                // href=""
                className={`${styles.aspect} ${styles.notActive} ${stylesTwo.subheadingFont}`}
                key={index}
                onClick={(e) => props.setCurrentIndex(index)}
              >
                {item.category}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroesSlider;
