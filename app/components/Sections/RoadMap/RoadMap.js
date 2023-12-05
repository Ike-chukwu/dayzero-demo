"use client";

import React, { useState } from "react";
import styles from "../../../../styles/RoadMap.module.css";
import DropdownContent from "../../DropdownContent/DropdownContent";
import { questions } from "../../../constants";


const RoadMap = () => {
  return (
    <div className={styles.roadmapParent}>
      <section className={styles.roadmapContainer}>
        <div className={styles.topSegment}>
          <h1 className={styles.mainHeading}>roadmap</h1>
          <img src="/arrowRed.png" className={styles.orangeArrow} alt="" />
        </div>
        <div className={styles.accordianPack}>
          {questions.map((question, index) => (
            <DropdownContent
              key={question.date}
              question={question.question}
              date={question.date}
              qPos={question.qPosition}
              answer={question.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
