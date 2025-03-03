import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Hand from './components/Hand/Hand';
import { useGame } from './hook/useGame';
import { ICard } from './types/card';


function App() {
  const { state, dispatch } = useGame();

  const [draw, setDraw] = useState<boolean>(false);

   const drawCard = () => {
    if (draw) return;

    setDraw(true);

    setTimeout(() => {
      dispatch({ type: "DRAW_CARD" });
    }, 300);

    setTimeout(() => {
      dispatch({ type: "ADD_CARD_TO_HAND" });
    }, 1400);

    setTimeout(() => {
      dispatch({ type: "CLEAR_DRAWN_CARD" });
    }, 1900);

    setTimeout(() => {
      setDraw(false);
    }, 2700);
  }

  return (
    <>
      <main id="table">

        <section className="adversary-side">
          <Hand cards={state.adversaryPlayer.hand} isAdversaryHand={true} />
        </section>

        <section className="main-side">
          <ul className="trash">

            {/* {state.trash.length > 0 && state.trash.map((card: ICard) => (
              <li><Card number={card.number} suit={card.suit} visibleSide={card.visibleSide} /></li>
            ))} */}
            <li><Card number={3} suit={"spades"} visibleSide={"front"} /></li>
            <li><Card number={3} suit={"spades"} visibleSide={"front"} /></li>
            <li><Card number={3} suit={"spades"} visibleSide={"front"} /></li>
            <li><Card number={8} suit="hearts" visibleSide={"front"} /></li>

          </ul>
          <ul className={`draw-pile ${draw ? 'drawing' : ''}`}>

            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>

            <li onClick={drawCard}>
              <Card
                visibleSide={"front"}
                number={7}
                suit={"diamonds"}
              />
            </li>

          </ul>
        </section>

        <section className="my-side">
          <Hand cards={state.mainPlayer.hand} isAdversaryHand={false} />
        </section>

      </main>
    </>
  )
}

export default App;
