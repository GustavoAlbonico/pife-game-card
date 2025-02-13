import { ICard } from "./card";
import { IPlayer } from "./player";

export interface IGame {
    player:IPlayer
    players:IPlayer[],
    deck:ICard[],
    turn: number,
    trash?:ICard[],
    result?:IPlayer[]
}