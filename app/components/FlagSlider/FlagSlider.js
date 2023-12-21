import React from "react";
import styles from "../../../styles/flagSlider.module.css";
import { useState, useEffect, useRef } from "react";
import { flags } from "../../constants";

const FlagSlider = (props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [mouseMoved, setMouseMoved] = useState(0);
  const [canClickLink, setCanClickLink] = useState(false);
  const itemsContainer = useRef();

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
          {flags.map((item, index) => (
            <span
              // href=""
              key={index}
              onClick={(e) => handleLinkClick(e, item)}
            >
              <div className={styles.image}>
                <img className={styles.specificImg} src={item.img} alt="" />
                <p className={styles.environmentName}>{item.name}</p>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagSlider;
