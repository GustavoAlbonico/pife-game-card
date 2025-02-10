import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Hand from './components/Hand/Hand';
import { CardNaipes, CardNumbers } from './types/Card';

function App() {

  const [draw, setDraw] = useState<boolean>(false);
  const [drawCardVisibleSide, setDrawCardVisibleSide] = useState<"front" | "back">("back");
  const [drawCardNumber, setDrawCardNumber] = useState<CardNumbers>();
  const [drawCardNaipe, setDrawCardNaipe] = useState<CardNaipes>();


  const drawCard = () => {
    if (draw) return;

    setDraw(true);

    setTimeout(() => {
      setDrawCardVisibleSide("front");
      setDrawCardNumber(12);
      setDrawCardNaipe("spades");
    }, 300);

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
          <Hand cards={[]} isAdversaryHand={false} />
        </section>

      </main>
    </>
  )
}

export default App;
