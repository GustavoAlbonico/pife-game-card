import {useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Hand from './components/Hand/Hand';
import { CardSuits, CardNumbers, ICard } from './types/card';
import { useGame } from './hook/useGame';


function App() {

  const [draw, setDraw] = useState<boolean>(false);
  const [drawCardVisibleSide, setDrawCardVisibleSide] = useState<"front" | "back">("back");
  const [drawCardNumber, setDrawCardNumber] = useState<CardNumbers>();
  const [drawCardSuit, setDrawCardSuit] = useState<CardSuits>();

  const cardsInicial: ICard[] = [
    {
      id: 1,
      suit: "hearts",
      number: 1
    },
    {
      id: 2,
      suit: "hearts",
      number: 2
    },
    {
      id: 3,
      suit: "hearts",
      number: 3
    },
    {
      id: 4,
      suit: "hearts",
      number: 4
    },
    {
      id: 5,
      suit: "hearts",
      number: 5
    },
    {
      id: 6,
      suit: "hearts",
      number: 6
    },
    {
      id: 7,
      suit: "hearts",
      number: 7
    },
    {
      id: 8,
      suit: "hearts",
      number: 8
    },
    {
      id: 9,
      suit: "hearts",
      number: 9
    },
  ]

  const cardsInicial2: ICard[] = [
    {
      id: 1,
      suit: "hearts",
      number: 1
    },
    {
      id: 2,
      suit: "hearts",
      number: 2
    },
    {
      id: 3,
      suit: "hearts",
      number: 3
    },
    {
      id: 4,
      suit: "hearts",
      number: 4
    },
    {
      id: 5,
      suit: "hearts",
      number: 5
    },
    {
      id: 6,
      suit: "hearts",
      number: 6
    },
    {
      id: 7,
      suit: "hearts",
      number: 7
    },
    {
      id: 8,
      suit: "hearts",
      number: 8
    },
    {
      id: 9,
      suit: "hearts",
      number: 9
    },
  ]

  const [cards, setCards] = useState<ICard[]>(cardsInicial);
  const [cards2, setCards2] = useState<ICard[]>(cardsInicial2);



  const drawCard = () => {
    if (draw) return;

    setDraw(true);

    setTimeout(() => {
      setDrawCardVisibleSide("front");
      setDrawCardNumber(12);
      setDrawCardSuit("spades");
    }, 300);

    setTimeout(() => {
      setCards((cards) =>
        [...cards, { id: 515, suit: "spades", number: 12 }]
      );
    }, 1400);

    setTimeout(() => {
      setDrawCardVisibleSide("back");
      setDrawCardNumber(undefined);
      setDrawCardSuit(undefined);

    }, 1900);

    setTimeout(() => {
      setDraw(false);
    }, 2700);
  }

  const { state , dispatch} = useGame();

  return (
    <>
      <main id="table">

        <section className="adversary-side">
          <Hand cards={state.players[1].cards} isAdversaryHand />
        </section>

        <section className="main-side">
          <ul className="trash">

            <li><Card number={3} suit="spades" visibleSide={'front'} /></li>
            <li><Card number={3} suit="diamonds" visibleSide={'front'} /></li>
            <li><Card number={3} suit="hearts" visibleSide={'front'} /></li>
            <li><Card number={3} suit="clubs" visibleSide={'front'} /></li>

          </ul>
          <ul className={`draw-pile ${draw ? 'drawing' : ''}`}>

            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>

            <li onClick={drawCard}>
              <Card visibleSide={drawCardVisibleSide} number={drawCardNumber} suit={drawCardSuit} />
            </li>

          </ul>
        </section>

        <section className="my-side">
          <Hand cards={state.players[0].cards} isAdversaryHand={false} />
        </section>

      </main>
    </>
  )
}

export default App;
