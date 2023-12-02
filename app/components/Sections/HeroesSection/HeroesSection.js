"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../../styles/heroesSection.module.css";
import { heroesList } from "../../../constants.js";
import HeroesSlider from "../../HeroesSlider/HeroesSlider";

const HeroesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMobileSection, setCurrentMobileSection] = useState("aboutText");

  useEffect(() => {
    console.log(heroesList[currentIndex][currentMobileSection].title);
  }, [currentIndex]);

  return (
    <div className={styles.heroesParent}>
      <section className={styles.heroesContainer}>
        <h1 className={styles.heroHeading}>heroes</h1>
        <HeroesSlider
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          heroesList={heroesList}
        />
        <div className={styles.heroCategories}>
          {heroesList.map((info, index) => {
            if (index == currentIndex) {
              return (
                <span key={index} className={styles.category}>
                  {info.category}
                </span>
              );
            }
            return (
              <span
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={`${styles.category} ${styles.notActive}`}
                key={index}
              >
                {info.category}
              </span>
            );
          })}
        </div>

        <div className={styles.dynamicHeroesContent}>
          <div className={styles.leftSide}>
            <div className={styles.aboutPart}>
              <h3 className={styles.heading}>
                {heroesList[currentIndex].aboutText.title}
              </h3>
              <button className={styles.btnOne}>about</button>
              <p className={styles.briefText}>
                {heroesList[currentIndex].aboutText.pText}
              </p>
            </div>
            <div className={styles.abilityPart}>
              <button className={styles.btnTwo}>special ability</button>
              <p className={styles.briefText}>
                {heroesList[currentIndex].abilityText.pText}
              </p>
            </div>
          </div>

          <div className={styles.rightSide}>
            <div className={styles.mainImg}>
              <img src="" className={styles.Img} alt="" />
            </div>

            <div className={styles.squareOptions}>
              <div className={styles.option}></div>
              <div className={styles.option}></div>
              <div className={styles.option}></div>
              <div className={styles.option}></div>
            </div>
          </div>
        </div>

        <div className={styles.dynamicMobileContent}>
          <h3 className={styles.heading}>
            {heroesList[currentIndex].aboutText.title}
          </h3>
          <div className={styles.dynamicAspects}>
            <button
              className={
                currentMobileSection === "aboutText"
                  ? `${styles.dynamicCategory} ${styles.activeBtn}`
                  : `${styles.dynamicCategory}`
              }
              onClick={() => setCurrentMobileSection("aboutText")}
            >
              about
            </button>
            <button
              className={
                currentMobileSection === "abilityText"
                  ? `${styles.dynamicCategory} ${styles.activeBtn}`
                  : `${styles.dynamicCategory}`
              }
              onClick={() => setCurrentMobileSection("abilityText")}
            >
              special ability
            </button>
          </div>
          <p className={styles.briefText}>
            {heroesList[currentIndex][currentMobileSection].pText}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroesSection;
