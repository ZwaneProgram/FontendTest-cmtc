import Image from "next/image";
import styles from "./page.module.css";
import TheCarousel from "./components/Carousel" 
import Card from './components/Card'

export default function Home() {
  return (
    <div>
      <TheCarousel />
      <Card />
    </div>
  );
}