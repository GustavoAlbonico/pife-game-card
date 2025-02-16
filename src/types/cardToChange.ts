import { ICard } from "./card";

export interface ICardsToChange {
    card: ICard,
    type: "main" | "adversary"
}