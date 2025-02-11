import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Hand from './components/Hand/Hand';
import { CardNaipes, CardNumbers, ICard } from './types/Card';

function App() {

  const [draw, setDraw] = useState<boolean>(false);
  const [drawCardVisibleSide, setDrawCardVisibleSide] = useState<"front" | "back">("back");
  const [drawCardNumber, setDrawCardNumber] = useState<CardNumbers>();
  const [drawCardNaipe, setDrawCardNaipe] = useState<CardNaipes>();

  const cardsInicial: ICard[] = [
    {
      id: 1,
      naipe: "hearts",
      number: 1
    },
    {
      id: 2,
      naipe: "hearts",
      number: 2
    },
    {
      id: 3,
      naipe: "hearts",
      number: 3
    },
    {
      id: 4,
      naipe: "hearts",
      number: 4
    },
    {
      id: 5,
      naipe: "hearts",
      number: 5
    },
    {
      id: 6,
      naipe: "hearts",
      number: 6
    },
    {
      id: 7,
      naipe: "hearts",
      number: 7
    },
    {
      id: 8,
      naipe: "hearts",
      number: 8
    },
    {
      id: 9,
      naipe: "hearts",
      number: 9
    },
  ]

  const [cards, setCards] = useState<ICard[]>(cardsInicial);



  const drawCard = () => {
    if (draw) return;

    setDraw(true);

    setTimeout(() => {
      setDrawCardVisibleSide("front");
      setDrawCardNumber(12);
      setDrawCardNaipe("spades");
    }, 300);

    setTimeout(() => {
      setCards((cards) =>
        [...cards, { id: 515, naipe: "spades", number: 12 }]
      );
    }, 1400);

    setTimeout(() => {
      setDrawCardVisibleSide("back");
      setDrawCardNumber(undefined);
      setDrawCardNaipe(undefined);

    }, 1900);

    setTimeout(() => {
      setDraw(false);
    }, 2700);
  }



  return (
    <>
      <main id="table">

        <section className="adversary-side">
          <Hand cards={[]} isAdversaryHand />
        </section>

        <section className="main-side">
          <ul className="trash">

            <li><Card number={3} naipe="spades" visibleSide={'front'} /></li>
            <li><Card number={3} naipe="diamonds" visibleSide={'front'} /></li>
            <li><Card number={3} naipe="hearts" visibleSide={'front'} /></li>
            <li><Card number={3} naipe="clubs" visibleSide={'front'} /></li>

          </ul>
          <ul className={`draw-pile ${draw ? 'drawing' : ''}`}>

            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>

            <li onClick={drawCard}>
              <Card visibleSide={drawCardVisibleSide} number={drawCardNumber} naipe={drawCardNaipe} />
            </li>

          </ul>
        </section>

        <section className="my-side">
          <Hand cards={cards} isAdversaryHand={false} />
        </section>

      </main>
    </>
  )
}

export default App;
