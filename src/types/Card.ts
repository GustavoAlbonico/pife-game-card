export type CardNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 ;
export type CardNaipes = "hearts" | "diamonds" | "clubs" | "spades";

export interface ICard {
    id: number
    naipe: CardNaipes,
    number: CardNumbers
}

