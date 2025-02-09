import "./Hand.css";
import { ICard } from '../../types/Card';
import Card from '../Card/Card';

type HandProps = {
  cards: ICard[]
  isAdversaryHand: boolean
}

const Hand = ({ cards, isAdversaryHand }: HandProps) => {

  const visibleSide = isAdversaryHand ? "back" : "front";

  return (
    <ul className={`hand ${isAdversaryHand ? "hand-adversary" : ''}`}>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>
      <li >
        <Card naipe={"diamonds"} number={3} visibleSide={visibleSide} />
      </li>


      {/* {cards.length > 0 && cards.map((card:ICard) => (
        <li key={card.id}>
          <Card naipe={card.naipe} number={card.number} />
        </li>
      ))} */}
    </ul>
  )
}

export default Hand;