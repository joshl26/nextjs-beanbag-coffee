import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { CardType } from "../types/types";
import RoundButton from "./RoundButton";
import styles from "./LandingCard.module.css";
import Expresso from "/public/expresso.jpg";
import Coldbrew from "/public/coldbrew.jpg";
import BagBean from "/public/bagbean.jpg";

const LandingCard = ({ card }: CardType) => {
  const imageTernary =
    card.className === "landing_card_one"
      ? Expresso
      : card.className === "landing_card_two"
      ? Coldbrew
      : card.className === "landing_card_three"
      ? BagBean
      : "";

  return (
    <div className={styles.card_container}>
      <div
        className={clsx({
          [styles.landing_card_one]: card.className === "landing_card_one",
          [styles.landing_card_two]: card.className === "landing_card_two",
          [styles.landing_card_three]: card.className === "landing_card_three",
        })}
      >
        <div className={styles.card_row}>
          <div className={styles.card_col}>
            <div className={styles.spacer_large}></div>
            <h2 className={styles.card_title}>{card.title}</h2>
            <div className={styles.spacer}></div>
            <h4 className={styles.card_text_body}>{card.textBody}</h4>
            <div className={styles.spacer}></div>
            <RoundButton
              href=""
              buttonText={card.buttonText}
              className={clsx({
                [styles.button_card_one]: card.className === "landing_card_one",
                [styles.button_card_two]: card.className === "landing_card_two",
                [styles.button_card_three]:
                  card.className === "landing_card_three",
              })}
            />
          </div>
          <div className={styles.card_col}>
            <Image
              className={styles.card_image}
              alt=""
              height={500}
              src={imageTernary}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
