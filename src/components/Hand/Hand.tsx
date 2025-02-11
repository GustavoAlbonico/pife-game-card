import "./Hand.css";
import { ICard } from '../../types/Card';
import Card from '../Card/Card';
import { useEffect } from "react";

type HandProps = {
  cards: ICard[]
  isAdversaryHand: boolean
}

const Hand = ({ cards, isAdversaryHand }: HandProps) => {

  const visibleSide = isAdversaryHand ? "back" : "front";

  useEffect(() => {
    
  },[cards]);

  return (
    <ul className={`hand ${isAdversaryHand ? "hand-adversary" : ''}`}>
      {/* <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"spades"} number={12} visibleSide={visibleSide} />
      </li> */}


      {cards.length > 0 && cards.map((card:ICard) => (
        <li key={card.id}>
          <Card naipe={card.naipe} number={card.number} visibleSide={visibleSide} />
        </li>
      ))}
    </ul>
  )
}

export default Hand;