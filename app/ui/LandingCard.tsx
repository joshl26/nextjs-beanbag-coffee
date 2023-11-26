import React from "react";
import styles from "./LandingCard.module.css";

import { CardType } from "../types/types";

const LandingCard = ({ card }: CardType) => {
  return <div className={styles.card_container}>{card.id}</div>;
};

export default LandingCard;
