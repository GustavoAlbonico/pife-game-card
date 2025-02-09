import './App.css';
import Card from './components/Card/Card';
import Hand from './components/Hand/Hand';

function App() {

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
          <ul className="draw-pile">
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
            <li><Card visibleSide={'back'} /></li>
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
