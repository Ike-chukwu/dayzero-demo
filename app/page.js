import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
import StorySection from "./components/StorySection/StorySection";

export default function Home() {
  return (
    <main className={styles.heroSection}>
      <HeroSection />
      <StorySection />
    </main>
  );
}
