"use client";
import React, { useState } from "react";
import styles from "../../../styles/leaderboard.module.css";
import Link from "next/link";
import PvpUserCard from "@/app/components/PvpUserCard/PvpUserCard";
import { pvpUsers } from "../../constants";
import { warUsers } from "../../constants";
import WarEventUserCard from "@/app/components/WarEventUserCard/WarEventUserCard";

const page = () => {
  const [currentLoc, setCurrentLoc] = useState("pvp multiplayer");
  const aspects = ["pvp multiplayer", "war event"];

  return (
    <div className={styles.leaderboardContainer}>
      <div className={styles.topSection}>
        <h2 className={styles.leaderTitle}>leaderboard</h2>
      </div>
      <div className={styles.aspectsContainer}>
        <div className={styles.aspects}>
          {aspects.map((aspect) => {
            return (
              <div
                className={
                  currentLoc == aspect
                    ? `${styles.link} ${styles.activeLink}`
                    : `${styles.link}`
                }
                onClick={() => {
                  setCurrentLoc(aspect);
                  console.log(aspect);
                }}
              >
                {aspect}
              </div>
            );
          })}
        </div>

        <div className={styles.cardPack}>
          {currentLoc == "pvp multiplayer"
            ? pvpUsers.map((user) => (
                <PvpUserCard
                  key={user.id}
                  name={user.name}
                  imgSrc={user.userPic}
                  serial={user.serial}
                  tG={user.tG}
                  tW={user.tW}
                  tl={user.tL}
                  badge={user.badge}
                  dList={user.dList}
                  level={user.level}
                />
              ))
            : warUsers.map((user) => <WarEventUserCard />)}
        </div>
      </div>
    </div>
  );
};

export default page;
