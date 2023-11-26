import styles from "./page.module.css";
import LandingCard from "./ui/LandingCard";

import { CardDataType } from "./types/types";
import { CardData } from "./data/cardData";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section_landing_card}>
        {CardData.map((card: CardDataType) => (
          <>
            <div className={styles.spacer}></div>
            <LandingCard card={card} />
            <div className={styles.spacer}></div>
          </>
        ))}
      </section>
    </main>
  );
}
