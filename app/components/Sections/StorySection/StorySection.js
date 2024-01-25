import React from "react";
import styles from "../../../../styles/storySection.module.css";
import stylesTwo from "../../../../styles/fs.module.css";

const StorySection = () => {
  return (
    <div className={styles.storySectionParent}>
      <section className={styles.storySectionContainer}>
        <div className={styles.storyText}>
          <div className={styles.topPart}>
            <img src="/arrow.png" className={styles.arrowPic} alt="" />
            <h3 className={styles.storyHeading}>the story</h3>
          </div>
          <p className={styles.storyContent}>
            After a cataclysmic meteor strike, 25% of humanity remains
            unscathed, guarding civilization. The rest become the feared "Lost
            Beings," while a few transform into Meta-Humans, humanity's last
            hope. Join these elite warriors on a journey through DAY ZERO, where
            they fight not only for survival but to reclaim a world lost to the
            unknown. Experience their struggles and triumphs in a
            post-apocalyptic landscape, facing inner demons and battling the
            ferocious Lost Beings. The choice is yours: stand with them, uncover
            the secrets of the meta, or succumb to the engulfing darkness of DAY
            ZERO. The saga awaits you.
          </p>
          <img src="/playPic.jpg" className={styles.playPic} alt="" />
        </div>

        <div className={styles.playSection}>
          <h1 className={`${styles.mainTitle} redCustomFont`}>how to play</h1>
          <div className={styles.fullCharacterPack}>
            <div className={styles.leftCharacterPack}>
              <div className={styles.left}>
                <img src="/placeholder.png" className={styles.circle} alt="" />
              </div>

              <div className={styles.textContent}>
                <h3 className={styles.heading}>Download and Get Started</h3>
                <p className={styles.briefText}>
                  Embark on your post-apocalyptic journey in DAY ZERO by
                  downloading from your app store. Then, command Meta-Humans
                  strategically in real-time battles against Lost Beings.
                </p>
              </div>
            </div>
            <div className={styles.rightCharacterPack}>
              <div className={styles.textContent}>
                <h3 className={styles.heading}>Master the Core Gameplay:</h3>
                <p className={styles.briefText}>
                  In fast-paced battles, strategically deploy Meta-Humans with
                  unique abilities using a serum-powered system. Collect and
                  upgrade cards to build a formidable deck, defending your
                  Strongholds and securing victory by destroying your opponent's
                  Major's Stronghold.
                </p>
              </div>
              <div className={styles.left}>
                <img src="/placeholder.png" className={styles.circle} alt="" />
              </div>
            </div>
            <div className={styles.leftCharacterPack}>
              <div className={styles.left}>
                <img src="/placeholder.png" className={styles.circle} alt="" />
              </div>

              <div className={styles.textContent}>
                <h3 className={styles.heading}>Rise to Victory</h3>
                <p className={styles.briefText}>
                  Progress through arenas in PvP and PvE modes, conquering
                  challenges and leveling up with the SP system. Join
                  multiplayer tournaments, showcase strategic prowess, and
                  become the ultimate commander by mastering the meta in Day
                  Zero's world on the brink.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorySection;
