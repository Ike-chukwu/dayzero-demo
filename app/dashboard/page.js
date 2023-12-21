"use client";
import React from "react";
import styles from "../../styles/overview.module.css";
import LevelCard from "@/app/components/LevelCard/LevelCard";
import PlayerCard from "@/app/components/PlayerCard/PlayerCard";
import FlagSlider from "@/app/components/FlagSlider/FlagSlider";

const Overview = () => {
  const levels = [
    {
      id: 0,
      context: "ranking",
      level: "100",
      borderStyle: "0.5px solid #F7CB7D ",
    },
    {
      id: 1,
      context: "level",
      level: "32",
      borderStyle: "0.5px solid #1BE1F0",
    },
    {
      id: 2,
      context: "xp",
      level: "25/100",
      borderStyle: "0.5px solid #FF3B00 ",
    },
    {
      id: 3,
      context: "stronghold",
      level: "level 4",
      borderStyle: "0.5px solid #FFE014 ",
    },
    {
      id: 4,
      context: "total matches",
      level: "36",
      borderStyle: "0.5px solid #FFE014 ",
    },
    {
      id: 5,
      context: "total wind",
      level: "22",
      borderStyle: "0.5px solid #FFE014 ",
    },
    {
      id: 6,
      context: "total losses",
      level: "14",
      borderStyle: "0.5px solid #FFE014",
    },
    {
      id: 7,
      context: "all flags",
      level: "10",
      borderStyle: "0.5px solid #FD84CC",
    },
    {
      id: 8,
      context: "active flags",
      level: "1",
      borderStyle: "0.5px solid #FD84CC",
    },
    {
      id: 9,
      context: "loot boxes",
      level: "15",
      borderStyle: "0.5px solid #B8B8FF",
    },
  ];

  return (
    <div className={styles.secondAspect}>
      <div className={styles.topMostContainerParent}>
        <div className={styles.topMostPart}>
          <div className={styles.topMostContainer}>
            <h1 className={`${styles.mainTitle} customFont`}>dayzero</h1>
            <p className={styles.textBrief}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit,
            </p>
            <div className={styles.btnPack}>
              <button className={styles.btn}>play now</button>
              <button className={styles.btn}>marketplace</button>
            </div>
          </div>
        </div>

        <div className={styles.levelCardContainer}>
          {levels.map((detail) => (
            <LevelCard
              key={detail.id}
              context={detail.context}
              level={detail.level}
              borderStyle={detail.borderStyle}
            />
          ))}
        </div>
      </div>

      <div className={styles.secondPart}>
        <div className={styles.innerSecondPart}>
          <h3 className={styles.heading}>my cards</h3>
          <button className={styles.promptBtn}>
            <img className={styles.plus} src="/plus.png" alt="" /> BUY NEW CARDS
          </button>
        </div>
        <div className={styles.playerCardContainer}>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>

      <div className={styles.flagPack}>
        <div className={styles.innerSecondPart}>
          <h3 className={styles.heading}>my flags</h3>
          <button className={styles.promptBtn}>
            <img className={styles.plus} src="/plus.png" alt="" />
            BUY NEW FLAGS
          </button>
        </div>
        <div className={styles.innerFlagContent}>
          <div className={styles.flag}>
            <img className={styles.flagImg} src="/redFlag.png" alt="" />
          </div>
          <div className={styles.flag}>
            <img className={styles.flagImg} src="/blueFlag.png" alt="" />
          </div>
          <div className={styles.flag}>
            <img className={styles.flagImg} src="/yellowFlag.png" alt="" />
          </div>
          <div className={styles.flag}>
            <img className={styles.flagImg} src="/lemonFlag.png" alt="" />
          </div>
        </div>
        <FlagSlider />
      </div>
    </div>
  );
};

export default Overview;
