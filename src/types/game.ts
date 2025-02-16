import { ICard } from "./card";
import { IDrawCard } from "./drawCard";
import { IPlayer } from "./player";

export interface IGame {
    mainPlayer:IPlayer
    adversaryPlayer:IPlayer,
    deck:ICard[],
    trash:ICard[],
    cardsToChange:ICard[]
    drawCard?:IDrawCard,
    turn?: IPlayer,
    result?:IPlayer[],
}