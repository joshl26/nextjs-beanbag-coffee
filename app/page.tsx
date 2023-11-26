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
            <LandingCard key={card.id} card={card} />
            <div className={styles.spacer}></div>
          </>
        ))}
        <p className={styles.landing_info}>
          *Valid 11/17 - 11/30, enjoy 25% off your next Beanbag order of $20 or
          more, excluding taxes and fees, on DoorDash. Fees subject to change.
          Max value of discount is $10. Does not apply to pick up or dine-in
          orders. Valid only at participating Beanbag locations in Canada.
          Restricted delivery area. Menu items may be limited. Limit one
          redemption per person. All deliveries subject to availability. Prices
          for Beanbag items purchased through DoorDash may be higher than posted
          in stores or as marked. See the DoorDash app for availability and
          restrictions.
        </p>
        <div className={styles.spacer}></div>
      </section>
    </main>
  );
}
