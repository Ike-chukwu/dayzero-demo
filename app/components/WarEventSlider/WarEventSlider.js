"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../styles/wareventslider.module.css";


const WarEventSlider = () => {
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
          <div
            className={`${styles.eventCard}`}
            style={{ borderBottom: ".005rem solid #423250" }}
          >
            <p className={styles.titleOfEvent}>title of event</p>
            <div className={styles.imgContainer}>
              Placement for event illustration
            </div>
            <span className={styles.lastText}>12/02/24 | 00:08:12</span>
            <img src="/purple.png" alt="" className={styles.specialBorder} />
          </div>
          <div
            className={styles.eventCard}
            style={{ borderBottom: ".005rem solid #2F6594" }}
          >
            <p className={styles.titleOfEvent}>title of event</p>
            <div className={styles.imgContainer}>
              Placement for event illustration
            </div>
            <span className={styles.lastText}>12/02/24 | 00:08:12</span>
            <img src="/blue.png" alt="" className={styles.specialBorder} />
          </div>
          <div
            className={styles.eventCard}
            style={{ borderBottom: ".005rem solid #917B05" }}
          >
            <p className={styles.titleOfEvent}>title of event</p>
            <div className={styles.imgContainer}>
              Placement for event illustration
            </div>
            <span className={styles.lastText}>12/02/24 | 00:08:12</span>
            <img src="/yellow.png" alt="" className={styles.specialBorder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarEventSlider;
