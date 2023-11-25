import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import StorySection from "./components/Sections/StorySection/StorySection";
import HeroesSection from "./components/Sections/HeroesSection/HeroesSection";

export default function Home() {
  return (
    <main className={styles.heroSection}>
      <HeroSection />
      <StorySection />
      <HeroesSection />
    </main>
  );
}
