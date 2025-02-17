export type CardNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 ;
export type CardSuits = "hearts" | "diamonds" | "clubs" | "spades";
export type CardVisibleSide = "front" | "back" ;

export interface ICard {
    id: number
    suit: CardSuits,
    number: CardNumbers
    visibleSide: CardVisibleSide,
}

