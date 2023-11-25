import React from "react";
import styles from "../../../../styles/storySection.module.css";

const StorySection = () => {
  return (
    <div className={styles.storySectionParent}>
      <section className={styles.container}>
        <div className={styles.storyText}>
          <div className={styles.topPart}>
            <img src="/arrow.png" className={styles.arrowPic} alt="" />
            <h3 className={styles.storyHeading}>the story</h3>
          </div>
          <p className={styles.storyContent}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit,
          </p>
          <img src="/playPic.jpg" className={styles.playPic} alt="" />
        </div>

        <div className={styles.playSection}>
          <h1 className={styles.mainTitle}>how to play</h1>
          <div className={styles.fullCharacterPack}>
            <div className={styles.leftCharacterPack}>
              <div className={styles.left}>
                <img src="/placeholder.png" className={styles.circle} alt="" />
              </div>

              <div className={styles.textContent}>
                <h3 className={styles.heading}>title here</h3>
                <p className={styles.briefText}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            <div className={styles.leftCharacterPack}>
              <div className={styles.left}>
                <img src="/placeholder.png" className={styles.circle} alt="" />
              </div>

              <div className={styles.textContent}>
                <h3 className={styles.heading}>title here</h3>
                <p className={styles.briefText}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            <div className={styles.leftCharacterPack}>
              <div className={styles.left}>
                <img src="/placeholder.png" className={styles.circle} alt="" />
              </div>

              <div className={styles.textContent}>
                <h3 className={styles.heading}>title here</h3>
                <p className={styles.briefText}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
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
