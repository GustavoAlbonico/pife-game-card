import { ICard } from "./card";

export interface IDrawCard {
    card: ICard,
    type: "main" | "adversary"
}