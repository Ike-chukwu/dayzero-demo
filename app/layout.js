"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/Navbar/Navbar";
import styles from "./../styles/layout.module.css";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const [location, setLocation] = useState(pathName);

  useEffect(() => {
    // Update the location state whenever the route changes
    setLocation(pathName);
  }, [location]);

  return (
    <html lang="en">
      <body>
        <div
          className={styles.topPart}
          style={{
            backgroundImage: pathName === "/" ? "url(/homePic.jpg)" : null,
          }}
        >
          <Navbar />
          {location === "/" && (
            <div className={styles.innerHeroSection}>
              <h1 className={styles.mainTitle}>dayzero</h1>
              <div className={styles.bottomContent}>
                <p className={styles.textBrief}>
                  THIS TEXT WILL HOUSE AN INTRO TO THIS GAME’S STORY. BRIEF YET
                  AROUSING CURIOSITY
                </p>
                <div className={styles.btnPack}>
                  <button className={styles.btn}>
                    <img style={{ width: "12px" }} src="/apple.png" alt="" />
                    iOS
                  </button>
                  <button className={styles.btn}>
                    <img style={{ width: "12px" }} src="/android.png" alt="" />
                    android
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
