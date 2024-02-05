"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../../styles/heroesSection.module.css";
import { heroesList } from "../../../constants.js";
import HeroesSlider from "../../HeroesSlider/HeroesSlider";

const HeroesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMobileSection, setCurrentMobileSection] = useState("aboutText");
  const [categoryCheck, setCategoryCheck] = useState("character cards");
  const [characterIndex, setCharacterIndex] = useState(0);
  const [imageArray, setImageArray] = useState(heroesList[0].imgs);

  //function that changes content when small image is clicked
  const imageChanger = (currentIndex) => {
    setCharacterIndex(currentIndex);
  };

  //get images from the category the user clicks on
  useEffect(() => {
    const imagePackInObject = heroesList.find(
      (item) => item.category == categoryCheck
    );
    const actualImages = imagePackInObject.imgs;
    setImageArray(actualImages);
  }, [categoryCheck]);

  //this sets the description button active and sets the state to aboutText
  useEffect(() => {
    if (categoryCheck == "upgrade cards") {
      setCurrentMobileSection("aboutText");
    }
  }, [categoryCheck]);

  return (
    <div className={styles.heroesParent}>
      <section className={styles.heroesContainer}>
        <h1 className={styles.heroHeading}>heroes</h1>
        <HeroesSlider
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          setCategoryCheck={setCategoryCheck}
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
                  setCategoryCheck(info.category);
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
          <div
            className={styles.leftSide}
            style={{
              alignSelf:
                categoryCheck == "upgrade cards" ? "center" : "flex-end",
            }}
          >
            <div className={styles.aboutPart}>
              <h3 className={styles.heading}>
                {heroesList[currentIndex].mainInfo[characterIndex]?.name
                  ? heroesList[currentIndex].mainInfo[characterIndex].name
                  : heroesList[currentIndex].mainInfo[0].name}
              </h3>
              <button className={styles.btnOne}>description</button>
              <p className={styles.briefText}>
                {heroesList[currentIndex].mainInfo[characterIndex]?.description
                  ? heroesList[currentIndex].mainInfo[characterIndex]
                      .description
                  : heroesList[currentIndex].mainInfo[0].description}
              </p>
            </div>
            {categoryCheck == "upgrade cards" ? null : (
              <div className={styles.abilityPart}>
                <button className={styles.btnTwo}>special ability</button>
                <p className={styles.briefText}>
                  {heroesList[currentIndex].mainInfo[characterIndex]
                    ?.specialAbility
                    ? heroesList[currentIndex].mainInfo[characterIndex]
                        .specialAbility
                    : heroesList[currentIndex].mainInfo[0].specialAbility}
                </p>
              </div>
            )}
          </div>

          <div className={styles.rightSide}>
            <div className={styles.mainImg}>
              <img
                src={
                  imageArray[characterIndex]
                    ? imageArray[characterIndex]
                    : imageArray[0]
                }
                className={styles.Img}
                alt=""
              />
            </div>

            <div
              className={styles.squareOptions}
              style={{
                overflowY:
                  categoryCheck !== "character cards" ? "hidden" : "scroll",
              }}
            >
              {imageArray.map((item, index) => {
                return (
                  <img
                    onClick={() => imageChanger(index)}
                    key={index}
                    className={styles.option}
                    src={item}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.dynamicMobileContent}>
          <h3 className={styles.heading}>
            {heroesList[currentIndex].mainInfo[characterIndex]?.name
              ? heroesList[currentIndex].mainInfo[characterIndex].name
              : heroesList[currentIndex].mainInfo[0].name}
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
              description
            </button>
            {categoryCheck == "upgrade cards" ? null : (
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
            )}
          </div>
          <p className={styles.briefText}>
            {currentMobileSection === "aboutText"
              ? heroesList[currentIndex].mainInfo[characterIndex]?.description
                ? heroesList[currentIndex].mainInfo[characterIndex].description
                : heroesList[currentIndex].mainInfo[0].description
              : heroesList[currentIndex].mainInfo[characterIndex]
                  ?.specialAbility
              ? heroesList[currentIndex].mainInfo[characterIndex].specialAbility
              : heroesList[currentIndex].mainInfo[0].specialAbility}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroesSection;
