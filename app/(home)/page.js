import Image from "next/image";
// import styles from "./page.module.css";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import StorySection from "../components/Sections/StorySection/StorySection";
import HeroesSection from "../components/Sections/HeroesSection/HeroesSection";
import RoadMap from "../components/Sections/RoadMap/RoadMap";
import Slider from "../components/Sections/Slider/Slider";
import Gameplay from "../components/Sections/Gameplay/Gameplay";
import Market from "../components/Sections/Market/Market";
import Wallet from "../components/Wallet/Wallet";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <HeroesSection />
      <RoadMap />
      <Slider />
      <Gameplay />
      <Market />
    </main>
  );
}
