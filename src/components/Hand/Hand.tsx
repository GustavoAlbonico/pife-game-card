import "./Hand.css";
import { ICard } from '../../types/card';
import Card from '../Card/Card';
import { useEffect, useRef } from "react";
import { useGame } from "../../hook/useGame";

type HandProps = {
  cards: ICard[]
  isAdversaryHand: boolean
}

const Hand = ({ cards, isAdversaryHand }: HandProps) => {

  const { state, dispatch } = useGame();

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const visibleSide = isAdversaryHand ? "back" : "front";

  const isChangedCard = (card: ICard): string => {

    if (state.cardsToChange.some(
      (cardToChange: ICard) => cardToChange.id === card.id)
    ) {

      return "selected";
    }

    return "";
  }

  const getComputedTransform = (element: HTMLElement, property: string) =>
    window.getComputedStyle(element).getPropertyValue(property);

  const getCardElement = (index: number) => cardRefs.current[index];

  const applyAnimationStyles = (
    element: HTMLElement,
    transformThousand: string,
    transformSixty: string,
    zIndex: number,
    animationDuration: number
  ) => {
    element.style.setProperty("--transformChangingCardThousand", transformThousand);
    element.style.setProperty("--transformChangingCardSixty", transformSixty);
    element.style.setProperty("--zIndexChangingCardTo", `${zIndex}`);
    element.style.animation = `changing-card ${animationDuration}s ease-out forwards`;
    element.style.pointerEvents = "none";
  };

  const changeCards = () => {
    const [indexA, indexB] = state.cardsToChange.map(card =>
      state.mainPlayer.hand.indexOf(card)
    );

    const cardElementA = getCardElement(indexA);
    const cardElementB = getCardElement(indexB);

    if (!cardElementA || !cardElementB) return;

    const transformA = getComputedTransform(cardElementA, "transform");
    const transformB = getComputedTransform(cardElementB, "transform");

    const transformAThirty = getComputedTransform(cardElementA, "--transformChangingCardThirty");
    const transformBThirty = getComputedTransform(cardElementB, "--transformChangingCardThirty");

    const animationDuration = 1 + 0.05 * Math.abs(indexA - indexB);

    applyAnimationStyles(cardElementA, transformB, transformBThirty, indexB + 1, animationDuration);
    applyAnimationStyles(cardElementB, transformA, transformAThirty, indexA + 1, animationDuration);

    setTimeout(() => {
      dispatch({ type: "CHANGE_CARDS" });

      [cardElementA, cardElementB].forEach(element => {
        element.style.removeProperty("--transformChangingCardThousand");
        element.style.removeProperty("--transformChangingCardSixty");
        element.style.removeProperty("--zIndexChangingCardTo");
        element.style.animation = "";
        element.style.pointerEvents = "";
      });
    }, animationDuration * 1100);

  };

  const discartCard = (card:ICard) => {
    const index = state.mainPlayer.hand.indexOf(card);
    
    const cardElementToDiscart = getCardElement(index);

    if (!cardElementToDiscart) return;

    cardElementToDiscart.style.animation = `discarting-card 2s ease-out forwards`;

    setTimeout(() => {
      dispatch({ type: "DISCART", card });
      cardElementToDiscart.style.animation = '';
    }, 2000);
  }

  const onClickCard = (card: ICard) => {

    if (state.isDiscartAction) {
      discartCard(card);
      return;
    }

    dispatch({ type: "SELECT_CARD", card, isAdversaryHand });
  }

  useEffect(() => {
    cardRefs.current = new Array(cards.length).fill(null);
  }, [cards.length]);

  useEffect(() => {
    if (state.cardsToChange.length !== 2) return;
    changeCards();
  }, [state.cardsToChange]);

  return (
    <ul className={`hand ${isAdversaryHand ? "hand-adversary" : ''} ${state.isDiscartAction ? "discart" : ''}`}>
      {cards.length > 0 && cards.map((card: ICard, index: number) => (
        <li
          data-index={index}
          key={index}
          className={isChangedCard(card)}
          onClick={() => onClickCard(card)}
        >
          <Card
            ref={element => {
              if (isAdversaryHand) return;
              if (!element) return;

              cardRefs.current[index] = element;
            }}
            key={card.id}
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