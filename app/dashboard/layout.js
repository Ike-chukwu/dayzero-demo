"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../../styles/dashboardLayout.module.css";
import { dashboardNav } from "../constants";
import Link from "next/link";
import Market from "../components/Sections/Market/Market";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

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
    <div className={styles.dashboardParent}>
      <div className={styles.innerDashboardContainer}>
        <section className={styles.dashboardContainer}>
          <nav className={styles.navContainer}>
            <div className={styles.innerNav}>
              {dashboardNav.map((link, index) => {
                return (
                  <button
                    key={index}
                    className={
                      pathname === link.address
                        ? `${styles.link} ${styles.activeLink}`
                        : `${styles.link}`
                    }
                  >
                    <Link className={styles.address} href={link.address}>
                      {link.name}
                    </Link>
                  </button>
                );
              })}
            </div>
          </nav>
          {children}
        </section>
        {showFooter && <Market />}
      </div>
    </div>
  );
}
