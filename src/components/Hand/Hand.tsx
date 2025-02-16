import "./Hand.css";
import { ICard } from '../../types/card';
import Card from '../Card/Card';
import { useEffect } from "react";
import { useGame } from "../../hook/useGame";

type HandProps = {
  cards: ICard[]
  isAdversaryHand: boolean
}

const Hand = ({ cards, isAdversaryHand }: HandProps) => {

  const { state, dispatch } = useGame();

  const visibleSide = isAdversaryHand ? "back" : "front";

  const isChangedCard = (card: ICard): string => {

    if (state.cardsToChange.some(
      (cardToChange: ICard) => cardToChange.id === card.id)
    ) {
      return "selected";
    }

    return "";
  }

  const changeCards = () => {
    if (state.cardsToChange.length !== 2) return;

    const [cardToChangeIndexA, cardToChangeIndexB]: number[] = state.cardsToChange
      .map(cardToChange => state.mainPlayer.hand.indexOf(cardToChange));

    const cardElementA: HTMLElement = document.querySelector(
      `.hand:not(.hand-adversary) li[data-index="${cardToChangeIndexA}"] .card`
    )!;

    const cardElementB: HTMLElement = document.querySelector(
      `.hand:not(.hand-adversary) li[data-index="${cardToChangeIndexB}"] .card`
    )!;

    const cardElementAStyleTransform = window.getComputedStyle(cardElementA).getPropertyValue("transform");
    const cardElementBStyleTransform = window.getComputedStyle(cardElementB).getPropertyValue("transform");

    cardElementA.style.transform = cardElementBStyleTransform;
    cardElementA.style.zIndex = `${cardToChangeIndexB + 1}`;

    cardElementB.style.transform = cardElementAStyleTransform;
    cardElementB.style.zIndex = `${cardToChangeIndexA + 1}`;

    setTimeout(() => {
      dispatch({ type: "CHANGE_CARDS"});

      cardElementA.style.transform = '';
      cardElementA.style.zIndex = '';

      cardElementB.style.transform = '';
      cardElementB.style.zIndex = '';
    }, 1000)

  }



  useEffect(() => {
    changeCards();
  }, [state.cardsToChange]);

  return (
    <ul className={`hand ${isAdversaryHand ? "hand-adversary" : ''}`}>
      {cards.length > 0 && cards.map((card: ICard, index: number) => (
        <li
          data-index={index}
          key={card.id}
          className={isChangedCard(card)}
          onClick={() => dispatch({ type: "SELECT_CARD", card, isAdversaryHand })}
        >
          <Card
            suit={card.suit}
            number={card.number}
            visibleSide={visibleSide}
          />
        </li>
      ))}
    </ul>
  )
}

export default Hand;