"use client";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/buypage.module.css";
import DesktopFilterCard from "@/app/components/DesktopFilterCard/DesktopFilterCard";
import { filterOptions } from "../../constants";
import NftCard from "@/app/components/NftCard/NftCard";
import MobileFilterDropDown from "@/app/components/MobileFilterDropDown/MobileFilterDropDown";
import Market from "@/app/components/Sections/Market/Market";

const Page = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set the condition based on the screen size where you want to show the footer
      setShowFooter(window.innerWidth <= 855); // Show footer when screen size is 855px and below
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.buyParent}>
      <div className={styles.innerBuyParent}>
        <section className={styles.buyContainer}>
          <div className={styles.filterPack}>
            <div className={styles.filterHeadings}>
              <span className={styles.label}>filter</span>
              <span className={styles.clearPrompt}>Clear all</span>
            </div>
            <div className={styles.innerFilterPack}>
              {filterOptions.map((item, index) => (
                <DesktopFilterCard
                  key={index}
                  title={item.title}
                  aspects={item.aspects}
                />
              ))}
            </div>
          </div>
          <MobileFilterDropDown />
          <div className={styles.cardPack}>
            <NftCard
              imgSrc="/ilus.png"
              name="card one"
              category="character"
              color="#FFEF8F"
              borderColor="0.1px solid #FFEF8F"
              bgColor=" rgba(255, 239, 143, 0.20)"
            />

            <NftCard
              imgSrc="/ilus.png"
              name="card one"
              category="character"
              color="#00B055"
              borderColor=" 0.1px solid #00B055"
              bgColor="rgba(5, 41, 37, 0.50"
            />
            <NftCard imgSrc="/halfFlag.png" name="card one" />
            <NftCard
              imgSrc="/ilus.png"
              name="card one"
              category="character"
              color="#FFEF8F"
              borderColor="0.1px solid #FFEF8F"
              bgColor=" rgba(255, 239, 143, 0.20)"
            />

            <NftCard
              imgSrc="/ilus.png"
              name="card one"
              category="character"
              color="#00B055"
              borderColor=" 0.1px solid #00B055"
              bgColor="rgba(5, 41, 37, 0.50"
            />
            <NftCard imgSrc="/halfFlag.png" name="card one" />
            <NftCard
              imgSrc="/ilus.png"
              name="card one"
              category="character"
              color="#FFEF8F"
              borderColor="0.1px solid #FFEF8F"
              bgColor=" rgba(255, 239, 143, 0.20)"
            />

            <NftCard
              imgSrc="/ilus.png"
              name="card one"
              category="character"
              color="#00B055"
              borderColor=" 0.1px solid #00B055"
              bgColor="rgba(5, 41, 37, 0.50"
            />
            <NftCard imgSrc="/halfFlag.png" name="card one" />
            <NftCard
              imgSrc="/ilus.png"
              name="card one"
              category="character"
              color="#FFEF8F"
              borderColor="0.1px solid #FFEF8F"
              bgColor=" rgba(255, 239, 143, 0.20)"
            />

            <NftCard
              imgSrc="/ilus.png"
              name="card one"
              category="character"
              color="#00B055"
              borderColor=" 0.1px solid #00B055"
              bgColor="rgba(5, 41, 37, 0.50"
            />
            <NftCard imgSrc="/halfFlag.png" name="card one" />
          </div>
        </section>
        {showFooter && <Market />}
      </div>
    </div>
  );
};

export default Page;
