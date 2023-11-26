export type CardDataType = {
  id: number;
  title: string;
  textBody: string;
  className: string;
  buttonText: string;
  imgUrl: string;
};

export type CardType = {
  card: CardDataType;
};
